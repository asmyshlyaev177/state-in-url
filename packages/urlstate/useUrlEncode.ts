import React from 'react';
import { typeOf, type JSONCompatible, type DeepReadonly } from './utils';
import { encode, decode } from './encoder';

/**
 * Returns stringify and parse functions
 *
 * @param {?JSONCompatible<T>} [stateShape] Optional fallback values for state
 */
export function useUrlEncode<T>(stateShape?: JSONCompatible<T>) {
  const stringify = React.useCallback(
    function (
      state:
        | DeepReadonly<NonNullable<typeof stateShape>>
        | NonNullable<typeof stateShape>,
      strOrSearchParams?: string | URLSearchParams,
    ): string {
      const params = getParams(strOrSearchParams);
      if (typeOf(state) === 'object') {
        Object.entries(state).forEach(([key, value]) => {
          const initialVal = stateShape?.[key as keyof typeof stateShape];
          if (JSON.stringify(value) !== JSON.stringify(initialVal)) {
            params.set(key, encode(value));
          } else {
            params.delete(key);
          }
        });
      }

      return params.toString();
    },
    [stateShape],
  );

  const parse = React.useCallback(
    function (strOrSearchParams?: string | URLSearchParams) {
      const params = getParams(strOrSearchParams);
      return {
        ...stateShape,
        ...Object.fromEntries(
          [...params.entries()].map(([key, value]) => [
            key,
            decode(value) ?? stateShape?.[key as keyof typeof stateShape],
          ]),
        ),
      } as DeepReadonly<NonNullable<typeof stateShape>>;
    },
    [stateShape],
  );

  return { parse, stringify };
}

const getParams = (strOrSearchParams?: string | URLSearchParams) =>
  new URLSearchParams(
    typeof strOrSearchParams === 'string'
      ? strOrSearchParams
      : strOrSearchParams?.toString?.() || '',
  );
