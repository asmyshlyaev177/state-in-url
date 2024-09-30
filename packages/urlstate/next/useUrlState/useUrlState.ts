import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { parseSPObj } from '../../parseSPObj';
import { useUrlStateBase } from '../../useUrlStateBase';
import {
  type DeepReadonly,
  filterUnknownParams,
  filterUnknownParamsClient,
  isSSR,
  type JSONCompatible,
} from '../../utils';

/**
 * NextJS hook. Returns `state`, `updateState`, and `updateUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {?SearchParams<T>} [searchParams] searchParams from Next server component
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { state, updateState, updateUrl } = useUrlState({ defaultState: form });
 * // for nextjs seerver components
 * // const { state, updateState, updateUrl } = useUrlState({ defaultState: form, searchParams });
 *
 * updateState({ name: 'test' });
 * // by default it's uses router.push with scroll: false
 * updateUrl({ name: 'test' }, { replace: true, scroll: true });
 * // similar to React.useState
 * updateUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/next/useUrlState#api}
 */
export function useUrlState<T extends JSONCompatible>({
  defaultState,
  searchParams,
  ...opts
}: {
  defaultState: T;
  searchParams?: object;
  replace?: boolean;
  scroll?: boolean;
}) {
  const router = useRouter();
  const {
    state,
    updateState,
    updateUrl: updateUrlBase,
    getState,
  } = useUrlStateBase(defaultState, router, ({ parse }) =>
    isSSR()
      ? parseSPObj(
          filterUnknownParams(defaultState, searchParams),
          defaultState,
        )
      : parse(filterUnknownParamsClient(defaultState)),
  );

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: Options) => {
      const _opts = { ...defaultOptions, ...opts, ...options };
      updateUrlBase(value, _opts);
    },
    [updateUrlBase, opts],
  );

  const sp = useSearchParams();
  React.useEffect(() => {
    updateState(
      filterUnknownParams(
        defaultState,
        parseSPObj(
          Object.fromEntries([...sp.entries()]),
          defaultState,
        ) as Partial<T>,
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
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/next/useUrlState#updatestate}
     */
    updateState,
    /**
     * * Example:
     * ```ts
     * updateUrl({ name: 'test' });
     * // or
     * updateUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: false  } );
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/next/useUrlState#updateurl}
     */
    updateUrl,
    state: state as DeepReadonly<typeof state>,
    getState,
  };
}

type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<
  Parameters<Router['push']>[1] | Parameters<Router['replace']>[1]
>;

interface Options extends RouterOptions {
  replace?: boolean;
}

const defaultOptions = {
  replace: true,
  scroll: false,
};
