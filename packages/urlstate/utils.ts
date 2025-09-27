export type Type =
  | "string"
  | "date"
  | "boolean"
  | "number"
  | "bigint"
  | "undefined"
  | "object"
  | "null"
  | "function"
  | "symbol"
  | "array";

/**
 * A better replacement for `typeof`
 *
 * @param {unknown} val value to detect type
 * @returns {Type} Type of val - `string`, `date`, `boolean`,
 * `number`, `bigint`, `undefined`, `null`, `object`,
 * `function`, `symbol`, `array`
 */
export const typeOf = (val: unknown): Type => {
  const nativeType = typeof val;
  const isNull = val === null;
  const isArray = Array.isArray(val);
  const isDate = val instanceof Date;
  const isObject = !isNull && !isDate && !isArray && nativeType === "object";

  return (
    (isNull && "null") ||
    (isDate && "date") ||
    (isArray && "array") ||
    (isObject && "object") ||
    nativeType
  );
};

export const isPrimitive = (val: unknown): val is Simple => {
  const type = typeOf(val);

  return type !== "object" && type !== "array";
};

export type Simple =
  | string
  | Date
  | boolean
  | number
  | null
  | undefined
  // eslint-disable-next-line @typescript-eslint/ban-types
  | Function
  | undefined
  | symbol;

export const isSSR = typeof window === "undefined";

export type JSON =
  | null
  | boolean
  | Date
  | number
  | string
  | { [prop: string]: JSON | JSON[] };

export type JSONCompatible = {
  [prop: string]: JSON | JSON[] | undefined;
};

export const getParams = (strOrSearchParams?: string | URLSearchParams) =>
  new URLSearchParams(
    typeof strOrSearchParams === "string"
      ? strOrSearchParams.split("?")?.[1] || strOrSearchParams
      : strOrSearchParams?.toString?.() || "",
  );

export type UnknownObj = object | { [key: string]: unknown };

export const isEqual = (val1: unknown, val2: unknown) =>
  JSON.stringify(val1) === JSON.stringify(val2);

export function filterUnknownParamsClient<T extends object>(
  shape: T,
  params?: string | URLSearchParams | Record<string, string> | object,
) {
  const shapeParams = new URLSearchParams();

  const filtered = filterUnknown(shape, [
    ...new URLSearchParams(
      (params as string | URLSearchParams | Record<string, string>) || "",
    ).entries(),
  ]);

  for (const [key, value] of filtered) {
    shapeParams.set(key, value);
  }

  return shapeParams.toString();
}

// TODO: tests
export function filterUnknownParams<T extends object>(
  shape: T,
  searchParams?: object,
) {
  return Object.fromEntries(
    filterUnknown(shape, Object.entries(searchParams || {})),
  ) as T;
}

export function filterUnknown<T extends object>(
  shape: T,
  entries: [key: string, value: string][],
) {
  const shapeKeys = Object.keys(shape);

  const result = [];

  for (let i = 0; i < entries.length; i++) {
    if (shapeKeys.includes(entries[i]?.[0])) {
      result.push([entries[i][0].replace(/\+/g, " "), entries[i][1]]);
    }
  }

  return result;
}

export function assignValue<T extends object>(shape: T, newVal: Partial<T>) {
  const result: T = Object.assign({}, shape);

  for (const [key] of Object.entries(shape)) {
    const _key = key as keyof T;
    const valExists = newVal[_key] !== undefined;
    result[_key] = (valExists ? newVal[_key] : shape[_key]) as T[keyof T];
  }

  return result;
}

export interface Router {
  push: (href: string, opts?: object) => void;
  replace: (href: string, opts?: object) => void;
}

export const routerHistory: Router = {
  push: (str) => {
    window && window.history.pushState(null, "", str);
  },
  replace: (str) => {
    window && window.history.replaceState(null, "", str);
  },
};

export const isSafari = /apple/i.test((!isSSR && navigator?.userAgent) || "");

export const popstateEv = "popstate";

export function getSearch() {
  return isSSR ? "" : window.location.search;
}
