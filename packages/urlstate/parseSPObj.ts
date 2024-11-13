import {
  decode,
  decodePrimitive,
  errorSym,
  type Primitive,
} from "./encoder/encoder";
import { type JSONCompatible } from "./utils";

/**
 * Parses the Next.js server-side `searchParams` into an object.
 *
 * Or with react-router
 * {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState/useUrlState.ts}
 *
 *
 * @param {object | undefined} sp - The server-side searchParams object to parse.
 * @param {T} defaults - The default values to use if parsing fails.
 * @return {T} - The parsed object or the default values.
 */
export function parseSPObj<T extends JSONCompatible>(
  sp: object | undefined,
  defaults: T,
) {
  return {
    ...defaults,
    ...(parseJSONSsr<T>(JSON.stringify(sp), defaults) as T),
  };
}

function parseJSONSsr<T extends JSONCompatible>(
  jsonString: string,
  fallbackValue?: T,
): T | Primitive | undefined {
  try {
    return JSON.parse(jsonString, reviverSPSsr) as T;
  } catch {
    const decodedValue = decodePrimitive(jsonString);
    return decodedValue !== errorSym ? decodedValue : fallbackValue;
  }
}

const reviverSPSsr = (key: string, value: unknown) => {
  const isStr = typeof value === "string";
  const decoded = isStr && decode(value?.replace?.(/'/g, '"'));
  return key && isStr ? decoded : value;
};
