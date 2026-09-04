import React from 'react';

import { parseSPObj } from '../../parseSPObj';
import { useUrlStateBase } from '../../useUrlStateBase';
import {
  filterUnknownParams,
  filterUnknownParamsClient,
  getParams,
  getSearch,
  isSSR,
  type JSONCompatible,
  routerHistory,
  subscribeToUrl,
} from '../../utils';

/**
 * Astro hook, for React islands. Returns `urlState`, `setState`, and `setUrl` functions
 *
 * Astro has no client-side router by default, so the URL is written with
 * `window.history` and read back on back/forward, on this hook's own writes,
 * and on any other `pushState`/`replaceState`, `<ClientRouter />` included.
 * Islands on one page share the state.
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {Object} params - Object with other parameters
 * @param {boolean} params.replace replace URL or push, default `true`
 * @param {?object} params.searchParams `Object.fromEntries(Astro.url.searchParams)`, passed as an island prop so the server render matches the URL
 * @returns {Object} [result] State and callbacks
 * @returns {Object} [result.urlState] - current state object
 * @returns {Function} [result.setUrl] - function to update state and url
 * @returns {Function} [result.setState] - function to update state only
 * @returns {Function} [result.reset] - function to reset state and url to default
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * // island: <Form client:load searchParams={Object.fromEntries(Astro.url.searchParams)} />
 * const { urlState, setState, setUrl, reset } = useUrlState(form, { searchParams });
 *
 * setState({ name: 'test' });
 * setUrl({ name: 'test' }, { replace: false });
 * setUrl(curr => ({ ...curr, name: 'test' }));
 * // RESET state and url
 * setUrl((_curr, initialState) => initialState);
 * // Or
 * reset();
 * reset({ replace: false });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/astro/useUrlState}
 */
export function useUrlState<T extends JSONCompatible>(
  defaultState: T,
  params?: Params,
): {
  /**
   * State object. Don't mutate directly, use `setState` or `setUrl`
   */
  urlState: T;
  /**
   * * Example:
   * ```ts
   * setState({ name: 'test' });
   * // or
   * setState(curr => ({ ...curr, name: 'test' }) );
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/astro/useUrlState#setstate}
   */
  setState: (value: Partial<T> | ((currState: T, initial: T) => T)) => void;
  /**
   * * Example:
   * ```ts
   * setUrl({ name: 'test' });
   * // or
   * setUrl((curr) => ({ ...curr, name: 'test' }), { replace: false } );
   *  * Reset
   *  setUrl((_curr, initialState) => initialState, { replace: false } );
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/astro/useUrlState#seturl}
   */
  setUrl: (
    value?: Partial<T> | ((currState: T, initialState: T) => T),
    options?: Options,
  ) => void;
  /**
   * * Example:
   * ```ts
   * reset();
   * // or
   * reset({ replace: false })
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/astro/useUrlState#reset}
   */
  reset: (options?: Options) => void;
};

export function useUrlState<T extends JSONCompatible>(
  defaultState: T,
  params?: Params,
) {
  const {
    state: urlState,
    updateState: setState,
    updateUrl: updateUrlBase,
    reset: resetBase,
    getState,
    pendingUrlUpdate,
  } = useUrlStateBase(defaultState, routerHistory, ({ parse }) =>
    isSSR
      ? parseSPObj(
          filterUnknownParams(defaultState, params?.searchParams),
          defaultState,
        )
      : parse(
          filterUnknownParamsClient(
            defaultState,
            params?.searchParams || getSearch(),
          ),
        ),
  );

  const syncFromUrl = React.useCallback(() => {
    // when multiple instances of hook used, can be race condition with URL updates
    if (pendingUrlUpdate()) return;

    setState(
      filterUnknownParams(
        defaultState,
        parseSPObj(
          Object.fromEntries(getParams(getSearch()).entries()),
          defaultState,
        ) as Partial<T>,
      ),
    );
  }, []);

  React.useEffect(() => {
    // on mount too, an island can hydrate after the URL moved
    syncFromUrl();

    return subscribeToUrl(syncFromUrl);
  }, [syncFromUrl]);

  const defOpts = React.useMemo(
    () => ({ replace: params?.replace ?? true }),
    [params?.replace],
  );

  const setUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: Options) =>
      updateUrlBase(value, { ...defOpts, ...options }),
    [updateUrlBase, defOpts],
  );

  const reset = React.useCallback(
    (options?: Options) => {
      resetBase({ ...defOpts, ...options });
    },
    [resetBase, defOpts],
  );

  return {
    setState,
    setUrl,
    urlState,
    reset,
    getState,
  };
}

export type Options = {
  replace?: boolean;
};

export type Params = {
  searchParams?: object;
  replace?: boolean;
};
