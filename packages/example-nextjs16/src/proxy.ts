import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Who gets Markdown instead of HTML, and how the demo's server layout reads
 * the query string.
 *
 * Kept identical in shape to `src/lib/agent-request.ts` on the sibling sites
 * (asmyshlyaev177.dev, react-horizontal-scrolling-menu.dev,
 * test-proxy-recorder.dev) so all of them negotiate alike. Token lists are
 * cross-checked against github.com/apideck-libraries/agent-analytics.
 */

/**
 * Always HTML, whatever else matches. A crawler and a reader must be served
 * the same representation — that is the line between a Markdown variant and
 * cloaking — and the link unfurlers scrape OpenGraph tags, which Markdown has
 * none of. Checked before the reader list, so a bulk crawler carrying a token
 * from it (`ClaudeBot`, `Claude-Web`, `anthropic-ai`) is caught by name.
 */
const HTML_ONLY =
  /googlebot|google-inspectiontool|google-extended|google-cloudvertexbot|bingbot|yandex|baiduspider|duckduckbot|applebot|petalbot|slurp|sogou|bravebot|searchbot|perplexitybot|youbot|linkupbot|claudebot|claude-web|anthropic-ai|gptbot|ccbot|bytespider|amazonbot|novaact|meta-external|meta-webindexer|facebookbot|ai2bot|diffbot|omgili|webzio|timpibot|pangubot|cohere|deepseek|grok|quillbot|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|telegrambot|whatsapp|embedly|iframely|pinterest|redditbot|mastodon|bluesky|skypeuripreview|vkshare|headlesschrome|lighthouse/i;

/**
 * Clients reading rather than rendering. Coding agents rarely send
 * `Accept: text/markdown` and rarely send their own name — Claude Code arrives
 * as `axios/`, Cline as `curl/`, Cursor as `got`, Windsurf as `colly` — so the
 * HTTP-library signatures do the work. `got` and `colly` are bounded; unbounded
 * they match inside ordinary words. `Electron/` is deliberately absent: an
 * Electron window is a real renderer.
 */
const READS_MARKDOWN =
  /claude|anthropic|codex|opencode|cursor|windsurf|devin|aider|chatgpt-user|perplexity-user|duckassistbot|mistralai-user|gemini-deep-research|manus-user|curl\/|wget|httpie|python-requests|httpx|aiohttp|go-http-client|node-fetch|undici|axios|okhttp|libwww-perl|deno\/|(?:^|[\s(])got(?:\/|[\s(])|\bcolly\b/i;

/** The homepage's Markdown mirror: same bytes as /llms.txt, its own URL. */
const MIRROR = '/index.md';

/** What /robots.txt grants, restated on the response (contentsignals.org). */
const CONTENT_SIGNAL = 'search=yes, ai-train=yes, ai-input=yes';

function prefersMarkdown(request: NextRequest) {
  const accept = request.headers.get('accept') || '';

  // `text/markdown` named at all is decisive — no browser sends it. `text/plain`
  // only counts when it outranks `text/html`, which browsers do list.
  if (accept.includes('text/markdown')) return true;

  const plain = accept.indexOf('text/plain');
  const html = accept.indexOf('text/html');
  if (plain !== -1 && (html === -1 || plain < html)) return true;

  const userAgent = request.headers.get('user-agent') || '';
  if (!userAgent || HTML_ONLY.test(userAgent)) return false;
  return READS_MARKDOWN.test(userAgent);
}

export async function proxy(request: NextRequest) {
  const url = new URL(request.url);

  if (url.pathname === '/' && prefersMarkdown(request)) {
    /**
     * A redirect, never the document. Vercel's edge cache keys on the URL and
     * ignores `Vary`, and Next overwrites `Vary` on App Router responses — so a
     * Markdown body under `/` is one cacheable response away from being served
     * to every reader, at 200, with nothing to alert on. Sending agents to a
     * URL with one representation leaves `/` holding only HTML and lets the
     * document cache normally.
     *
     * 307, not 308: a permanent redirect is heuristically cacheable under RFC
     * 9111, and one held under `/` would send readers to the mirror.
     *
     * A client that asked for `text/plain` lands on `text/markdown`. Same bytes.
     */
    return NextResponse.redirect(new URL(MIRROR, url), {
      status: 307,
      headers: {
        'Cache-Control': 'no-store',
        // Also on the mirror; stated here for a client that does not follow.
        'Content-Signal': CONTENT_SIGNAL,
      },
    });
  }

  // Server layouts are not given `searchParams`. This is the workaround the
  // library's own docs quote, exercised by `(tests)/useUrlState/layout`.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('searchParams', url.search.slice(1));

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/useUrlState/:path*', '/'],
};
