import { typeOf } from './utils';
import { SYMBOLS } from './constants';

/**
 * Encode any JSON serializable value to URL friendly string
 *
 * @param {unknown} payload any value to serialize
 * @returns {string} URLSearchParams compatible value string
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
      return encodeURIComponent(payload as string);
    case 'number':
      return SYMBOLS.number + String(payload as number);
    case 'boolean':
      return SYMBOLS.boolean + String(payload as boolean);
    case 'object':
    case 'array':
      return encodeObject(payload as object);
    case 'null':
      return SYMBOLS.null;
    case 'undefined':
      return SYMBOLS.undefined;
    default:
      return String(payload as string);
  }
}

const encodeObject = (val: object) => {
  return JSON.stringify(val, replacer).replaceAll('"', "'");
};

const replacer = (key: string, value: unknown) => {
  const type = typeOf(value);
  return key && type !== 'object' && type !== 'array' ? encode(value) : value;
};

const decodeStr = (str: string) => {
  if (str.match(/^∓/)) return Number.parseFloat(str.replaceAll('∓', ''));
  if (str.match(/^🗵/)) return str.includes('true') ? true : false;
  if (str.match(/^⏲/)) return new Date(str.slice(1));
  if (str === SYMBOLS.null) return null;
  if (str === SYMBOLS.undefined) return undefined;
  return decodeURIComponent(str);
};

const reviver = (key: string, value: unknown) => {
  return key && typeof value === 'string' ? decodeStr(value) : value;
};

const parseJSON = (str: string) => {
  let result;

  try {
    result = JSON.parse(str, reviver);
    // eslint-disable-next-line no-empty
  } catch {}

  return result;
};

/**
 * Decode value part of URLSearchParams back to JS value
 *
 * @param {string} payload URLSearchParams compatible value string
 * @returns {unknown} decoded object
 */
export function decode<T>(payload: string): T {
  const str = payload.replaceAll("'", '"');

  return parseJSON(str) ?? decodeStr(payload);
}
