import { type JSONCompatible } from '../utils';
/** Keeps what `setUrl` keeps — params the shape does not own. `href`'s own win. */
export declare function hrefWithState<T extends JSONCompatible>(href: string, shape: T, state: T, currentSearch: string): string;
