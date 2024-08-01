import React from 'react';

import { parseSsrQs } from '../next/parseSsrQs';
import { useInsertionEffect } from '../useInsertionEffect';
import { useSharedState } from '../useSharedState';
import { useUrlEncode } from '../useUrlEncode';
import { type DeepReadonly, isSSR, type JSONCompatible } from '../utils';

type Router = {
  push: (href: string, opts: object) => void;
  replace: (href: string, opts: object) => void;
};

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
  const { state, getState, setState } = useSharedState(defaultState, () =>
    isSSR()
      ? parseSsrQs(searchParams, defaultState)
      : parse(window.location.search),
  );

  // TODO: href ?

  useInsertionEffect(() => {
    // for history navigation
    const popCb = () => {
      const newVal = parse(window.location.search);
      setState(newVal);
    };

    window.addEventListener(popstateEv, popCb);

    return () => {
      window.removeEventListener(popstateEv, popCb);
    };
  }, [setState]);

  const updateUrl = React.useCallback(
    (
      value?: (T | DeepReadonly<T>) | ((currState: T) => T),
      options?: Options,
    ) => {
      const currUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const isFunc = typeof value === 'function';

      let newVal: T | DeepReadonly<T>;
      let qStr: string;
      if (isFunc) {
        newVal = value(getState());
        qStr = stringify(newVal);
      } else {
        newVal = (value ?? getState()) as T;
        qStr = stringify(newVal);
      }
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

const popstateEv = 'popstate';

// eslint-disable-next-line @typescript-eslint/ban-types
interface Options extends Object {
  replace?: boolean;
}
