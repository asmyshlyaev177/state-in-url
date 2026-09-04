import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * The `.md` mirrors: `/index.md`, `/react-router.md`, `/remix.md`, `/astro.md`.
 *
 * All four serve the same document, and that is not a shortcut. This site is
 * one page repeated per router variant, and `public/llms.txt` is that page's
 * Markdown — it documents Next.js, React Router v6/v7, Remix v2 and Astro in one
 * file, so an agent that lands on any of the four gets what it came for plus
 * the other three. Splitting it into four near-identical files would create
 * four things to keep in sync and answer no question better.
 *
 * Read from public/llms.txt so there is one source: the same file is served
 * verbatim at /llms.txt, and `/` redirects agents here rather than answering
 * with a second copy of the bytes (src/proxy.ts).
 *
 * Cacheable, unlike `/`: one representation each, so nothing behind these URLs
 * can be handed to the wrong caller. That is why the negotiation sends agents
 * to a URL and not a body.
 */
export async function llmsTxtResponse() {
  const source = await readFile(
    path.join(process.cwd(), 'public', 'llms.txt'),
    'utf-8',
  );

  return new Response(source, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      // What /robots.txt grants (contentsignals.org), on the one document an
      // agent redirected from `/` is sure to read.
      'Content-Signal': 'search=yes, ai-train=yes, ai-input=yes',
    },
  });
}
