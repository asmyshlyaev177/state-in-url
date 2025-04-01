import { SYMBOLS } from "../constants";
import { type JSONCompatible, type Simple, typeOf } from "../utils";

/**
 * Encode any JSON serializable value to URL friendly string
 *
 * @param {unknown} payload any value to serialize
 * @returns {string} URLSearchParams compatible value string
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/encoder#encode}
 */
export function encode(payload: unknown): string {
  if (typeof payload === "function" || typeof payload === "symbol") return "";

  if (isEncoded(payload)) {
    return payload as string;
  }

  return JSON.stringify(structuredClone(payload), replacer)
    .replace(/'/g, "%27")
    .replace(/"/g, "'");
}

function replacer(_key: string, value: unknown): unknown {
  const type = typeOf(value);

  if (type !== "object" && type !== "array") {
    return encodePrimitive(value as unknown as Simple);
  }

  if (type === "object") {
    const _value = value as { [key: string]: unknown };

    for (const objKey of Object.keys(_value)) {
      _value[objKey] = replacer(_key, _value[objKey]);
    }
    return _value;
  }
  if (type === "array") {
    return (value as unknown as Array<unknown>).map(
      (val) => replacer(_key, val) as Simple,
    );
  }

  return value;
}

export const encodePrimitive = (payload: Simple) => {
  switch (typeOf(payload)) {
    case "date":
      return SYMBOLS.date + new Date(payload as Date).toISOString();
    case "undefined":
      return SYMBOLS.undefined;
    default:
      return payload;
  }
};

/**
 * Decode value part of URLSearchParams back to JS value
 *
 * @param {string} payload URLSearchParams compatible value string
 * @param {any} fallback optional fallback value
 * @returns {unknown} decoded object
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/encoder#decode}
 */
export function decode<T>(payload: string, fallback?: T) {
  return parseJSON(
    payload.replace(/'/g, '"').replace(/%27/g, "'"),
    fallback as JSONCompatible,
  ) as T;
}

/**
 * Parses a JSON string into a TypeScript object.
 *
 * @param {string} jsonString - The JSON string to parse.
 * @param {T} [fallbackValue] - The fallback value to use if parsing fails.
 * @return {T | CustomDecoded | undefined} - The parsed object or a primitive value, or undefined if parsing fails.
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url}
 */
export function parseJSON<T extends JSONCompatible>(
  jsonString: string,
  fallbackValue?: T,
): T | CustomDecoded | undefined {
  try {
    return JSON.parse(jsonString, reviver) as T;
  } catch {
    return fallbackValue;
  }
}

export function reviver(_key: string, value: unknown): unknown {
  return typeof value === "string" ? decodePrimitive(value) : value;
}

export const decodePrimitive = (str: string) => {
  if (str === SYMBOLS.undefined) return undefined;
  if (str?.startsWith?.(SYMBOLS.date)) return new Date(str.slice(1));

  return str;
};

const encReg = new RegExp(`^(${SYMBOLS.undefined}|${SYMBOLS.date})`);
const isEncoded = (val: unknown) => encReg.test(String(val));

export type CustomDecoded = ReturnType<typeof decodePrimitive>;
