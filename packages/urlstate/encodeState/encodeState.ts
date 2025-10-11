import { decode, encode } from "../encoder";
import { getParams, type JSONCompatible, type UnknownObj } from "../utils";

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
export function encodeState<T extends JSONCompatible>(
  state: T,
  defaults?: T,
  paramsToKeep?: string | URLSearchParams,
) {
  const params = getParams(paramsToKeep);
  const keys = Object.keys(state || {});
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = state[key as keyof T];
    const initialVal = defaults?.[key as keyof typeof defaults];
    if (JSON.stringify(value) !== JSON.stringify(initialVal)) {
      params.set(key, encode(value));
    }
  }
  return params.toString();
}

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
export function decodeState<T extends JSONCompatible>(
  uriString: string | URLSearchParams,
  defaults?: T,
) {
  const result: Record<string, unknown> = Object.assign({}, defaults || {});
  const params = getParams(uriString);
  for (const [key, value] of params) {
    const fallback = defaults?.[key as keyof typeof defaults];
    result[key] = decode(value, fallback) ?? fallback;
  }
  return result as undefined extends T ? UnknownObj : T;
}
