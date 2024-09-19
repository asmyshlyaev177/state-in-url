export type Type = 'string' | 'date' | 'boolean' | 'number' | 'bigint' | 'undefined' | 'object' | 'null' | 'function' | 'symbol' | 'array';
/**
 * A better replacement for `typeof`
 *
 * @param {unknown} val value to detect type
 * @returns {Type} Type of val - `string`, `date`, `boolean`,
 * `number`, `bigint`, `undefined`, `null`, `object`,
 * `function`, `symbol`, `array`
 */
export declare const typeOf: (val: unknown) => Type;
export declare const isSSR: () => boolean;
export type JSON = null | boolean | Date | number | string | {
    [prop: string]: JSON | JSON[];
};
export type JSONCompatible = {
    [prop: string]: JSON | JSON[];
};
export type DeepReadonly<T> = T extends Map<infer K, infer V> ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> : T extends Set<infer S> ? ReadonlySet<DeepReadonly<S>> : T extends object ? {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
} : T;
export declare const getParams: (strOrSearchParams?: string | URLSearchParams) => URLSearchParams;
export type UnknownObj = {
    [key: string]: unknown;
};
export declare const isEqual: (val1: unknown, val2: unknown) => boolean;
export declare function filterUnknownParamsClient<T extends object>(shape: T): string;
