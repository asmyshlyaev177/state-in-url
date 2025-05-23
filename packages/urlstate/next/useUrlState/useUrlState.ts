import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { parseSPObj } from "../../parseSPObj";
import { useUrlStateBase } from "../../useUrlStateBase";
import {
  filterUnknownParams,
  filterUnknownParamsClient,
  isSSR,
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
  scroll,
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
  /**
   * @deprecated use `setUrl`
   */
  updateUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
  setUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
};

/**
 * NextJS hook. Returns `urlState`, `setState`, and `setUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {Object} params - Object with other parameters, including params from App router
 * @param {boolean} params.replace replace URL or push, default `true`
 * @param {boolean} params.useHistory use window.history for navigation, default `true`, no _rsc requests https://github.com/vercel/next.js/discussions/59167
 * @param {?SearchParams<T>} params.searchParams searchParams from Next server component
 * @param {boolean} params.scroll reset scroll, default `false`
 * @returns {Object} [result] State and callbacks
 * @returns {Object} [result.state] - current state object
 * @returns {Function} [result.setUrl] - function to update state and url
 * @returns {Function} [result.setState] - function to update state only
 * @returns {Function} [result.reset] - function to reset state and url to default

 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState(form);
 * // for nextjs server components
 * const { urlState, setState, setUrl, reset } = useUrlState(form, { searchParams });
 *
 * setState({ name: 'test' });
 * setUrl({ name: 'test' }, { replace: true, scroll: true });
 * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: true });
 * // reset state and url
 * reset();
 * reset({ replace: true });
 * // same as setState(form) with setUrl(form)
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState}
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
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#updatestate}
   */
  setState: (value: Partial<T> | ((currState: T) => T)) => void;
  /**
   * * Example:
   * ```ts
   * setUrl({ name: 'test' });
   * // or
   * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: false  } );
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#updateurl}
   */
  setUrl: (
    value?: Partial<T> | ((currState: T) => T),
    options?: Options,
  ) => void;
  /**
   * * Example:
   * ```ts
   * reset();
   * // or
   * reset({ replace: false, scroll: true })
   *  ```
   *
   *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#reset}
   */
  reset: (options?: Options & { [key: string]: unknown }) => void;
};

export function useUrlState<T extends JSONCompatible>(
  defaultState: T | OldParams<T>,
  params?: Params,
) {
  const _defaultState = (
    "defaultState" in defaultState ? defaultState.defaultState : defaultState
  ) as T;
  const _searchParams = (
    "defaultState" in defaultState
      ? defaultState.searchParams
      : params?.searchParams
  ) as object;
  const _useHistory = (
    "defaultState" in defaultState
      ? defaultState.useHistory
      : params?.useHistory
  ) as boolean;
  const _opts =
    "defaultState" in defaultState
      ? {
          scroll: defaultState.scroll as boolean,
          replace: defaultState.replace as boolean,
        }
      : { scroll: params?.scroll, replace: params?.replace };

  const nextRouter = useRouter();

  const router = React.useMemo(
    () => ({
      push: (...args: Parameters<typeof nextRouter.push>) => {
        if (_useHistory === undefined ? true : !!_useHistory) {
          routerHistory.push(...args);
        } else {
          nextRouter.push(...args);
        }
      },
      replace: (...args: Parameters<typeof nextRouter.replace>) => {
        if (_useHistory === undefined ? true : !!_useHistory) {
          routerHistory.replace(...args);
        } else {
          nextRouter.replace(...args);
        }
      },
    }),
    [nextRouter],
  );

  const {
    state,
    updateState,
    updateUrl: updateUrlBase,
    reset: resetBase,
    getState,
  } = useUrlStateBase(_defaultState, router, ({ parse }) => {
    return isSSR
      ? parseSPObj(
          filterUnknownParams(_defaultState, _searchParams),
          _defaultState,
        )
      : parse(filterUnknownParamsClient(_defaultState, _searchParams));
  });

  const defOpts = React.useMemo(() => ({ ...defaultOptions, ..._opts }), []);

  const setUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: Options) =>
      updateUrlBase(value, { ...defOpts, ...options }),
    [updateUrlBase],
  );

  const sp = useSearchParams();
  React.useLayoutEffect(() => {
    updateState(
      filterUnknownParams(
        _defaultState,
        parseSPObj(
          Object.fromEntries([...sp.entries()]),
          _defaultState,
        ) as Partial<T>,
      ),
    );
  }, [sp]);

  const reset = React.useCallback(
    (options?: Options & { [key: string]: unknown }) => {
      resetBase({ ...defOpts, ...options });
    },
    [resetBase],
  );

  return {
    setState: updateState,
    updateState,
    setUrl,
    updateUrl: setUrl,
    urlState: state,
    state,
    reset,
    getState,
  };
}

type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<
  Parameters<Router["push"]>[1] | Parameters<Router["replace"]>[1]
>;

interface Options extends RouterOptions {
  replace?: boolean;
}

const defaultOptions = {
  replace: true,
  scroll: false,
};

interface OldParams<T> {
  defaultState: T;
  searchParams?: object;
  replace?: boolean;
  scroll?: boolean;
  useHistory?: boolean;
}

type Params = {
  searchParams?: object;
  replace?: boolean;
  scroll?: boolean;
  useHistory?: boolean;
};
