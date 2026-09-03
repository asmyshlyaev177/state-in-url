import NextLink from 'next/link';

/**
 * `next/link` with prefetching off, which is what every link here wants.
 *
 * Prefetch costs a request per link in the viewport and buys nothing on this
 * site: the demo routes and locale roots are dynamic, and Next holds a dynamic
 * prefetch at `staleTimes.dynamic: 0`, so each payload is fetched, discarded,
 * and fetched again on the next intersection. Measured at 25 of 44 same-origin
 * requests in a session with no clicks.
 *
 * Here rather than `prefetch={false}` at each call site because the failure is
 * a *new* link — one added without the prop, with nothing to say so.
 *
 * Pass `prefetch` explicitly to opt a link back in.
 */
export const Link = (props: React.ComponentProps<typeof NextLink>) => (
  <NextLink prefetch={false} {...props} />
);
