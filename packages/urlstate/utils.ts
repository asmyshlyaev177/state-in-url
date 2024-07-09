export type Type =
  | 'string'
  | 'date'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'undefined'
  | 'object'
  | 'null'
  | 'function'
  | 'symbol'
  | 'array';

/**
 * A better replacement for `typeof`
 *
 * @param {unknown} val value to detect type
 * @returns {Type} Type of val - `string`, `date`, `boolean`,
 * `number`, `bigint`, `undefined`, `null`, `object`,
 * `function`, `symbol`, `array`
 */
// eslint-disable-next-line complexity
export const typeOf = (val: unknown): Type => {
  const isNull = val === null;
  const isArray = Array.isArray(val);
  const isDate = val instanceof Date;
  const isObject = !isNull && !isDate && !isArray && typeof val === 'object';

  return (
    (isNull && 'null') ||
    (isDate && 'date') ||
    (isArray && 'array') ||
    (isObject && 'object') ||
    typeof val
  );
};

export const isSSR = () => typeof window === 'undefined';

type JSONPrimitive = string | number | boolean | Date | null | undefined;

type JSONValue =
  | JSONPrimitive
  | JSONValue[]
  | {
      [key: string]: JSONValue;
    };

// eslint-disable-next-line @typescript-eslint/ban-types
type NotAssignableToJson = bigint | symbol | Function;

export type JSONCompatible<T> = unknown extends T
  ? never
  : {
      [P in keyof T]: T[P] extends JSONValue
        ? T[P]
        : T[P] extends NotAssignableToJson
          ? never
          : JSONCompatible<T[P]>;
    };

// export type DeepReadonly<T> = Readonly<{
//   [K in keyof T]: T[K] extends Date | object | null
//     ? Readonly<T[K]>
//     : Readonly<DeepReadonly<T[K]>>;
// }>;

// export type DeepReadonly<T> = Readonly<{
//   readonly [P in keyof T]: DeepReadonly<T[P]>;
// }>;

// TODO: or this https://github.com/ts-essentials/ts-essentials/tree/master/lib/deep-readonly
// https://github.com/microsoft/TypeScript/issues/13923
export type DeepReadonly<T> =
  T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends Set<infer S>
      ? ReadonlySet<DeepReadonly<S>>
      : T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
        : T;

export const getParams = (strOrSearchParams?: string | URLSearchParams) =>
  new URLSearchParams(
    typeof strOrSearchParams === 'string'
      ? strOrSearchParams
      : strOrSearchParams?.toString?.() || '',
  );

export type UnknownObj = { [key: string]: unknown };

export const isEqual = (val1: unknown, val2: unknown) =>
  JSON.stringify(val1) === JSON.stringify(val2);
