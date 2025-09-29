import React from "react";

import { TIMEOUT } from "../constants";
import { useInsertionEffect } from "../useInsertionEffect";
import { useSharedState } from "../useSharedState";
import { useUrlEncode } from "../useUrlEncode";
import {
  filterUnknownParamsClient,
  getSearch,
  type JSONCompatible,
  popstateEv,
  type Router,
} from "../utils";

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

// Global timer for "last update wins" behavior across all hook instances
let timer: ReturnType<typeof setTimeout> | undefined;
// Track active update info to prevent memory leaks
let pendingUpdate:
  | {
      router: Router;
      method: "push" | "replace";
      url: string;
      opts?: Partial<Options>;
    }
  | undefined;

export function useUrlStateBase<T extends JSONCompatible>(
  defaultState: T,
  router: Router,
  getInitialState?: ({
    parse,
  }: {
    parse: ReturnType<typeof useUrlEncode<T>>["parse"];
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

  useInsertionEffect(() => {
    // for history navigation
    const popCb = () => {
      setState(parse(filterUnknownParamsClient(defaultState, getSearch())));
    };

    window.addEventListener(popstateEv, popCb);

    return () => {
      window.removeEventListener(popstateEv, popCb);
    };
  }, []);

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof setState>[0], options?: Options) => {
      const newVal =
        typeof value === "function"
          ? value(getState(), defaultState)
          : {
              ...getState(),
              ...value,
            };

      const qStr = stringify(newVal, getOtherParams(defaultState));

      const base = removeBasename(window.location.pathname, basename);
      const newUrl = `${base}${qStr.length ? "?" : ""}${qStr}${window.location.hash}`;
      const currUrl = `${base}${window.location.search}${window.location.hash}`;
      if (newUrl === currUrl) return;

      setState(newVal);

      const { replace, ..._rest } = options || {};

      clearTimeout(timer);
      timer = undefined;

      pendingUpdate = {
        router,
        method: replace ? "replace" : "push",
        url: newUrl,
        opts: _rest,
      };

      timer = setTimeout(() => {
        if (pendingUpdate) {
          pendingUpdate.router[pendingUpdate.method](
            pendingUpdate.url,
            pendingUpdate.opts,
          );
          pendingUpdate = undefined;
        }
        timer = undefined;
      }, TIMEOUT);
    },
    [router, stringify, getState],
  );

  const reset = React.useCallback(
    (options?: Options) => {
      setState(defaultState);
      updateUrl(defaultState, options);
    },
    [updateUrl, setState],
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

function getOtherParams<T extends object>(shape: T) {
  const shapeKeys = Object.keys(shape);
  const search = window.location.search;
  const allParams = new URLSearchParams(search);
  const params = new URLSearchParams();

  for (const [key, value] of allParams) {
    !shapeKeys.includes(key) && params.set(key, value);
  }
  return params;
}

interface OptionsObject {
  [key: string]: unknown;
}

export interface Options extends OptionsObject {
  replace?: boolean;
}

function removeBasename(path: string, basename?: string) {
  if (!basename || basename === "/") {
    return path;
  }

  return path.slice(basename.length);
}
