import React from 'react';

import { parseSsrQs } from '../next/parseSsrQs';
import { useInsertionEffect } from '../useInsertionEffect';
import { useSharedState } from '../useSharedState';
import { useUrlEncode } from '../useUrlEncode';
import { type DeepReadonly, isSSR, type JSONCompatible } from '../utils';

/**
 * Base hook to integrate it with different routers
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {Router} [router] Router object with `push` and `replace` methods
 * @param {?SearchParams<T>} [searchParams] searchParams from Next server component
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const router = { push: () => {}, replace: () => {} };
 * const { state, updateState, updateUrl } = useUrlStateBase(form, router, sp);
 *  ```
 *
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/integrations/packages/urlstate/useUrlStateBase#api}
 */
export function useUrlStateBase<T extends JSONCompatible>(
  defaultState: T,
  router: Router,
  searchParams?: object,
) {
  const { parse, stringify } = useUrlEncode(defaultState);
  // TODO: pass this block from useUrlState ?
  const { state, getState, setState } = useSharedState(defaultState, () =>
    isSSR()
      ? parseSsrQs(filterSsrSP(defaultState, searchParams), defaultState)
      : parse(filterClientSP(defaultState)),
  );

  useInsertionEffect(() => {
    // for history navigation
    const popCb = () => {
      const newVal = parse(filterClientSP(defaultState));
      setState(newVal);
    };

    window.addEventListener(popstateEv, popCb);

    return () => {
      window.removeEventListener(popstateEv, popCb);
    };
  }, [setState]);

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof setState>[0], options?: Options) => {
      const currUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const isFunc = typeof value === 'function';
      const otherParams = getOtherParams(defaultState);

      const newVal = isFunc
        ? value(getState())
        : value
          ? { ...getState(), ...value }
          : getState();
      const qStr = stringify(newVal, otherParams);
      setState(newVal);

      const newUrl = `${window.location.pathname}${qStr.length ? '?' : ''}${qStr}${window.location.hash}`;

      if (currUrl !== newUrl) {
        const { replace, ...rOptions } = options || {};
        router[replace ? 'replace' : 'push'](newUrl, {
          ...rOptions,
        });
      }
    },
    [router, stringify, getState],
  );

  return {
    updateState: setState,
    updateUrl,
    state: state as DeepReadonly<typeof state>,
    getState,
  };
}

// need to use only common fields between shape and params, ignore undeclared SP
function filterClientSP<T extends object>(shape: T) {
  const params = new URLSearchParams(window.location.search);
  const shapeKeys = Object.keys(shape);

  const shapeParams = new URLSearchParams();
  [...params.entries()]
    .filter(([key]) => shapeKeys.includes(key))
    .forEach(([key, value]) => shapeParams.set(key, value));

  return shapeParams.toString();
}

function filterSsrSP<T extends object>(shape: T, searchParams?: object) {
  const shapeKeys = Object.keys(shape);

  const result = Object.fromEntries(
    Object.entries(searchParams || {}).filter(([key]) =>
      shapeKeys.includes(key),
    ),
  );
  return result as T;
}

function getOtherParams<T extends object>(shape: T) {
  const shapeKeys = Object.keys(shape);
  const search = window.location.search;
  const allParams = new URLSearchParams(search);
  const params = new URLSearchParams();

  allParams.forEach(
    (value, key) => !shapeKeys.includes(key) && params.set(key, value),
  );
  return params;
}

const popstateEv = 'popstate';

// eslint-disable-next-line @typescript-eslint/ban-types
interface Options extends Object {
  replace?: boolean;
}

type Router = {
  push: (href: string, opts: object) => void;
  replace: (href: string, opts: object) => void;
};
