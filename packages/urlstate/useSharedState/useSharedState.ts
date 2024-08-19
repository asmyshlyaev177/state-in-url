import React from 'react';

import { stateMap, subscribers } from '../subscribers';
import { useInsertionEffect } from '../useInsertionEffect';
import {
  type DeepReadonly,
  isEqual,
  isSSR,
  type JSONCompatible,
} from '../utils';

/**
 * Custom React hook for sharing state between unrelated components.
 *
 * @param {T} defaultState - The default state object
 * @param {() => T} [_getInitial] - Optional function to get initial state
 * @returns {Object} Object containing `state`, `getState`, and `setState` functions
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { state, setState } = useSharedState(form);
 *
 * setState({ name: 'test' });
 * // OR
 * setState(curr => ({ ...curr, name: 'test' }))
 *  ```
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/main/packages/urlstate/useSharedState}
 */
export function useSharedState<T extends JSONCompatible>(
  defaultState: T,
  _getInitial?: () => T,
) {
  const stateShape = React.useRef(defaultState);

  const [state, _setState] = React.useState(() => {
    if (isSSR()) {
      return _getInitial ? _getInitial?.() : stateShape.current;
    }

    const currVal = stateMap.get(stateShape.current);
    if (!currVal) {
      const val = _getInitial?.() || stateShape.current;
      stateMap.set(stateShape.current, val);
      return val;
    } else {
      return currVal;
    }
  });

  const setState = React.useCallback(
    (
      value:
        | (Partial<T> | Partial<DeepReadonly<T>>)
        | ((currState: typeof stateShape.current) => typeof stateShape.current),
    ): void => {
      const curr = stateMap.get(stateShape.current);
      const isFunc = typeof value === 'function';

      const newVal = isFunc ? value(curr) : { ...curr, ...value };
      if (isEqual(curr, newVal)) return void 0;
      stateMap.set(stateShape.current, newVal);
      subscribers.get(stateShape.current).forEach((sub) => {
        sub();
      });
    },
    [],
  );

  useInsertionEffect(() => {
    const cb = () => {
      _setState(stateMap.get(stateShape.current) || stateShape.current);
    };
    const unsub = subscribers.add(stateShape.current, cb);

    return () => {
      unsub();
    };
  }, []);

  // get state without deps
  const getState = React.useCallback(() => {
    return stateMap.get(stateShape.current) || stateShape.current;
  }, []);

  return { state, getState, setState };
}
