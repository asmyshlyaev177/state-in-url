import { type JSONCompatible } from '../utils';
/**
 * Parses the Next.js server-side `searchParams` into an object.
 *
 * @param {object | undefined} sp - The server-side searchParams object to parse.
 * @param {T} defaults - The default values to use if parsing fails.
 * @return {T} - The parsed object or the default values.
 */
export declare function parseSPObj<T extends JSONCompatible>(sp: object | undefined, defaults: T): T;
