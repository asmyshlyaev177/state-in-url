import React from "react";
import {
  type NavigateOptions,
  useHref,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { parseSPObj } from "../../parseSPObj";
import { useUrlStateBase } from "../../useUrlStateBase";
import {
  assignValue,
  filterUnknownParams,
  filterUnknownParamsClient,
  type JSONCompatible,
  routerHistory,
} from "../../utils";

/**
 * React-router hook. Returns `urlState`, `setState`, and `setUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {Object} params - Object with other parameters
 * @param {NavigateOptions} params.NavigateOptions See type from [`react-router-dom`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html)
 * @param {boolean} params.replace replace URL or push, default `true`
 * @param {boolean} params.useHistory use window.history for navigation, default `false`
 * @param {boolean} params.preventScrollReset keep scroll position, default `true`
 * @returns {Object} [result] State and callbacks
 * @returns {Object} [result.state] - current state object
 * @returns {Function} [result.setUrl] - function to update state and url
 * @returns {Function} [result.setState] - function to update state only
 * @returns {Function} [result.reset] - function to reset state and url to default
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState(form, { replace: false, preventScrollReset: false });
 *
 * setState({ name: 'test' });
 * setUrl({ name: 'test' }, { replace: true });
 * // similar to React.useState
 * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true });
 * // RESET state and url
 * setUrl((_curr, initialState) => initialState);
 * // Or
 * reset();
 * reset({ replace: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState}
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
   * setState((curr, initial) => ({ ...curr, name: 'test' }) );
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#updatestate}
   */
  setState: (value: Partial<T> | ((currState: T, initial: T) => T)) => void;
  /**
   * * Example:
   * ```ts
   * setUrl({ name: 'test' });
   * // or
   * setUrl((curr, initial) => ({ ...curr, name: 'test' }), { replace: true } );
   * // can pass optional React-Router `NavigateOptions`
   * setUrl(curr => ({ ...curr, name: 'test' }), { preventScrollReset: false } );
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#updateurl}
   */
  setUrl: (
    value?: Partial<T> | ((currState: T, initial: T) => T),
    options?: Params,
  ) => void;
  /**
   * * Example:
   * ```ts
   * reset();
   * // or
   * reset({ replace: false, preventScrollReset: false })
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#reset}
   */
  reset: (options?: NavigateOptions & { [key: string]: unknown }) => void;
};

export function useUrlState<T extends JSONCompatible>(
  defaultState: T,
  params?: Params,
) {
  const useHistory = params?.useHistory;

  const defOpts = React.useMemo(
    () => ({
      ...defaultOpts,
      replace: params?.replace,
      preventScrollReset: params?.preventScrollReset as boolean,
    }),
    [],
  );

  const navigate = useNavigate();
  const router = React.useMemo(
    () =>
      useHistory
        ? routerHistory
        : {
            replace: (url: string, options?: NavigateOptions) =>
              navigate(url, { ...defOpts, ...options }),
            push: (url: string, options?: NavigateOptions) =>
              navigate(url, { ...defOpts, ...options }),
          },
    [navigate],
  );

  const [sp] = useSearchParams();

  const basename = useHref("/");

  const {
    state: urlState,
    updateState: setState,
    updateUrl: updateUrlBase,
    getState,
    reset: resetBase,
  } = useUrlStateBase(
    defaultState,
    router,
    ({ parse }) => parse(filterUnknownParamsClient(defaultState, sp.entries())),
    basename,
  );

  const setUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: NavigateOptions) =>
      updateUrlBase(value, { ...defOpts, ...options }),
    [updateUrlBase],
  );

  React.useEffect(() => {
    setState(
      assignValue(
        defaultState,
        filterUnknownParams(
          defaultState,
          parseSPObj(
            Object.fromEntries([...sp.entries()]),
            defaultState,
          ) as Partial<T>,
        ),
      ),
    );
  }, [sp]);

  const reset = React.useCallback(
    (options?: NavigateOptions & { [key: string]: unknown }) => {
      resetBase({ ...defOpts, ...options });
    },
    [resetBase],
  );

  return {
    setState,
    setUrl,
    urlState,
    reset,
    getState,
  };
}

const defaultOpts: NavigateOptions = {
  replace: true,
  preventScrollReset: true,
};

interface Params extends NavigateOptions {
  useHistory?: boolean;
  searchParams?: object;
  replace?: boolean;
}
