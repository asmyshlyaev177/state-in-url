import NextLink from 'next/link';

/**
 * `next/link` with prefetching off, which is what every link on this site
 * wants.
 *
 * Prefetch buys a faster navigation and costs a request per link in the
 * viewport. Here it only ever cost: the three demo routes and the eight locale
 * roots are dynamic, and Next holds a dynamic prefetch with
 * `staleTimes.dynamic: 0` — the payload is fetched and discarded, then fetched
 * again the next time the link comes into view. Measured on production
 * 2026-09-03: a session with no clicks at all spent 25 of its 44 same-origin
 * requests on `?_rsc=` prefetches, and an idle tab with the `/vs/nuqs` link
 * parked in the viewport reached 262 in ten seconds.
 *
 * It lives here rather than as `prefetch={false}` at five call sites because
 * the failure is a *new* link: one added without the prop re-opens the hole,
 * and nothing would say so.
 *
 * Pass `prefetch` explicitly to opt a link back in.
 */
export const Link = (props: React.ComponentProps<typeof NextLink>) => (
  <NextLink prefetch={false} {...props} />
);
