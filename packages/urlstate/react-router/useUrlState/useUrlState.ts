import React from 'react';
import {
  type NavigateOptions,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { parseSPObj } from '../../parseSPObj';
import { useUrlStateBase } from '../../useUrlStateBase';
import {
  assignValue,
  type DeepReadonly,
  filterUnknownParams,
  filterUnknownParamsClient,
  type JSONCompatible,
} from '../../utils';

/**
 * React-router hook. Returns `state`, `updateState`, and `updateUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {NavigateOptions} [NavigateOptions] See type from `react-router-dom`
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { state, updateState, updateUrl } = useUrlState({ defaultState: form, replace: false, preventScrollReset: false });
 *
 * updateState({ name: 'test' });
 * updateUrl({ name: 'test' }, { replace: true });
 * // similar to React.useState
 * updateUrl(curr => ({ ...curr, name: 'test' }), { replace: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/react-router/useUrlState#api}
 */
export function useUrlState<T extends JSONCompatible>({
  defaultState,
  ...initOpts
}: { defaultState: T } & NavigateOptions) {
  const navigate = useNavigate();
  const router = React.useMemo(
    () => ({
      replace: (url: string, opts: NavigateOptions) =>
        navigate(url, { ...defaultOpts, ...initOpts, ...opts }),
      push: (url: string, opts: NavigateOptions) =>
        navigate(url, { ...defaultOpts, ...initOpts, ...opts }),
    }),
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
    (
      value?: Parameters<typeof updateUrlBase>[0],
      options?: NavigateOptions,
    ) => {
      const opts = { ...defaultOpts, ...initOpts, ...options };
      updateUrlBase(value, opts);
    },
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
     * updateState({ name: 'test' });
     * // or
     * updateState(curr => ({ ...curr, name: 'test' }) );
     * // can pass optional React-Router `NavigateOptions`
     * updateState(curr => ({ ...curr, name: 'test', preventScrollReset: false }) );
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/react-router/useUrlState#updatestate}
     */
    updateState,
    /**
     * * Example:
     * ```ts
     * updateUrl({ name: 'test' });
     * // or
     * updateUrl(curr => ({ ...curr, name: 'test' }), { replace: true } );
     * // can pass optional React-Router `NavigateOptions`
     * updateState(curr => ({ ...curr, name: 'test', preventScrollReset: false }) );
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/react-router/useUrlState#updateurl}
     */
    updateUrl,
    state: state as DeepReadonly<typeof state>,
    getState,
  };
}

const defaultOpts: NavigateOptions = {
  replace: true,
  preventScrollReset: true,
};
