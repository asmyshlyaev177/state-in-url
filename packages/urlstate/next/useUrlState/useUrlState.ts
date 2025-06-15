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
  defaultState: T,
  params?: Params,
) {
  const useHistory = params?.useHistory;

  const nextRouter = useRouter();

  const router = React.useMemo(
    () => ({
      push: (...args: Parameters<typeof nextRouter.push>) => {
        if (useHistory === undefined ? true : !!useHistory) {
          routerHistory.push(...args);
        } else {
          nextRouter.push(...args);
        }
      },
      replace: (...args: Parameters<typeof nextRouter.replace>) => {
        if (useHistory === undefined ? true : !!useHistory) {
          routerHistory.replace(...args);
        } else {
          nextRouter.replace(...args);
        }
      },
    }),
    [nextRouter],
  );

  const {
    state: urlState,
    updateState: setState,
    updateUrl: updateUrlBase,
    reset: resetBase,
    getState,
  } = useUrlStateBase(defaultState, router, ({ parse }) => {
    return isSSR
      ? parseSPObj(
          filterUnknownParams(defaultState, params?.searchParams),
          defaultState,
        )
      : parse(filterUnknownParamsClient(defaultState, params?.searchParams));
  });

  const defOpts = React.useMemo(
    () => ({
      ...defaultOptions,
      scroll: params?.scroll,
      replace: params?.replace,
    }),
    [],
  );

  const setUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: Options) =>
      updateUrlBase(value, { ...defOpts, ...options }),
    [updateUrlBase],
  );

  const sp = useSearchParams();
  React.useLayoutEffect(() => {
    setState(
      filterUnknownParams(
        defaultState,
        parseSPObj(
          Object.fromEntries([...sp.entries()]),
          defaultState,
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
    setState,
    setUrl,
    urlState,
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

type Params = {
  searchParams?: object;
  replace?: boolean;
  scroll?: boolean;
  useHistory?: boolean;
};
