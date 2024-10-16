import { type JSONCompatible, type UnknownObj } from "../utils";
/**
 * Encodes the state object into a URL query string.
 *
 * @param {JSONCompatible<T>} state - The state object to encode.
 * @param {JSONCompatible<T>} [defaults] - Optional default values for the state object.
 * @return {string} The encoded URL query string representing the state object.
 *
 *  * Example:
 * ```ts
 * export const form = { name: '' };
 * encodeState({ name: 'test' }, form, 'someExistingParam=123');
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/encodeState#encodestate}
 */
export declare function encodeState<T extends JSONCompatible>(state: T, defaults?: T, paramsToKeep?: string | URLSearchParams): string;
/**
 * Decodes a URI string into an object of type T.
 *
 * @param {string} uriString - The URI string to decode.
 * @return {T} The decoded object of type T.
 *
 *  * Example:
 * ```ts
 * export const form = { name: '' };
 * decodeState('key=value&name=Alex', form);
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/encodeState#decodestate}
 */
export declare function decodeState<T extends JSONCompatible>(uriString: string | URLSearchParams, defaults?: T): undefined extends T ? UnknownObj : T;