import { encode, decode } from './encoder';
import { type JSONCompatible, getParams, type UnknownObj } from './utils';

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
 */
export function encodeState<T>(
  state: never extends T ? object : JSONCompatible<T>,
  defaults?: JSONCompatible<T>,
  paramsToKeep?: string | URLSearchParams,
) {
  const params = getParams(paramsToKeep);
  Object.entries(state || {}).forEach(([key, value]) => {
    const initialVal = defaults?.[key as keyof typeof defaults];
    if (JSON.stringify(value) !== JSON.stringify(initialVal)) {
      params.set(key, encode(value));
    }
  });
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
 */
export function decodeState<T>(
  uriString: string | URLSearchParams,
  defaults?: JSONCompatible<T>,
) {
  return {
    ...(defaults || {}),
    ...Object.fromEntries(
      [...getParams(uriString).entries()].map(([key, value]) => [
        key,
        decode(value) ?? defaults?.[key as keyof typeof defaults],
      ]),
    ),
  } as undefined extends T ? UnknownObj : T;
}
