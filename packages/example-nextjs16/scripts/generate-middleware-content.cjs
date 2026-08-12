const fs = require('fs');
const path = require('path');

const llmsTxtPath = path.join(__dirname, '..', 'public', 'llms.txt');
const content = fs.readFileSync(llmsTxtPath, 'utf-8');

const escapedContent = content
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

const proxyContent = `import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// AUTO-GENERATED from public/llms.txt by scripts/generate-middleware-content.cjs
// Do not edit by hand — edit public/llms.txt and re-run \`pnpm run generate-middleware\`
// (this is wired into the dev and build scripts).

// Kept identical in shape to src/lib/agent-request.ts on the sibling sites
// (asmyshlyaev177.dev, react-horizontal-scrolling-menu.dev,
// test-proxy-recorder.dev) so all of them negotiate alike. The token lists are
// cross-checked against github.com/apideck-libraries/agent-analytics, which
// classifies the same traffic for analytics rather than for serving.

// Always HTML, whatever else matches. Search indexes are here because a
// crawler and a reader must be served the same representation of a page —
// that is the line between a Markdown variant and cloaking. The link
// unfurlers are here for a duller reason: they scrape OpenGraph tags out of
// the markup, and Markdown has none, so every shared link would lose its
// preview card. Checked before the agent list, so \`ClaudeBot\` can't match on
// \`claude\` — and the bulk crawlers have to be named individually for that
// reason, even though an unlisted one already falls through to HTML by
// default: \`Claude-Web\` and \`anthropic-ai\` reach \`claude\` and \`anthropic\` in
// the agent list otherwise, which is the one thing this list exists to stop.
const HTML_ONLY =
  /googlebot|google-inspectiontool|google-extended|google-cloudvertexbot|bingbot|yandex|baiduspider|duckduckbot|applebot|petalbot|slurp|sogou|bravebot|searchbot|perplexitybot|youbot|linkupbot|claudebot|claude-web|anthropic-ai|gptbot|ccbot|bytespider|amazonbot|novaact|meta-external|meta-webindexer|facebookbot|ai2bot|diffbot|omgili|webzio|timpibot|pangubot|cohere|deepseek|grok|quillbot|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|telegrambot|whatsapp|embedly|iframely|pinterest|redditbot|mastodon|bluesky|skypeuripreview|vkshare|headlesschrome|lighthouse/i;

// Clients that are reading rather than rendering: coding agents, the
// assistants' user-initiated fetchers, and the plain HTTP clients an agent
// shells out to. Needed because most coding agents never send
// \`Accept: text/markdown\` — they arrive as a plain HTTP client and take
// whatever comes back, which is why the docs sites that measured this pair
// content negotiation with user-agent matching.
//
// The vendor names in the first half are mostly aspirational: the coding
// agents do not send them. What they send is the user-agent of whatever HTTP
// library they shell out to — Claude Code arrives as \`axios/\`, Cline as
// \`curl/\`, Cursor as \`got\`, Windsurf as \`colly\` — so the second half does the
// work. \`got\` and \`colly\` are bounded rather than plain substrings; unbounded
// they would match inside ordinary words. \`Electron/\` identifies the same
// class of client and is deliberately absent: an Electron window is a real
// renderer, and handing it Markdown would show someone a wall of text.
const READS_MARKDOWN =
  /claude|anthropic|codex|opencode|cursor|windsurf|devin|aider|chatgpt-user|perplexity-user|duckassistbot|mistralai-user|gemini-deep-research|manus-user|curl\\/|wget|httpie|python-requests|httpx|aiohttp|go-http-client|node-fetch|undici|axios|okhttp|libwww-perl|deno\\/|(?:^|[\\s(])got(?:\\/|[\\s(])|\\bcolly\\b/i;

export async function proxy(request: NextRequest) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('accept') || '';
  const userAgent = request.headers.get('user-agent') || '';

  // \`text/markdown\` named at all is decisive: no browser has ever sent it, so
  // anything that does is asking on purpose and its position in the list is
  // noise. \`text/plain\` is not — browsers do list it, so it only counts when
  // it outranks \`text/html\`. A trailing catch-all never counts.
  const acceptsMarkdown = acceptHeader.includes('text/markdown');
  const plainIndex = acceptHeader.indexOf('text/plain');
  const htmlIndex = acceptHeader.indexOf('text/html');
  const acceptsPlainText =
    plainIndex !== -1 && (htmlIndex === -1 || plainIndex < htmlIndex);

  const shouldServeMarkdown =
    acceptsMarkdown ||
    acceptsPlainText ||
    (!!userAgent && !HTML_ONLY.test(userAgent) && READS_MARKDOWN.test(userAgent));

  if (shouldServeMarkdown && url.pathname === '/') {
    // \`no-store\`, and it has to stay that way. Vercel's edge/ISR cache keys on
    // the URL path and does not honour \`Vary\` — and Next overwrites \`Vary\` on
    // dynamic App Router responses anyway, so it cannot be leaned on here.
    // Served as \`public, max-age=3600\`, the first agent to ask \`/\` for Markdown
    // after a deploy freezes this blob into the cache entry for the homepage,
    // and every human visitor after it gets a wall of plain text until the
    // entry expires. It is a 200 throughout, so nothing alerts. That happened
    // on a sibling site. Keeping this variant out of shared caches means only
    // the HTML can ever be cached under \`/\`; the body is a string constant, so
    // caching it saves nothing worth the risk.
    //
    // \`Content-Signal\` restates what /robots.txt already grants
    // (contentsignals.org), on the one response an agent is guaranteed to
    // read. A crawler that skipped robots.txt has no other way to learn them.
    return new NextResponse(LLMS_TXT_CONTENT, {
      status: 200,
      headers: {
        'Content-Type': acceptsMarkdown || !acceptsPlainText ? 'text/markdown; charset=utf-8' : 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'Content-Signal': 'search=yes, ai-train=yes, ai-input=yes',
        'Vary': 'Accept, User-Agent',
      },
    });
  }

  const sp = (request.url?.includes?.('_next') ? '' : request.url)?.split?.('?')?.[1] || '';

  const requestHeaders = new Headers(request.headers);

  if (url !== null) {
    requestHeaders.set('searchParams', sp);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ['/useUrlState/:path*', '/'],
};

const LLMS_TXT_CONTENT = \`${escapedContent}\`;
`;

const proxyPath = path.join(__dirname, '..', 'src', 'proxy.ts');
fs.writeFileSync(proxyPath, proxyContent, 'utf-8');

console.log('\u2705 proxy.ts regenerated from public/llms.txt');
