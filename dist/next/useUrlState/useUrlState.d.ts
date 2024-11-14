import { useRouter } from "next/navigation";
import { type JSONCompatible } from "../../utils";
/**
 * @deprecated .
 * * use format `useUrlState(defaultState, { ...otherParams })`
 *
 * .
 */
export declare function useUrlState<T extends JSONCompatible>({ defaultState: T, searchParams, replace, scroll, useHistory, }: OldParams<T>): {
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
 * @param {Object} params - Object with other parameters, including params from App router
 * @param {boolean} params.replace replace URL of push, default `true`
 * @param {boolean} params.useHistory use window.history for navigation, default true, no _rsc requests https://github.com/vercel/next.js/discussions/59167
 * @param {?SearchParams<T>} params.searchParams searchParams from Next server component
 * @param {boolean} params.scroll reset scroll, default `false`

 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState(form);
 * // for nextjs server components
 * const { urlState, setState, setUrl } = useUrlState(form, { searchParams });
 *
 * setState({ name: 'test' });
 * setUrl({ name: 'test' }, { replace: true, scroll: true });
 * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#api}
 */
export declare function useUrlState<T extends JSONCompatible>(defaultState: T, params?: Params): {
    urlState: T;
    setState: (value: Partial<T> | ((currState: T) => T)) => void;
    setUrl: (value?: Partial<T> | ((currState: T) => T), options?: Options) => void;
};
type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<Parameters<Router["push"]>[1] | Parameters<Router["replace"]>[1]>;
interface Options extends RouterOptions {
    replace?: boolean;
}
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
export {};
