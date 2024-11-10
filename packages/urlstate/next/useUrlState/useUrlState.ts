import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

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
 */
export function useUrlState<T extends JSONCompatible>({
  defaultState: T,
  searchParams,
  replace,
  scroll,
  useHistory,
}: OldParams<T>): {
  state: T;
  urlState: T;
  updateState: (value: Partial<T> | ((currState: T) => T)) => void;
  setState: (value: Partial<T> | ((currState: T) => T)) => void;
  updateUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
  setUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
};

/**
 * NextJS hook. Returns `urlState`, `setState`, and `setUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {Object} params - Object with other parameters
 * @param {?SearchParams<T>} params.searchParams searchParams from Next server component
 * @param {boolean} params.useHistory use window.history for navigation, default true, no _rsc requests https://github.com/vercel/next.js/discussions/59167
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState(form);
 * // for nextjs server components
 * const { urlState, setState, setUrl } = useUrlState(form, { searchParams });
 *
 * setState({ name: 'test' });
 * // by default it's uses router.push with scroll: false
 * setUrl({ name: 'test' }, { replace: true, scroll: true });
 * // similar to React.useState
 * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#api}
 */
export function useUrlState<T extends JSONCompatible>(
  defaultState: T,
  params?: Params,
): {
  urlState: T;
  setState: (value: Partial<T> | ((currState: T) => T)) => void;
  setUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
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

  const router = (_useHistory === undefined ? true : !!_useHistory)
    ? routerHistory
    : useRouter();
  const {
    state,
    updateState,
    updateUrl: updateUrlBase,
    getState,
  } = useUrlStateBase(_defaultState, router, ({ parse }) =>
    isSSR()
      ? parseSPObj(
          filterUnknownParams(_defaultState, _searchParams),
          _defaultState,
        )
      : parse(filterUnknownParamsClient(_defaultState)),
  );

  const setUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: Options) =>
      updateUrlBase(value, { ...defaultOptions, ..._opts, ...options }),
    [updateUrlBase, _opts],
  );

  const sp = useSearchParams();
  React.useEffect(() => {
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

  return {
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
    setState: updateState,
    /**
     * @deprecated use `setState`
     */
    updateState,
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
    setUrl,
    /**
     * @deprecated use `setUrl`
     */
    updateUrl: setUrl,
    /**
     * State object. Don't mutate directly, use `setState` or `setUrl`
     */
    urlState: state,
    /**
     * @deprecated use `urlState`
     */
    state,
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
