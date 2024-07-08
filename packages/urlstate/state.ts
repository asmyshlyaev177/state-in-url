import React from 'react';

import { useUrlEncode } from './useUrlEncode';
import {
  type JSONCompatible,
  type DeepReadonly,
  isEqual,
  isSSR,
} from './utils';
import { subscribers, stateMap } from './subscribers';

export function useState<T>(defaultState: JSONCompatible<T>) {
  const stateShape = React.useRef(defaultState);
  const { parse, stringify } = useUrlEncode(stateShape.current);

  const [state, _setState] = React.useState(() => {
    const val = stateMap.get(stateShape.current);
    const newVal = parse(isSSR() ? '' : window.location.search);
    if (!val) {
      stateMap.set(stateShape.current, newVal);
    }
    return newVal as typeof defaultState;
  });

  React.useInsertionEffect(() => {
    const subs = subscribers.get(stateShape.current) || [];
    const cb = () => {
      _setState(
        (stateMap.get(stateShape.current) ||
          defaultState) as typeof defaultState,
      );
    };
    subscribers.set(stateShape.current, subs.concat(cb));

    return () => {
      const subs = subscribers.get(stateShape.current) || [];
      subscribers.set(
        stateShape.current as object,
        subs.filter((sub) => sub !== cb),
      );
    };
  }, []);

  // get state without deps
  const getState = React.useCallback(() => {
    return (stateMap.get(stateShape.current) ||
      stateShape.current) as typeof defaultState;
  }, []);

  const setState = React.useCallback(
    (
      value:
        | typeof defaultState
        | DeepReadonly<typeof defaultState>
        | ((currState: typeof defaultState) => typeof defaultState),
    ) => {
      const curr = stateMap.get(stateShape.current) || stateShape.current;
      const isFunc = typeof value === 'function';

      if (isFunc) {
        const newVal = value(curr as typeof defaultState);
        if (isEqual(curr, newVal)) return false;
        stateMap.set(stateShape.current, newVal);
        (subscribers.get(stateShape.current) || []).forEach((sub) => {
          sub();
        });
      } else {
        if (isEqual(curr, value)) return false;
        stateMap.set(stateShape.current, value);
        (subscribers.get(stateShape.current) || []).forEach((sub) => {
          sub();
        });
      }
    },
    [],
  );

  return { state, getState, setState, parse, stringify };
}
