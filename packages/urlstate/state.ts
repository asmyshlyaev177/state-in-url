import React from 'react';

import { stateMap, subscribers } from './subscribers';
import { useUrlEncode } from './useUrlEncode';
import { isEqual, isSSR, type JSONCompatible } from './utils';

export function useState<T extends JSONCompatible>(defaultState: T) {
  const stateShape = React.useRef(defaultState);
  const { parse, stringify } = useUrlEncode(stateShape.current);

  const [state, _setState] = React.useState(() => {
    const val = stateMap.get(stateShape.current);
    const newVal = parse(isSSR() ? '' : window.location.search);
    if (!val) {
      stateMap.set(stateShape.current, newVal);
      return newVal;
    }
    return val;
  });

  const setState = React.useCallback(
    (
      value:
        | typeof stateShape.current
        | ((currState: typeof stateShape.current) => typeof stateShape.current),
    ): void => {
      const curr = stateMap.get(stateShape.current) || stateShape.current;
      const isFunc = typeof value === 'function';

      if (isFunc) {
        const newVal = value(curr);
        if (isEqual(curr, newVal)) return void 0;
        stateMap.set(stateShape.current, newVal);
        (subscribers.get(stateShape.current) || []).forEach((sub) => {
          sub();
        });
      } else {
        if (isEqual(curr, value)) return void 0;
        stateMap.set(stateShape.current, value);
        (subscribers.get(stateShape.current) || []).forEach((sub) => {
          sub();
        });
      }
    },
    [],
  );

  React.useInsertionEffect(() => {
    const subs = subscribers.get(stateShape.current) || [];
    const cb = () => {
      _setState(stateMap.get(stateShape.current) || stateShape.current);
    };
    subscribers.set(stateShape.current, subs.concat(cb));

    // for history navigation
    const popCb = () => {
      const newVal = parse(window.location.search);
      setState(newVal);
    };
    const ev = 'popstate';
    window.addEventListener(ev, popCb);

    return () => {
      const subs = subscribers.get(stateShape.current) || [];
      subscribers.set(
        stateShape.current,
        subs.filter((sub) => sub !== cb),
      );

      window.removeEventListener(ev, popCb);
    };
  }, [setState]);

  // get state without deps
  const getState = React.useCallback(() => {
    return stateMap.get(stateShape.current) || stateShape.current;
  }, []);

  return { state, getState, setState, stringify };
}
