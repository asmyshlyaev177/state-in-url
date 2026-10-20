import React from 'react';

import { TIMEOUT } from '../constants';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { useSharedState } from '../useSharedState';
import { useUrlEncode } from '../useUrlEncode';
import {
  filterUnknownParamsClient,
  getOtherParams,
  getSearch,
  type JSONCompatible,
  popstateEv,
  type Router,
  subscribeToUrl,
} from '../utils';

/**
 * A custom React hook to create custom hooks.
 *
 * @template T extends JSONCompatible
 * @param {T} defaultState - An object representing the default state values.
 * @param {Router} router - Router object with [push] and [replace] methods.
 * @param {Function} [getInitialState] - Optional function to get the initial state, passes `parse`, and `filterUnknownParams` helpers
 * @returns {Object} [result] State and callbacks
 * @returns {Object} [result.state] - current state object
 * @returns {Function} [result.updateUrl] - function to update state and url
 * @returns {Function} [result.updateState] - function to update state only
 * @returns {Function} [result.reset] - function to reset state and url to default
 *
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const router = { push: () => {}, replace: () => {} };
 * const { state, updateState, updateUrl, reset } = useUrlStateBase(form, router, ({ parse, filterClientSP }) =>
 *   isSSR() ? getServerState() : getClientState()
 * );
 *
 * updateState({ name: 'John' });
 * updateState((curr, initialState) => ({ ...curr, name: 'John' }));
 * updateUrl({ name: 'John' }, { replace: true });
 * updateUrl(curr => ({ ...curr, name: 'John' }), { replace: true });
 * reset()
 * reset({ replace: true })
 *
 *  ```
 *
 * * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/integrations/packages/urlstate/useUrlStateBase}
 */

type PendingWrite = {
  router: Router;
  method: 'push' | 'replace';
  url: string;
  pathname: string;
  search: string;
  opts?: Partial<Options>;
};

// Global timer for "last update wins" behavior across all hook instances
let timer: ReturnType<typeof setTimeout> | undefined;
// Track active update info to prevent memory leaks
let pendingUpdate: PendingWrite | undefined;

// The write handed to the router whose navigation has not reached window.location: Next with
// useHistory: false waits for the server response, a data router for its loaders.
let writeInFlight: { from: string; to: string; search: string } | undefined;
let unsubscribeFromUrl: (() => void) | undefined;
let mountedHooks = 0;

const getUrlHere = () => window.location.pathname + window.location.search;

function clearWriteInFlight() {
  writeInFlight = undefined;
  unsubscribeFromUrl?.();
  unsubscribeFromUrl = undefined;
}

function clearWrites() {
  clearTimeout(timer);
  timer = undefined;
  pendingUpdate = undefined;
  clearWriteInFlight();
}

// Still on its way while the page shows the URL it left from. Any URL change ends it: Next discards and
// a data router interrupts a navigation that another one overtakes.
function getWriteInFlight() {
  if (!writeInFlight) return undefined;
  const here = getUrlHere();
  if (here === writeInFlight.from && here !== writeInFlight.to) {
    return writeInFlight;
  }
  clearWriteInFlight();
  return undefined;
}

function recordSentWrite(to: string, search: string) {
  const from = getWriteInFlight()?.from ?? getUrlHere();
  // a history router has landed by now, and an undo back to `from` supersedes the write it undoes
  if (from === to) {
    clearWriteInFlight();
    return;
  }
  writeInFlight = { from, to, search };
  unsubscribeFromUrl ??= subscribeToUrl(clearWriteInFlight);
}

// Decided now, not at the call: the write this one undoes may have landed since.
function sendWrite(write: PendingWrite) {
  const live = getWriteInFlight();
  const to = write.pathname + write.search;
  if (live?.to === to) return;

  const isUndoToHere = to === getUrlHere();
  if (isUndoToHere && !live) return;
  // The entry of a write still on its way may never be pushed (Next discards it, a data router
  // interrupts it), so the undo replaces the entry on screen instead of pushing onto it.
  const method = isUndoToHere ? 'replace' : write.method;

  write.router[method](write.url, write.opts);
  recordSentWrite(to, write.search);
}

export function useUrlStateBase<T extends JSONCompatible>(
  defaultState: T,
  router: Router,
  getInitialState?: ({
    parse,
  }: {
    parse: ReturnType<typeof useUrlEncode<T>>['parse'];
  }) => T,
  basename?: string,
) {
  const { parse, stringify } = useUrlEncode(defaultState);
  const { state, getState, setState } = useSharedState(
    defaultState,
    () =>
      getInitialState?.({
        parse,
      }) || defaultState,
  );

  const searchAtRender = React.useRef<string>();
  if (searchAtRender.current === undefined)
    searchAtRender.current = getSearch();

  useIsomorphicLayoutEffect(() => {
    // for history navigation
    const popCb = () => {
      setState(parse(filterUnknownParamsClient(defaultState, getSearch())));
    };

    window.addEventListener(popstateEv, popCb);

    // popstate before registration is not replayed
    if (searchAtRender.current !== getSearch()) popCb();

    return () => {
      window.removeEventListener(popstateEv, popCb);
    };
  }, []);

  // A passive effect: Suspense hides a tree by cleaning up its layout effects only.
  React.useEffect(() => {
    mountedHooks += 1;
    return () => {
      mountedHooks -= 1;
      // a write waiting or on its way belongs to the hooks on the page
      if (mountedHooks === 0) clearWrites();
    };
  }, []);

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof setState>[0], options?: Options) => {
      const newVal =
        typeof value === 'function'
          ? value(getState(), defaultState)
          : {
              ...getState(),
              ...value,
            };

      // before the URL check: updateState can put state ahead of a URL that already holds newVal
      setState(newVal);

      // While a write waits or is on its way, the URL is the one it will leave, not window.location: an undo
      // compares against it, and another hook's params in it survive this write.
      const currSearch =
        pendingUpdate?.search ??
        getWriteInFlight()?.search ??
        window.location.search;
      const qStr = stringify(newVal, getOtherParams(defaultState, currSearch));
      const search = qStr.length ? `?${qStr}` : '';

      const base = removeBasename(window.location.pathname, basename);
      const newUrl = `${base}${search}${window.location.hash}`;
      if (newUrl === `${base}${currSearch}${window.location.hash}`) return;

      const { replace, ..._rest } = options || {};

      clearTimeout(timer);
      pendingUpdate = {
        router,
        method: replace ? 'replace' : 'push',
        url: newUrl,
        pathname: window.location.pathname,
        search,
        opts: _rest,
      };

      timer = setTimeout(() => {
        // first: a router that throws (WebKit's history rate limit) must not leave the timer stuck
        timer = undefined;
        if (!pendingUpdate) return;
        const write = pendingUpdate;
        pendingUpdate = undefined;
        sendWrite(write);
      }, TIMEOUT);
    },
    [router, stringify, getState],
  );

  const reset = React.useCallback(
    (options?: Options) => updateUrl(defaultState, options),
    [updateUrl],
  );

  return {
    updateState: setState,
    updateUrl,
    state,
    reset,
    getState,
    pendingUrlUpdate: () => timer !== undefined,
  };
}

interface OptionsObject {
  [key: string]: unknown;
}

export interface Options extends OptionsObject {
  replace?: boolean;
}

function removeBasename(path: string, basename?: string) {
  if (!basename || basename === '/') {
    return path;
  }

  return path.slice(basename.length);
}
