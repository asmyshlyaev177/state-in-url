import { type JSONCompatible } from '../utils';
/** Structural subset of `React.MouseEvent<HTMLAnchorElement>` and a DOM click. */
export interface LinkClickEvent {
    altKey: boolean;
    button: number;
    ctrlKey: boolean;
    currentTarget: {
        target?: string;
    };
    defaultPrevented: boolean;
    metaKey: boolean;
    preventDefault: () => void;
    shiftKey: boolean;
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
export declare function useLinkProps<T extends JSONCompatible>(shape: T, navigate: (url: string) => void): (href: string) => {
    href: string;
    onClick: (event: LinkClickEvent) => void;
};
