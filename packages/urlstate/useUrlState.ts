import { useRouter } from 'next/navigation';
import React from 'react';
import { DeepReadonly, isSSR, type JSONCompatible } from './utils';
import { useState } from './state';
import { parseSsrQs } from './encoder';

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
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url}
 */
export function useUrlState<T>(defaultState: JSONCompatible<T>, sp?: object) {
  const { state, getState, setState, stringify } = useState(defaultState);

  const router = useRouter();

  const updateUrl = React.useCallback(
    (
      value?:
        | NonNullable<typeof defaultState>
        | DeepReadonly<NonNullable<typeof defaultState>>
        | ((
            currState: typeof defaultState | DeepReadonly<typeof defaultState>,
          ) => typeof defaultState),
      options?: Options,
    ) => {
      const currSP = window.location.search;
      const currUrl = `${window.location.pathname}${currSP.length ? '?' : ''}${currSP}`;
      const isFunc = typeof value === 'function';
      const qStr = isFunc
        ? stringify(value(getState()))
        : stringify(getState());
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
    updateUrl,
    updateState: setState,
    state: isSSR() ? parseSsrQs(sp, defaultState) : state,
  };
}

type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<Parameters<Router['push']>[1]>;

interface Options extends RouterOptions {
  replace?: boolean;
}
