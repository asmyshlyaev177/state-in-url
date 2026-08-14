import { encodeState } from '../encodeState';
import { getOtherParams, type JSONCompatible } from '../utils';

function splitOnce(str: string, separator: string): [string, string] {
  const at = str.indexOf(separator);
  return at === -1 ? [str, ''] : [str.slice(0, at), str.slice(at + 1)];
}

/** Keeps what `setUrl` keeps — params the shape does not own. `href`'s own win. */
export function hrefWithState<T extends JSONCompatible>(
  href: string,
  shape: T,
  state: T,
  currentSearch: string,
) {
  const [beforeHash, hash] = splitOnce(href, '#');
  const [path, search] = splitOnce(beforeHash, '?');

  const params = getOtherParams(shape, currentSearch);
  for (const [key, value] of new URLSearchParams(search)) {
    params.set(key, value);
  }

  const query = encodeState(state, shape, params);
  const queryString = query ? `?${query}` : '';
  const fragment = hash ? `#${hash}` : '';

  return `${path}${queryString}${fragment}`;
}
