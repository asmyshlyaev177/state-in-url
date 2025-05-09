import { useUrlEncode } from "../useUrlEncode";
import { type JSONCompatible, type Router } from "../utils";
/**
 * A custom React hook to create custom hooks.
 *
 * @template T extends JSONCompatible
 * @param {T} defaultState - An object representing the default state values.
 * @param {Router} router - Router object with [push] and [replace] methods.
 * @param {Function} [getInitialState] - Optional function to get the initial state, passes `parse`, and `filterUnknownParams` helpers
 * @returns {Object} [result] State and callbacks
 * @returns {Object} [result.state] - current state object
 * @returns {Function} [result.updateUrl] - function to update state and url
 * @returns {Function} [result.updateState] - function to update state only
 * @returns {Function} [result.reset] - function to reset state and url to default
 *
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const router = { push: () => {}, replace: () => {} };
 * const { state, updateState, updateUrl, reset } = useUrlStateBase(form, router, ({ parse, filterClientSP }) =>
 *   isSSR() ? getServerState() : getClientState()
 * );
 *
 * updateState({ name: 'John' });
 * updateState(curr => ({ ...curr, name: 'John' }));
 * updateUrl({ name: 'John' }, { replace: true });
 * updateUrl(curr => ({ ...curr, name: 'John' }), { replace: true });
 * reset()
 * reset({ replace: true })
 *
 *  ```
 *
 * * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/integrations/packages/urlstate/useUrlStateBase}
 */
export declare function useUrlStateBase<T extends JSONCompatible>(defaultState: T, router: Router, getInitialState?: ({ parse, }: {
    parse: ReturnType<typeof useUrlEncode<T>>["parse"];
}) => T, basename?: string): {
    updateState: (value: Partial<T> | ((currState: T) => T)) => void;
    updateUrl: (value?: Parameters<(value: Partial<T> | ((currState: T) => T)) => void>[0], options?: Options) => void;
    state: T;
    reset: (options?: Options) => void;
    getState: () => T;
};
interface OptionsObject {
    [key: string]: unknown;
}
export interface Options extends OptionsObject {
    replace?: boolean;
}
export {};
