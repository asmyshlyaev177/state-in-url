import { type NavigateOptions } from 'react-router-dom';
import { type DeepReadonly, type JSONCompatible } from '../../utils';
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
export declare function useUrlState<T extends JSONCompatible>({ defaultState, ...initOpts }: {
    defaultState: T;
} & NavigateOptions): {
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
    updateState: (value: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T)) => void;
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
    updateUrl: (value?: Parameters<(value?: Partial<T> | Partial<DeepReadonly<T>> | ((currState: T) => T) | undefined, options?: import("../../useUrlStateBase/useUrlStateBase").Options) => void>[0], options?: NavigateOptions) => void;
    state: DeepReadonly<DeepReadonly<T>>;
    getState: () => T;
};
