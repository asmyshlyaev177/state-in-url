import { type JSONCompatible, type Simple } from "../utils";
/**
 * Encode any JSON serializable value to URL friendly string
 *
 * @param {unknown} payload any value to serialize
 * @returns {string} URLSearchParams compatible value string
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/encoder#encode}
 */
export declare function encode(payload: unknown): string;
export declare const encodePrimitive: (payload: Simple) => Simple;
/**
 * Decode value part of URLSearchParams back to JS value
 *
 * @param {string} payload URLSearchParams compatible value string
 * @param {any} fallback optional fallback value
 * @returns {unknown} decoded object
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/encoder#decode}
 */
export declare function decode<T>(payload: string, fallback?: T): T;
/**
 * Parses a JSON string into a TypeScript object.
 *
 * @param {string} jsonString - The JSON string to parse.
 * @param {T} [fallbackValue] - The fallback value to use if parsing fails.
 * @return {T | CustomDecoded | undefined} - The parsed object or a primitive value, or undefined if parsing fails.
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url}
 */
export declare function parseJSON<T extends JSONCompatible>(jsonString: string, fallbackValue?: T): T | CustomDecoded | undefined;
export declare function reviver(_key: string, value: unknown): unknown;
export declare const decodePrimitive: (str: string) => string | Date | undefined;
export type CustomDecoded = ReturnType<typeof decodePrimitive>;
