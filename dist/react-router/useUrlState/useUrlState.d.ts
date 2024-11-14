import { type NavigateOptions } from "react-router-dom";
import { type JSONCompatible } from "../../utils";
/**
 * @deprecated .
 * * use format `useUrlState(defaultState, { ...otherParams })`
 *
 * .
 */
export declare function useUrlState<T extends JSONCompatible>({ defaultState: T, searchParams, replace, useHistory, }: OldParams<T>): {
    state: T;
    urlState: T;
    updateState: (value: Partial<T> | ((currState: T) => T)) => void;
    setState: (value: Partial<T> | ((currState: T) => T)) => void;
    updateUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
    setUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
};
/**
 * React-router hook. Returns `urlState`, `setState`, and `setUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {Object} params - Object with other parameters
 * @param {NavigateOptions} params.NavigateOptions See type from `react-router-dom`
 * @param {boolean} params.replace replace URL of push, default `true`
 * @param {boolean} params.useHistory use window.history for navigation, default `false`
 * @param {boolean} params.preventScrollReset keep scroll position, default `true`
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState(form, { replace: false, preventScrollReset: false });
 *
 * setState({ name: 'test' });
 * setUrl({ name: 'test' }, { replace: true });
 * // similar to React.useState
 * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState#api}
 */
export declare function useUrlState<T extends JSONCompatible>(defaultState: T, params?: Params): {
    urlState: T;
    setState: (value: Partial<T> | ((currState: T) => T)) => void;
    setUrl: (value?: Partial<T> | ((currState: T) => T), options?: Params) => void;
};
type OldParams<T> = {
    defaultState: T;
    useHistory?: boolean;
    searchParams?: object;
    replace?: boolean;
} & NavigateOptions;
interface Params extends NavigateOptions {
    useHistory?: boolean;
    searchParams?: object;
    replace?: boolean;
}
export {};
