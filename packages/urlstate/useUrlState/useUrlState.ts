import { useRouter } from 'next/navigation';
import React from 'react';

import { useUrlEncode } from '..';
import { parseSsrQs } from '../encoder';
import { useSharedState } from '../useSharedState';
import { type DeepReadonly, isSSR, type JSONCompatible } from '../utils';

// TODO: make a generic with `router` params
// create separate hooks for nextjs/react-router

/**
 * NextJS hook. Returns `state`, `updateState`, and `updateUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {?SearchParams<T>} [searchParams] searchParams from Next server component
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const { state, updateState, updateUrl } = useUrlState(form);
 *
 * updateState({ name: 'test' });
 * // by default it's uses router.push with scroll: false
 * updateUrl({ name: 'test' }, { replace: true, scroll: true });
 *  ```
 *
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/useUrlState#api}
 */
export function useUrlState<T extends JSONCompatible>(
  defaultState: T,
  searchParams?: object,
) {
  const { parse, stringify } = useUrlEncode(defaultState);
  const { state, getState, setState } = useSharedState(defaultState, () =>
    isSSR()
      ? parseSsrQs(searchParams, defaultState)
      : parse(window.location.search),
  );

  const router = useRouter();

  React.useInsertionEffect(() => {
    // for history navigation
    const popCb = () => {
      const newVal = parse(window.location.search);
      setState(newVal);
    };
    const ev = 'popstate';
    window.addEventListener(ev, popCb);

    return () => {
      window.removeEventListener(ev, popCb);
    };
  }, [setState]);

  const updateUrl = React.useCallback(
    (
      value?: (T | DeepReadonly<T>) | ((currState: T) => T),
      options?: Options,
    ) => {
      const currSP = window.location.search;
      const currUrl = `${window.location.pathname}${currSP.length && !currSP.includes('?') ? '?' : ''}${currSP}`;
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

      const newUrl = `${window.location.pathname}${qStr.length ? '?' : ''}${qStr}`;

      if (currUrl !== newUrl) {
        const { replace, ...rOptions } = options || {};
        router[replace ? 'replace' : 'push'](newUrl, {
          scroll: false,
          ...rOptions,
        });
      }
    },
    [router, stringify, getState],
  );

  return {
    /**
     * * Example:
     * ```ts
     * updateState({ name: 'test' });
     * // or
     * updateState(curr => ({ ...curr, name: 'test' }) );
     *  ```
     *
     *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/useUrlState#updatestate}
     */
    updateState: setState,
    /**
     * * Example:
     * ```ts
     * updateUrl({ name: 'test' });
     * // or
     * updateUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: false  } );
     *  ```
     *
     *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/useUrlState#updateurl}
     */
    updateUrl,
    state: state as DeepReadonly<typeof state>,
  };
}

type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<Parameters<Router['push']>[1]>;

interface Options extends RouterOptions {
  replace?: boolean;
}
