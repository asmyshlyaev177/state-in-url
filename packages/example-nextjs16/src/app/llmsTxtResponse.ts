import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * The `.md` mirrors: `/index.md`, `/react-router.md`, `/remix.md`.
 *
 * All three serve the same document, and that is not a shortcut. This site is
 * one page repeated per router variant, and `public/llms.txt` is that page's
 * Markdown — it documents Next.js, React Router v6/v7 and Remix v2 in one
 * file, so an agent that lands on any of the three gets what it came for plus
 * the other two. Splitting it into three near-identical files would create
 * three things to keep in sync and answer no question better.
 *
 * Read from public/llms.txt so there is exactly one source: the file is also
 * served verbatim at /llms.txt, and src/proxy.ts gets its copy of the same
 * bytes through scripts/generate-middleware-content.cjs.
 *
 * Cacheable, unlike the negotiated `/`: these URLs have one representation
 * each, so there is no second variant behind them to hand to the wrong caller.
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
    },
  });
}
