import { useUrlEncode } from "../useUrlEncode";
import { type JSONCompatible, type Router } from "../utils";
export declare function useUrlStateBase<T extends JSONCompatible>(defaultState: T, router: Router, getInitialState?: ({ parse, }: {
    parse: ReturnType<typeof useUrlEncode<T>>["parse"];
}) => T, basename?: string): {
    updateState: (value: Partial<T> | ((currState: T, defaultState: T) => T)) => void;
    updateUrl: (value?: Parameters<(value: Partial<T> | ((currState: T, defaultState: T) => T)) => void>[0], options?: Options) => void;
    state: T;
    reset: (options?: Options) => void;
    getState: () => T;
    pendingUrlUpdate: () => boolean;
};
interface OptionsObject {
    [key: string]: unknown;
}
export interface Options extends OptionsObject {
    replace?: boolean;
}
export {};
