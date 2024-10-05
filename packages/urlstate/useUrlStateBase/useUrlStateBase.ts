import React from "react";

import { useInsertionEffect } from "../useInsertionEffect";
import { useSharedState } from "../useSharedState";
import { useUrlEncode } from "../useUrlEncode";
import {
  type DeepReadonly,
  filterUnknownParamsClient,
  type JSONCompatible,
} from "../utils";

/**
 * A custom React hook to create custom hooks.
 *
 * @template T extends JSONCompatible
 * @param {T} defaultState - An object representing the default state values.
 * @param {Router} router - Router object with [push] and [replace] methods.
 * @param {Function} [getInitialState] - Optional function to get the initial state, passes `parse`, and `filterUnknownParams` helpers
 * @returns {Object} An object containing `state`, `getState`, `updateState`, and `updateUrl` properties.
 *
 *
 * * Example:
 * ```ts
 * export const form = { name: '' };
 * const router = { push: () => {}, replace: () => {} };
 * const { state, updateState, updateUrl } = useUrlStateBase(form, router, ({ parse, filterClientSP }) =>
 *   isSSR() ? getServerState() : getClientState()
 * );
 *  ```
 *
 * * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/integrations/packages/urlstate/useUrlStateBase#api}
 */

export function useUrlStateBase<T extends JSONCompatible>(
  defaultState: T,
  router: Router,
  getInitialState?: ({
    parse,
  }: {
    parse: ReturnType<typeof useUrlEncode<T>>["parse"];
  }) => T,
) {
  const { parse, stringify } = useUrlEncode(defaultState);
  const { state, getState, setState } = useSharedState(
    defaultState,
    () =>
      getInitialState?.({
        parse,
      }) || defaultState,
  );

  useInsertionEffect(() => {
    // for history navigation
    const popCb = () => {
      const newVal = parse(filterUnknownParamsClient(defaultState));
      setState(newVal);
    };

    window.addEventListener(popstateEv, popCb);

    return () => {
      window.removeEventListener(popstateEv, popCb);
    };
  }, [setState]);

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof setState>[0], options?: Options) => {
      const currUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const isFunc = typeof value === "function";
      const otherParams = getOtherParams(defaultState);

      const newVal = isFunc
        ? value(getState())
        : value
          ? { ...getState(), ...value }
          : getState();
      const qStr = stringify(newVal, otherParams);
      setState(newVal);

      const newUrl = `${window.location.pathname}${qStr.length ? "?" : ""}${qStr}${window.location.hash}`;

      if (currUrl !== newUrl) {
        const { replace, ...rOptions } = options || {};
        router[replace ? "replace" : "push"](newUrl, {
          ...rOptions,
        });
      }
    },
    [router, stringify, getState],
  );

  return {
    updateState: setState,
    updateUrl,
    state: state as DeepReadonly<typeof state>,
    getState,
  };
}

function getOtherParams<T extends object>(shape: T) {
  const shapeKeys = Object.keys(shape);
  const search = window.location.search;
  const allParams = new URLSearchParams(search);
  const params = new URLSearchParams();

  allParams.forEach(
    (value, key) => !shapeKeys.includes(key) && params.set(key, value),
  );
  return params;
}

const popstateEv = "popstate";

interface OptionsObject {
  [key: string]: unknown;
}

export interface Options extends OptionsObject {
  replace?: boolean;
}

type Router = {
  push: (href: string, opts: object) => void;
  replace: (href: string, opts: object) => void;
};
