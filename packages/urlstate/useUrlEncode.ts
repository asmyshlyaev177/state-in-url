import React from 'react';
import {
  typeOf,
  type JSONCompatible,
  type DeepReadonly,
  type UnknownObj,
} from './utils';
import { encodeState, decodeState } from './encodeState';

/**
 * A hook that returns stringify and parse functions for encoding and decoding state
 * to and from URL search parameters.
 *
 * @template T - The type of the state shape
 * @param {JSONCompatible<T>} [stateShape] Optional fallback values for state
 * @returns {} `stringify` and `parse` functions
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const { parse, stringify } = useUrlEncode(form);
 *
 * stringify({ name: 'John' }, 'someExistingParamToKeep=123');
 * // by default it's uses router.push with scroll: false
 * parse('name=Tom');
 *  ```
 */
export function useUrlEncode<T>(stateShape?: JSONCompatible<T>) {
  const stringify = React.useCallback(
    function (
      state:
        | typeof stateShape
        | NonNullable<typeof stateShape>
        | DeepReadonly<NonNullable<typeof stateShape>>,

      paramsToKeep?: string | URLSearchParams,
    ): string {
      return typeOf(state) === 'object'
        ? encodeState(state as object, stateShape, paramsToKeep)
        : '';
    },
    [stateShape],
  );

  const parse = React.useCallback(
    function (strOrSearchParams: string | URLSearchParams) {
      return decodeState(strOrSearchParams, stateShape) as undefined extends T
        ? DeepReadonly<UnknownObj>
        : DeepReadonly<NonNullable<typeof stateShape>>;
    },
    [stateShape],
  );

  return { parse, stringify };
}
