import { useRouter } from "next/navigation";
import { type DeepReadonly, type JSONCompatible } from "../../utils";
/**
 * NextJS hook. Returns `urlState`, `setState`, and `setUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {?SearchParams<T>} [searchParams] searchParams from Next server component
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState({ defaultState: form });
 * // for nextjs seerver components
 * // const { urlState, setState, setUrl } = useUrlState({ defaultState: form, searchParams });
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
export declare function useUrlState<T extends JSONCompatible>({ defaultState, searchParams, ...opts }: {
    defaultState: T;
    searchParams?: object;
    replace?: boolean;
    scroll?: boolean;
}): {
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
    setState: (value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
    /**
     * @deprecated use `setState`
     */
    updateState: (value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
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
    setUrl: (value?: Parameters<(value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T) | undefined, options?: import("../../useUrlStateBase/useUrlStateBase").Options) => void>[0], options?: Options) => void;
    /**
     * @deprecated use `setUrl`
     */
    updateUrl: (value?: Parameters<(value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T) | undefined, options?: import("../../useUrlStateBase/useUrlStateBase").Options) => void>[0], options?: Options) => void;
    urlState: DeepReadonly<DeepReadonly<T>>;
    /**
     * @deprecated use `urlState`
     */
    state: DeepReadonly<DeepReadonly<T>>;
    getState: () => T;
};
type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<Parameters<Router["push"]>[1] | Parameters<Router["replace"]>[1]>;
interface Options extends RouterOptions {
    replace?: boolean;
}
export {};
