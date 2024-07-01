import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { useUrlEncode } from './useUrlEncode';
import { type JSONCompatible } from './utils';

/**
 * NextJS hook. Returns `state`, `updateState`, and `updateUrl` functions
 *
 * @param {?JSONCompatible<T>} [defaultState] Optional fallback values for state
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
      options?: Parameters<typeof router.push>[1],
    ) => {
      const currUrl = `${pathname}?${searchParams.toString()}`;
      const isFunc = typeof value === 'function';
      const newUrl = isFunc
        ? `${pathname}?${stringify(value(state))}`
        : `${pathname}?${stringify(value)}`;

      if (currUrl !== newUrl) {
        router.push(newUrl, options);
      }
    },
    [pathname, router, stringify, searchParams, state],
  );

  return { updateUrl, updateState, state };
}
