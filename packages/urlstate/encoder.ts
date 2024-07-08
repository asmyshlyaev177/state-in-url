import { typeOf } from './utils';
import { SYMBOLS } from './constants';

/**
 * Encode any JSON serializable value to URL friendly string
 *
 * @param {unknown} payload any value to serialize
 * @returns {string} URLSearchParams compatible value string
 *
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url}
 */
export function encode(payload: unknown): string {
  const type = typeOf(payload);

  switch (type) {
    case 'function':
    case 'symbol':
      return '';
    case 'date':
      return SYMBOLS.date + (payload as Date).toISOString();
    case 'string':
      return (payload as string).match(/^◖/)
        ? encodeURIComponent(payload as string)
        : `${SYMBOLS.string}${encodeURIComponent(payload as string)}`;
    case 'number':
      return SYMBOLS.number + String(payload as number);
    case 'boolean':
      return SYMBOLS.boolean + String(payload as boolean);
    case 'object':
    case 'array':
      return JSON.stringify(payload as object, replacer).replaceAll('"', "'");
    case 'null':
      return SYMBOLS.null;
    case 'undefined':
      return SYMBOLS.undefined;
    default:
      return String(payload);
  }
}

// TODO: use or remove
// const stringifyDate = (d: Date) => {
//   const date = new Date(d);
//   const result = Date.UTC(
//     date.getUTCFullYear(),
//     date.getUTCMonth(),
//     date.getUTCDate(),
//     date.getUTCHours(),
//     date.getUTCMinutes(),
//     date.getUTCSeconds(),
//     date.getUTCMilliseconds(),
//   );
//   return new Date(result).toISOString();
// };

/**
 * Decode value part of URLSearchParams back to JS value
 *
 * @param {string} payload URLSearchParams compatible value string
 * @param {any} fallback optional fallback value
 * @returns {unknown} decoded object
 *
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url}
 */
export function decode<T>(payload: string, fallback?: T) {
  return parseJSON<T>(payload.replaceAll("'", '"'), fallback);
}

export const replacer = (key: string, value: unknown) => {
  const type = typeOf(value);
  return key && type !== 'object' && type !== 'array' ? encode(value) : value;
};

export type Primitive = Exclude<
  ReturnType<typeof decodePrimitive>,
  typeof errorSym
>;

export const decodePrimitive = (str: string) => {
  if (str === SYMBOLS.null) return null;
  if (str === SYMBOLS.undefined) return undefined;
  if (str?.startsWith?.(SYMBOLS.number))
    return Number.parseFloat(str.replace(SYMBOLS.number, ''));
  if (str?.startsWith?.(SYMBOLS.boolean))
    return str.includes('true') ? true : false;
  if (str?.startsWith?.(SYMBOLS.date)) return new Date(str.slice(1));

  if (str?.startsWith?.(SYMBOLS.string))
    return decodeURIComponent(str).replace(/^◖/, '');

  return errorSym;
};

export const errorSym = Symbol('isError');

export const reviver = (key: string, value: unknown) => {
  const isStr = typeof value === 'string';
  const decoded = isStr && decodePrimitive(value as string);
  if (decoded === errorSym) return value;
  return key && isStr ? decoded : value;
};

/**
 * Parses a JSON string into a TypeScript object.
 *
 * @param {string} jsonString - The JSON string to parse.
 * @param {T} [fallbackValue] - The fallback value to use if parsing fails.
 * @return {T | Primitive | undefined} - The parsed object or a primitive value, or undefined if parsing fails.
 *
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url}
 */
export function parseJSON<T>(
  jsonString: string,
  fallbackValue?: T,
): T | Primitive | undefined {
  try {
    return JSON.parse(jsonString, reviver) as T;
  } catch {
    const decodedValue = decodePrimitive(jsonString);
    return decodedValue !== errorSym ? decodedValue : fallbackValue;
  }
}

export function parseSsrQs<T>(sp: object | undefined, defaults: T) {
  return {
    ...defaults,
    ...(parseJSONSsr(JSON.stringify(sp), defaults) as object),
  } as T;
}

const reviverSsrQs = (key: string, value: unknown) => {
  const isStr = typeof value === 'string';
  const decoded = isStr && decode(value?.replaceAll?.("'", '"') as string);
  if (decoded === errorSym) return value;
  return key && isStr ? decoded : value;
};

function parseJSONSsr<T>(
  jsonString: string,
  fallbackValue?: T,
): T | Primitive | undefined {
  try {
    return JSON.parse(jsonString, reviverSsrQs) as T;
  } catch {
    const decodedValue = decodePrimitive(jsonString);
    return decodedValue !== errorSym ? decodedValue : fallbackValue;
  }
}
