export type Type = "string" | "date" | "boolean" | "number" | "bigint" | "undefined" | "object" | "null" | "function" | "symbol" | "array";
/**
 * A better replacement for `typeof`
 *
 * @param {unknown} val value to detect type
 * @returns {Type} Type of val - `string`, `date`, `boolean`,
 * `number`, `bigint`, `undefined`, `null`, `object`,
 * `function`, `symbol`, `array`
 */
export declare const typeOf: (val: unknown) => Type;
export declare const isPrimitive: (val: unknown) => val is Simple;
export type Simple = string | Date | boolean | number | null | undefined | Function | symbol;
export declare const isSSR: boolean;
export type JSON = null | boolean | Date | number | string | {
    [prop: string]: JSON | JSON[];
};
export type JSONCompatible = {
    [prop: string]: JSON | JSON[];
};
export declare const getParams: (strOrSearchParams?: string | URLSearchParams) => URLSearchParams;
export type UnknownObj = object | {
    [key: string]: unknown;
};
export declare const isEqual: (val1: unknown, val2: unknown) => boolean;
export declare function filterUnknownParamsClient<T extends object>(shape: T, params?: string | URLSearchParams | Record<string, string> | object): string;
export declare function filterUnknownParams<T extends object>(shape: T, searchParams?: object): T;
export declare function filterUnknown<T extends object>(shape: T, entries: [key: string, value: string][]): string[][];
export declare function assignValue<T extends object>(shape: T, newVal: Partial<T>): T;
export interface Router {
    push: (href: string, opts?: object) => void;
    replace: (href: string, opts?: object) => void;
}
export declare const routerHistory: Router;
export declare const isSafari: boolean;
