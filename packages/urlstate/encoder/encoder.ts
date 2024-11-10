import { SYMBOLS } from "../constants";
import { type JSONCompatible, typeOf } from "../utils";

/**
 * Encode any JSON serializable value to URL friendly string
 *
 * @param {unknown} payload any value to serialize
 * @returns {string} URLSearchParams compatible value string
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/encoder#encode}
 */
export function encode(payload: unknown): string {
  if (isEncoded(payload)) {
    return payload as string;
  }

  switch (typeOf(payload)) {
    case "function":
    case "symbol":
      return "";
    case "date":
      return encodeDate(payload as Date);
    case "undefined":
      return SYMBOLS.undefined;
    default:
      return JSON.stringify(payload)
        .replaceAll("'", "%27")
        .replaceAll('"', "'");
  }
}

function encodeDate(val: Date) {
  return SYMBOLS.date + new Date(val).toISOString();
}

export type Primitive = Exclude<
  ReturnType<typeof decodePrimitive>,
  typeof errorSym
>;

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
    payload.replaceAll("'", '"').replaceAll("%27", "'"),
    fallback as JSONCompatible,
  );
}

export const decodePrimitive = (str: string) => {
  if (str === SYMBOLS.undefined) return undefined;
  if (str?.startsWith?.(SYMBOLS.date)) return new Date(str.slice(1));

  return errorSym;
};

export const errorSym = Symbol("isError");

export const reviver = (_key: string, value: unknown) => {
  const isStr = typeof value === "string";
  const decoded = isStr && decodePrimitive(value);
  if (decoded === errorSym) return value;
  return isStr ? decoded : value;
};

/**
 * Parses a JSON string into a TypeScript object.
 *
 * @param {string} jsonString - The JSON string to parse.
 * @param {T} [fallbackValue] - The fallback value to use if parsing fails.
 * @return {T | Primitive | undefined} - The parsed object or a primitive value, or undefined if parsing fails.
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url}
 */
export function parseJSON<T extends JSONCompatible>(
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

const encReg = new RegExp(`^(${SYMBOLS.undefined}|${SYMBOLS.date})`);
const isEncoded = (val: unknown) => encReg.test(String(val));
