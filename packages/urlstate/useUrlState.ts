import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { useUrlEncode } from './useUrlEncode';
import { type JSONCompatible } from './utils';

/**
 * NextJS hook. Returns `state`, `updateState`, and `updateUrl` functions
 *
 * @param {?JSONCompatible<T>} [defaultState] Optional fallback values for state
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
export function useUrlState<T>(defaultState?: JSONCompatible<T>) {
  const router = useRouter();
  const pathname = usePathname();
  const { parse, stringify } = useUrlEncode(defaultState);
  const searchParams = useSearchParams();
  const [state, setState] = React.useState(() => parse(searchParams));

  React.useEffect(() => {
    setState((curr) => {
      const newVal = parse(searchParams);
      return JSON.stringify(curr) === JSON.stringify(newVal) ? curr : newVal;
    });
  }, [parse, searchParams]);

  const updateState = React.useCallback(
    (value: typeof state | ((currState: typeof state) => typeof state)) => {
      typeof value === 'function'
        ? setState((curr) => value(curr))
        : setState(value);
    },
    [],
  );

  const updateUrl = React.useCallback(
    (
      value: typeof state | ((currState: typeof state) => typeof state),
      options?: Options,
    ) => {
      const currSP = searchParams.toString();
      const currUrl = `${pathname}${currSP.length ? '?' : ''}${currSP}`;
      const isFunc = typeof value === 'function';
      const qStr = isFunc
        ? // @ts-expect-error output is string, and it can handle invalid input
          stringify(value(state))
        : stringify(value as unknown as JSONCompatible<T>);
      const newUrl = `${pathname}${qStr.length ? '?' : ''}${qStr}`;

      if (currUrl !== newUrl) {
        const { replace, ...rOptions } = options || {};
        router[replace ? 'replace' : 'push'](newUrl, {
          scroll: false,
          ...rOptions,
        });
      }
    },
    [pathname, router, stringify, searchParams, state],
  );

  return { updateUrl, updateState, state };
}

type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<Parameters<Router['push']>[1]>;

interface Options extends RouterOptions {
  replace?: boolean;
}
