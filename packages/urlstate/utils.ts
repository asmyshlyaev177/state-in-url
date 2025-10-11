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
  if (val === null) return "null";

  const nativeType = typeof val;
  if (nativeType !== "object") return nativeType;

  if (Array.isArray(val)) return "array";
  if (val instanceof Date) return "date";

  return "object";
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
  | symbol;

export const isSSR = typeof window === "undefined";

export type JSON =
  | null
  | boolean
  | Date
  | number
  | string
  | undefined
  | { [prop: string]: JSON | JSON[] };

export type JSONCompatible = {
  [prop: string]: JSON | JSON[] | undefined;
};

export const getParams = (strOrSearchParams?: string | URLSearchParams) => {
  if (strOrSearchParams instanceof URLSearchParams) {
    return strOrSearchParams;
  }
  if (typeof strOrSearchParams === "string") {
    const idx = strOrSearchParams.indexOf("?");
    return new URLSearchParams(
      idx === -1 ? strOrSearchParams : strOrSearchParams.slice(idx + 1),
    );
  }
  return new URLSearchParams();
};

export type UnknownObj = object | { [key: string]: unknown };

const isEqualArray = (arr1: unknown[], arr2: unknown[]): boolean => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((item, idx) => isEqual(item, arr2[idx]));
};

const isEqualObject = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>,
): boolean => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;
  return keys1.every((key) => isEqual(obj1[key], obj2[key]));
};

export const isEqual = (val1: unknown, val2: unknown): boolean => {
  // Fast path: reference equality
  if (val1 === val2) return true;

  // Fast path: null/undefined checks
  if (val1 == null || val2 == null) return false;

  const type1 = typeOf(val1);
  const type2 = typeOf(val2);

  // Different types can't be equal
  if (type1 !== type2) return false;

  // Fast path for primitives (already checked === above, so must be different)
  if (isPrimitive(val1)) return false;

  // For arrays
  if (type1 === "array") {
    return isEqualArray(val1 as unknown[], val2 as unknown[]);
  }

  // For objects
  if (type1 === "object") {
    return isEqualObject(
      val1 as Record<string, unknown>,
      val2 as Record<string, unknown>,
    );
  }

  // Fallback to JSON.stringify for dates and other edge cases
  return JSON.stringify(val1) === JSON.stringify(val2);
};

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
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", str);
    }
  },
  replace: (str) => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", str);
    }
  },
};

export const isSafari = /apple/i.test((!isSSR && navigator?.userAgent) || "");

export const popstateEv = "popstate";

export function getSearch() {
  return isSSR ? "" : window.location.search;
}
