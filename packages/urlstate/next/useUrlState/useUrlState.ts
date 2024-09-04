import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { parseSPObj } from '../parseSPObj';
import { useUrlStateBase } from '../../useUrlStateBase';
import {
  type DeepReadonly,
  filterUnknownParamsClient,
  isSSR,
  type JSONCompatible,
} from '../../utils';

/**
 * @deprecated Pass arguments in a object `useUrlState({ defaultState: form, searchParams })`
 *
 * NextJS hook. Returns `state`, `updateState`, and `updateUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {?SearchParams<T>} [searchParams] searchParams from Next server component
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { state, updateState, updateUrl } = useUrlState(form);
 * // for nextjs seerver components
 * // const { state, updateState, updateUrl } = useUrlState(form, searchParams);
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
export function useUrlState<T extends JSONCompatible>(
  defaultState: T,
  searchParams?: object,
): {
  state: DeepReadonly<T>;
  updateState: (
    value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T),
  ) => void;
  updateUrl: (
    value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T),
  ) => void;
  getState: () => DeepReadonly<T>;
};
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
}: {
  defaultState: T;
  searchParams?: object;
  replace?: boolean;
}): {
  state: DeepReadonly<T>;
  updateState: (
    value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T),
  ) => void;
  updateUrl: (
    value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T),
  ) => void;
  getState: () => DeepReadonly<T>;
};

export function useUrlState<T extends JSONCompatible>(
  defaultState:
    | T
    | { defaultState: T; searchParams?: object; replace?: boolean },
  searchParams?: object,
) {
  const { _defaultState, _searchParams, _replace } = getArgs(
    defaultState,
    searchParams,
  );

  const router = useRouter();
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

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: Options) => {
      const opts = { scroll: false, replace: _replace, ...options };
      updateUrlBase(value, opts);
    },
    [updateUrlBase, _replace],
  );

  const sp = useSearchParams();
  React.useEffect(() => {
    const shapeKeys = Object.keys(_defaultState);
    const _sp = Object.fromEntries(
      [...sp.entries()].filter(([key]) => shapeKeys.includes(key)),
    );
    updateState(parseSPObj(_sp, _defaultState));
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

function getArgs<T extends JSONCompatible>(
  obj: T | { defaultState: T; searchParams?: object; replace?: boolean },
  searchParams?: object,
) {
  const isObjParam = 'defaultState' in obj;
  const _defaultState = (isObjParam ? obj.defaultState : obj) as T;
  const _searchParams = (isObjParam ? obj.searchParams : searchParams) as
    | object
    | undefined;
  const _replace = (isObjParam ? obj.replace ?? true : false) as boolean;

  return {
    _defaultState,
    _searchParams,
    _replace,
  };
}

function filterUnknownParams<T extends object>(
  shape: T,
  searchParams?: object,
) {
  const shapeKeys = Object.keys(shape);

  const result = Object.fromEntries(
    Object.entries(searchParams || {})
      .map(([key, val]) => [key.replaceAll('+', ' '), val])
      .filter(([key]) => shapeKeys.includes(key)),
  );
  return result as T;
}
