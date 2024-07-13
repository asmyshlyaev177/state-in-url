import React from 'react';

import { decodeState, encodeState } from '../encodeState';
import { type JSONCompatible, typeOf } from '../utils';

/**
 * A hook that returns stringify and parse functions for encoding and decoding state
 * to and from URL search parameters.
 *
 * @template T - The type of the state shape
 * @param {JSONCompatible<T>} [stateShape] Fallback values for state
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
 *
 * * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/useUrlEncode#api}
 */
export function useUrlEncode<T extends JSONCompatible>(stateShape: T) {
  const stringify = React.useCallback(
    function (
      state: typeof stateShape,
      paramsToKeep?: string | URLSearchParams,
    ): string {
      return typeOf(state) === 'object'
        ? encodeState(state, stateShape, paramsToKeep)
        : '';
    },
    [stateShape],
  );

  const parse = React.useCallback(
    function (strOrSearchParams: string | URLSearchParams) {
      return decodeState(strOrSearchParams, stateShape) as typeof stateShape;
    },
    [stateShape],
  );

  return {
    /**
Parse URL query string to state object
* * Example:
 * ```ts
const state = parse('name=◖Tom');
console.log(state); // Output: { name: 'Tom' }
 *  ```
 *
 *  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/useUrlEncode#parse}
 */
    parse,
    /**
Converts a state object to a URL query string.
* * Example:
* ```ts
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // Output: name=◖John&someExistingParamToKeep=123
*  ```
*
*  * Github {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/useUrlEncode#stringify}
*/
    stringify,
  };
}
