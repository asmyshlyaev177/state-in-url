import { useRouter } from 'next/navigation';
import { type DeepReadonly, type JSONCompatible } from '../../utils';
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
export declare function useUrlState<T extends JSONCompatible>({ defaultState, searchParams, ...opts }: {
    defaultState: T;
    searchParams?: object;
    replace?: boolean;
    scroll?: boolean;
}): {
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
    updateState: (value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
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
    updateUrl: (value?: Parameters<(value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T) | undefined, options?: import("../../useUrlStateBase/useUrlStateBase").Options) => void>[0], options?: Options) => void;
    state: DeepReadonly<DeepReadonly<T>>;
    getState: () => T;
};
type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<Parameters<Router['push']>[1] | Parameters<Router['replace']>[1]>;
interface Options extends RouterOptions {
    replace?: boolean;
}
export {};
