import { type JSONCompatible } from "../utils";
/**
 * Custom React hook for sharing state between unrelated components.
 *
 * @param {T} defaultState - The default state object
 * @param {() => T} [_getInitial] - Optional function to get initial state
 * @returns {Object} Object containing `state`, `getState`, and `setState` functions
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { state, setState } = useSharedState(form);
 *
 * setState({ name: 'test' });
 * // OR
 * setState((curr, initialState) => ({ ...curr, name: 'test' }))
 *  ```
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/useSharedState}
 */
export declare function useSharedState<T extends JSONCompatible>(defaultState: T, _getInitial?: () => T): {
    state: T;
    getState: () => T;
    setState: (value: Partial<T> | ((currState: T, defaultState: T) => T)) => void;
};
