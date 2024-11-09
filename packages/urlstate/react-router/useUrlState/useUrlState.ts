import React from "react";
import {
  type NavigateOptions,
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
 * @param {NavigateOptions} [NavigateOptions] See type from `react-router-dom`
 * @param {boolean} [useHistory] use window.history for navigation
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState({ defaultState: form, replace: false, preventScrollReset: false });
 *
 * setState({ name: 'test' });
 * setUrl({ name: 'test' }, { replace: true });
 * // similar to React.useState
 * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#api}
 */
export function useUrlState<T extends JSONCompatible>({
  defaultState,
  useHistory,
  ...initOpts
}: { defaultState: T; useHistory?: boolean } & NavigateOptions) {
  const navigate = useNavigate();
  const router = React.useMemo(
    () =>
      useHistory
        ? routerHistory
        : {
            replace: (url: string, opts: NavigateOptions) =>
              navigate(url, { ...defaultOpts, ...initOpts, ...opts }),
            push: (url: string, opts: NavigateOptions) =>
              navigate(url, { ...defaultOpts, ...initOpts, ...opts }),
          },
    [navigate, initOpts],
  );
  const {
    state,
    updateState,
    updateUrl: updateUrlBase,
    getState,
  } = useUrlStateBase(defaultState, router, ({ parse }) =>
    parse(filterUnknownParamsClient(defaultState)),
  );

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: NavigateOptions) =>
      updateUrlBase(value, { ...defaultOpts, ...initOpts, ...options }),
    [initOpts],
  );

  const [sp] = useSearchParams();

  React.useEffect(() => {
    updateState(
      assignValue(
        defaultState,
        state as T,
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

  return {
    /**
     * * Example:
     * ```ts
     * setState({ name: 'test' });
     * // or
     * setState(curr => ({ ...curr, name: 'test' }) );
     * // can pass optional React-Router `NavigateOptions`
     * setState(curr => ({ ...curr, name: 'test', preventScrollReset: false }) );
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#updatestate}
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
     * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true } );
     * // can pass optional React-Router `NavigateOptions`
     * setState(curr => ({ ...curr, name: 'test', preventScrollReset: false }) );
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#updateurl}
     */
    setUrl: updateUrl,
    /**
     * @deprecated use `setUrl`
     */
    updateUrl,
    urlState: state,
    /**
     * @deprecated use `urlState`
     */
    state,
    getState,
  };
}

const defaultOpts: NavigateOptions = {
  replace: true,
  preventScrollReset: true,
};
