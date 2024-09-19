import { type DeepReadonly, type JSONCompatible } from '../../utils';
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
export declare function useUrlState<T extends JSONCompatible>(defaultState: T, searchParams?: object): {
    state: DeepReadonly<T>;
    updateState: (value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
    updateUrl: (value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
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
export declare function useUrlState<T extends JSONCompatible>({ defaultState, searchParams, }: {
    defaultState: T;
    searchParams?: object;
    replace?: boolean;
}): {
    state: DeepReadonly<T>;
    updateState: (value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
    updateUrl: (value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
    getState: () => DeepReadonly<T>;
};
