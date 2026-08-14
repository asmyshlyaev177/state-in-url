import React from 'react';

import { decodeState } from '../encodeState';
import { stateMap } from '../subscribers';
import { filterUnknownParamsClient, type JSONCompatible } from '../utils';

import { hrefWithState } from './hrefWithState';

/** Structural subset of `React.MouseEvent<HTMLAnchorElement>` and a DOM click. */
export interface LinkClickEvent {
  altKey: boolean;
  button: number;
  ctrlKey: boolean;
  currentTarget: { target?: string };
  defaultPrevented: boolean;
  metaKey: boolean;
  preventDefault: () => void;
  shiftKey: boolean;
}

const external = /^[a-z][a-z\d+\-.]*:|^\/\//i;

function handledByBrowser(event: LinkClickEvent) {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    !!event.currentTarget?.target
  );
}

function currentState<T extends JSONCompatible>(shape: T) {
  return (
    stateMap.get(shape) ??
    (decodeState(
      filterUnknownParamsClient(shape, window.location.search),
      shape,
    ) as T)
  );
}

/**
 * Carries url state to a link pointing at a different route. Returns a function
 * giving `{ href, onClick }` to spread onto an `<a>` or a framework `<Link>`.
 *
 * The markup keeps the plain `href`, so crawlers, prefetch and `hreflang` see
 * the canonical URL; state is read on click, so nothing re-renders.
 *
 * @template T - The type of the state shape
 * @param {JSONCompatible<T>} shape Default state, the same object `useUrlState` gets
 * @param {Function} navigate Framework navigation, e.g. `useRouter().push` or `useNavigate()`
 *
 * * Example:
 * ```tsx
 * export const form = { name: '' };
 * const linkProps = useLinkProps(form, useRouter().push);
 *
 * <Link {...linkProps('/de/pricing')}>Deutsch</Link>
 *  ```
 *
 * * Docs {@link https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/useLinkProps}
 */
export function useLinkProps<T extends JSONCompatible>(
  shape: T,
  navigate: (url: string) => void,
) {
  return React.useCallback(
    (href: string) => ({
      href,
      onClick: (event: LinkClickEvent) => {
        if (external.test(href) || handledByBrowser(event)) return;

        event.preventDefault();
        navigate(
          hrefWithState(
            href,
            shape,
            currentState(shape),
            window.location.search,
          ),
        );
      },
    }),
    [shape, navigate],
  );
}
