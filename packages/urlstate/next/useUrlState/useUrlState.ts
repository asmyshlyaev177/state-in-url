import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

import { parseSPObj } from "../../parseSPObj";
import { useUrlStateBase } from "../../useUrlStateBase";
import {
  type DeepReadonly,
  filterUnknownParams,
  filterUnknownParamsClient,
  isSSR,
  type JSONCompatible,
  routerHistory,
} from "../../utils";

/**
 * NextJS hook. Returns `urlState`, `setState`, and `setUrl` functions
 *
 * @param {JSONCompatible<T>} [defaultState] Fallback (default) values for state
 * @param {?SearchParams<T>} [searchParams] searchParams from Next server component
 * @param {boolean} [useHistory] use window.history for navigation, no _rsc requests https://github.com/vercel/next.js/discussions/59167
 *
 * * Example:
 * ```ts
 * export const form = { name: '', age: 0 };
 * const { urlState, setState, setUrl } = useUrlState({ defaultState: form });
 * // for nextjs seerver components
 * // const { urlState, setState, setUrl } = useUrlState({ defaultState: form, searchParams });
 *
 * setState({ name: 'test' });
 * // by default it's uses router.push with scroll: false
 * setUrl({ name: 'test' }, { replace: true, scroll: true });
 * // similar to React.useState
 * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: true });
 *  ```
 *
 *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#api}
 */
export function useUrlState<T extends JSONCompatible>({
  defaultState,
  searchParams,
  useHistory,
  ...opts
}: {
  defaultState: T;
  searchParams?: object;
  replace?: boolean;
  scroll?: boolean;
  useHistory?: boolean;
}) {
  const router = (useHistory === undefined ? true : !!useHistory)
    ? routerHistory
    : useRouter();
  const {
    state,
    updateState,
    updateUrl: updateUrlBase,
    getState,
  } = useUrlStateBase(defaultState, router, ({ parse }) =>
    isSSR()
      ? parseSPObj(
          filterUnknownParams(defaultState, searchParams),
          defaultState,
        )
      : parse(filterUnknownParamsClient(defaultState)),
  );

  const updateUrl = React.useCallback(
    (value?: Parameters<typeof updateUrlBase>[0], options?: Options) => {
      const _opts = { ...defaultOptions, ...opts, ...options };
      updateUrlBase(value, _opts);
    },
    [updateUrlBase, opts],
  );

  const sp = useSearchParams();
  React.useEffect(() => {
    updateState(
      filterUnknownParams(
        defaultState,
        parseSPObj(
          Object.fromEntries([...sp.entries()]),
          defaultState,
        ) as Partial<T>,
      ),
    );
  }, [sp]);

  return {
    /**
     * * Example:
     * ```ts
     * setState({ name: 'test' });
     * // or
     * setState(curr => ({ ...curr, name: 'test' }) );
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#updatestate}
     */
    setState: updateState,
    /**
     * @deprecated use `setState`
     */
    updateState,
    /**
     * * Example:
     * ```ts
     * setUrl({ name: 'test' });
     * // or
     * setUrl(curr => ({ ...curr, name: 'test' }), { replace: true, scroll: false  } );
     *  ```
     *
     *  * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState#updateurl}
     */
    setUrl: updateUrl,
    /**
     * @deprecated use `setUrl`
     */
    updateUrl,
    urlState: state as DeepReadonly<typeof state>,
    /**
     * @deprecated use `urlState`
     */
    state: state as DeepReadonly<typeof state>,
    getState,
  };
}

type Router = ReturnType<typeof useRouter>;
type RouterOptions = NonNullable<
  Parameters<Router["push"]>[1] | Parameters<Router["replace"]>[1]
>;

interface Options extends RouterOptions {
  replace?: boolean;
}

const defaultOptions = {
  replace: true,
  scroll: false,
};
