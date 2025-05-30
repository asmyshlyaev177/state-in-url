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
 * @deprecated .
 * * use format `useUrlState(defaultState, { ...otherParams })`
 *
 * .
 */
export function useUrlState<T extends JSONCompatible>({
  defaultState: T,
  searchParams,
  replace,
  useHistory,
}: OldParams<T>): {
  /**
   * @deprecated use `urlState`
   */
  state: T;
  urlState: T;
  /**
   * @deprecated use `setState`
   */
  updateState: (value: Partial<T> | ((currState: T) => T)) => void;
  setState: (value: Partial<T> | ((currState: T) => T)) => void;
  updateUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
  setUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
};

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
 * // reset state and url
 * reset();
 * reset({ replace: true });
 * // same as setState(form) with setUrl(form)
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
   * setState(curr => ({ ...curr, name: 'test' }) );
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#updatestate}
   */
  setState: (value: Partial<T> | ((currState: T) => T)) => void;
  /**
   * * Example:
   * ```ts
   * setUrl({ name: 'test' });
   * // or
   * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true } );
   * // can pass optional React-Router `NavigateOptions`
   * setUrl(curr => ({ ...curr, name: 'test' }), { preventScrollReset: false } );
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#updateurl}
   */
  setUrl: (
    value?: Partial<T> | ((currState: T) => T),
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
  defaultState: T | OldParams<T>,
  params?: Params,
) {
  const _defaultState = (
    "defaultState" in defaultState ? defaultState.defaultState : defaultState
  ) as T;
  const _useHistory = (
    "defaultState" in defaultState
      ? defaultState.useHistory
      : params?.useHistory
  ) as boolean;
  const _opts =
    "defaultState" in defaultState
      ? {
          replace: defaultState.replace as boolean,
          preventScrollReset: defaultState.preventScrollReset as boolean,
        }
      : {
          replace: params?.replace,
          preventScrollReset: params?.preventScrollReset as boolean,
        };

  const defOpts = React.useMemo(() => ({ ...defaultOpts, ..._opts }), []);

  const navigate = useNavigate();
  const router = React.useMemo(
    () =>
      _useHistory
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
    state,
    updateState,
    updateUrl: updateUrlBase,
    getState,
    reset: resetBase,
  } = useUrlStateBase(
    _defaultState,
    router,
    ({ parse }) =>
      parse(filterUnknownParamsClient(_defaultState, sp.entries())),
    basename,
  );

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: NavigateOptions) =>
      updateUrlBase(value, { ...defOpts, ...options }),
    [updateUrlBase],
  );

  React.useEffect(() => {
    updateState(
      assignValue(
        _defaultState,
        filterUnknownParams(
          _defaultState,
          parseSPObj(
            Object.fromEntries([...sp.entries()]),
            _defaultState,
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
    setState: updateState,
    updateState,
    setUrl: updateUrl,
    /**
     * @deprecated use `setUrl`
     */
    updateUrl,
    urlState: state,
    state,
    reset,
    getState,
  };
}

const defaultOpts: NavigateOptions = {
  replace: true,
  preventScrollReset: true,
};

type OldParams<T> = {
  defaultState: T;
  useHistory?: boolean;
  searchParams?: object;
  replace?: boolean;
} & NavigateOptions;

interface Params extends NavigateOptions {
  useHistory?: boolean;
  searchParams?: object;
  replace?: boolean;
}
