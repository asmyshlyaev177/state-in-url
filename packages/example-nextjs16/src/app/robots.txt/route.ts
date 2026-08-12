import { siteUrl } from '../domain';

/**
 * Routes that exist only as Playwright fixtures. They render deliberately
 * broken or edge-case usage, so they have to stay out of every index —
 * the AI crawlers' included — or they get quoted back as the documented API.
 *
 * Prefixes, with no trailing slash, and that matters. robots.txt matches
 * literal prefixes (RFC 9309 §2.2.2) and this app runs on Next's default
 * `trailingSlash: false`, so `/test-ssr/` never matches the `/test-ssr` the
 * site actually serves. Every entry here used to carry a slash, which meant
 * the list blocked nothing at all. Do not put them back.
 *
 * Six prefixes cover all twelve fixture routes: `/test-ssr` also catches `-sp`
 * and `-usp`, `/test-use` catches `-client`, `-history` and `-router`, and
 * `/useUrlState` also catches `/1` and `/2`. None of them is a prefix of a
 * documented route, so nothing real gets caught by accident.
 */
const testFixtures = [
  '/useUrlEncode',
  '/test-ssr',
  '/test-use',
  '/useSharedState',
  '/useUrlState',
  '/useHook-race-condition',
];

const documented = ['/', '/react-router', '/remix'];

/**
 * A route handler rather than the `robots.ts` metadata convention, because
 * `MetadataRoute.Robots` is a closed shape — userAgent, allow, disallow, host,
 * sitemap — with nowhere to put the `Content-Signal` line. Emitting the file
 * as text is the only way to say it.
 *
 * The AI crawlers previously got one named group each. RFC 9309 §2.2.1 has a
 * crawler obey only its most specific matching group and ignore every other,
 * so those groups would have hidden `Content-Signal` from precisely the
 * crawlers it addresses. They duplicated the `*` group's rules verbatim, so
 * folding them in changes nothing about what is crawlable.
 */
const body = `\
# Content Signals — https://contentsignals.org/
#   search   = indexing this site and showing links plus short excerpts
#   ai-train = training or fine-tuning a model
#   ai-input = grounding a generative answer at request time (RAG)
# All three are granted. This is library documentation, and an assistant
# answering "how do I type a search-params object in Next.js" with a correct
# state-in-url example is the best distribution this project has.
#
# Allow/Disallow decide what may be fetched; the signals decide what may be
# done with it. The fixture routes below are excluded from both: they render
# deliberately broken usage and must never be quoted as the documented API.
User-Agent: *
Content-Signal: search=yes, ai-train=yes, ai-input=yes
${documented.map((path) => `Allow: ${path}`).join('\n')}
${testFixtures.map((path) => `Disallow: ${path}`).join('\n')}

Host: ${siteUrl}
Sitemap: ${siteUrl}/sitemap.xml
`;

// Built once at `next build`, like the metadata route it replaces. Route
// handlers are dynamic by default since Next 15, and robots.txt has no
// per-request input — `siteUrl` is resolved from the build environment.
export const dynamic = 'force-static';

export function GET() {
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
