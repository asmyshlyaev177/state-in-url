import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { parseSsrQs } from '../parseSsrQs';
import { useUrlStateBase } from '../../useUrlStateBase';
import { type DeepReadonly, type JSONCompatible } from '../../utils';

/**
 * NextJS hook. Returns `state`, `updateState`, and `updateUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {?SearchParams<T>} [searchParams] searchParams from Next server component
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const { state, updateState, updateUrl } = useUrlState(form);
 * // for nextjs seerver components
 * // const { state, updateState, updateUrl } = useUrlState(form, searchParams);
 *
 * updateState({ name: 'test' });
 * // by default it's uses router.push with scroll: false
 * updateUrl({ name: 'test' }, { replace: true, scroll: true });
 *  ```
 *
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/next/useUrlState#api}
 */
export function useUrlState<T extends JSONCompatible>(
  defaultState: T,
  searchParams?: object,
) {
  const router = useRouter();
  const {
    state,
    updateState,
    updateUrl: updateUrlBase,
    getState,
  } = useUrlStateBase(defaultState, router, searchParams);

  const updateUrl = React.useCallback(
    (
      value?: (T | DeepReadonly<T>) | ((currState: T) => T),
      options?: Options,
    ) => {
      updateUrlBase(value, { scroll: false, ...options } as Options);
    },
    [updateUrlBase],
  );

  const sp = useSearchParams();

  React.useEffect(() => {
    updateState(
      parseSsrQs(Object.fromEntries([...sp.entries()]), defaultState),
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
     *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/next/useUrlState#updatestate}
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
     *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/next/useUrlState#updateurl}
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
