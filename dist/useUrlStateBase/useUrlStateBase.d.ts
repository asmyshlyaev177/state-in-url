import { useUrlEncode } from "../useUrlEncode";
import { type JSONCompatible, type Router } from "../utils";
/**
 * A custom React hook to create custom hooks.
 *
 * @template T extends JSONCompatible
 * @param {T} defaultState - An object representing the default state values.
 * @param {Router} router - Router object with [push] and [replace] methods.
 * @param {Function} [getInitialState] - Optional function to get the initial state, passes `parse`, and `filterUnknownParams` helpers
 * @returns {Object} An object containing `state`, `getState`, `updateState`, and `updateUrl` properties.
 *
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const router = { push: () => {}, replace: () => {} };
 * const { state, updateState, updateUrl } = useUrlStateBase(form, router, ({ parse, filterClientSP }) =>
 *   isSSR() ? getServerState() : getClientState()
 * );
 *  ```
 *
 * * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/integrations/packages/urlstate/useUrlStateBase#api}
 */
export declare function useUrlStateBase<T extends JSONCompatible>(defaultState: T, router: Router, getInitialState?: ({ parse, }: {
    parse: ReturnType<typeof useUrlEncode<T>>["parse"];
}) => T): {
    updateState: (value: Partial<T> | ((currState: T) => T)) => void;
    updateUrl: (value?: Parameters<(value: Partial<T> | ((currState: T) => T)) => void>[0], options?: Options) => void;
    state: T;
    getState: () => T;
};
interface OptionsObject {
    [key: string]: unknown;
}
export interface Options extends OptionsObject {
    replace?: boolean;
}
export {};
