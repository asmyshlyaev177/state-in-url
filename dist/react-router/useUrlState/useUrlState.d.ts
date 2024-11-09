import { type NavigateOptions } from "react-router-dom";
import { type JSONCompatible } from "../../utils";
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
export declare function useUrlState<T extends JSONCompatible>({ defaultState, useHistory, ...initOpts }: {
    defaultState: T;
    useHistory?: boolean;
} & NavigateOptions): {
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
    setState: (value: Partial<T> | ((currState: T) => T)) => void;
    /**
     * @deprecated use `setState`
     */
    updateState: (value: Partial<T> | ((currState: T) => T)) => void;
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
    setUrl: (value?: Parameters<(value?: Partial<T> | ((currState: T) => T) | undefined, options?: import("../../useUrlStateBase/useUrlStateBase").Options) => void>[0], options?: NavigateOptions) => void;
    /**
     * @deprecated use `setUrl`
     */
    updateUrl: (value?: Parameters<(value?: Partial<T> | ((currState: T) => T) | undefined, options?: import("../../useUrlStateBase/useUrlStateBase").Options) => void>[0], options?: NavigateOptions) => void;
    /**
     * State object. Don't mutate directly, use `setState` or `setUrl`
     */
    urlState: T;
    /**
     * @deprecated use `urlState`
     */
    state: T;
    getState: () => T;
};
