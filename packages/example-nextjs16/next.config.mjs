import { execSync } from 'node:child_process';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '../..');

/**
 * The date the content last actually changed, from the HEAD commit.
 *
 * Resolved here, in plain Node at build time, and inlined into the bundle via
 * `env` below — see src/app/contentDate.ts. Reading git from app code is not an
 * option: `template.tsx` is shared with Edge-runtime routes, and the Edge
 * runtime has no `node:child_process`.
 *
 * Falls back to now when git is unavailable (source tarball, or a CI checkout
 * without a .git directory).
 */
function contentLastModified() {
  try {
    const iso = execSync('git log -1 --format=%cI', {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (iso) return new Date(iso).toISOString();
  } catch {
    // Not a git checkout — fall through.
  }
  return new Date().toISOString();
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Own tracing root so parallel Next builds don't share a build lock
  outputFileTracingRoot: ROOT,
  turbopack: {
    root: ROOT,
  },
  experimental: {
    externalDir: true,
  },
  transpilePackages: [
    'shared',
    'shared/components',
    'shared/components/Input',
    'shared/components/Input.tsx',
  ],
  reactStrictMode: true,
  basePath: '',
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 15,
  },
  env: {
    VERCEL: process.env.VERCEL,
    NEXT_PUBLIC_CONTENT_LAST_MODIFIED: contentLastModified(),
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async headers() {
    // Point AI clients at the Markdown reference from the response itself,
    // not only from the <link rel="alternate"> in <head>: a `Link:` header
    // survives a HEAD request and reaches clients that never parse markup.
    // Listed per documented page rather than globbed, so it can't end up
    // stapled to every image and hashed asset as well.
    const llmsTxtLink = {
      key: 'Link',
      value:
        '</llms.txt>; rel="alternate"; type="text/markdown"; title="LLM-friendly reference (llms.txt)"',
    };

    // Deliberately no `Vary: Accept` here, though `/` does have two
    // representations (src/proxy.ts answers it with llms.txt when the client
    // prefers Markdown). Next overwrites Vary with its own RSC values on
    // every dynamic App Router response — set from here or from middleware,
    // it is gone by the time the response leaves — so it would be a comment
    // that looks like a control. What actually keeps the two representations
    // apart is `Cache-Control: no-store` on the Markdown branch in
    // src/proxy.ts; see the note there before changing it.
    /**
     * Cache the demo pages on Vercel's CDN, keyed by the full URL.
     *
     * These routes render from the query string, so they are dynamic and ISR
     * is the wrong tool: an ISR entry is one render keyed on path alone, and
     * reusing it would serve one visitor's demo state to everyone after them.
     * CDN caching is different. Vercel derives the cache key from "the request
     * URL (query strings are ignored *for static files*)" — so for a dynamic
     * function response the query string *is* part of the key, and each
     * distinct state gets its own entry. Different state, different key: it
     * cannot serve the wrong one.
     *
     * The cost is cardinality, not correctness. Every keystroke is a new URL
     * and most will never be requested twice, so most of these entries are
     * written and never read. What pays for itself is the traffic that
     * concentrates: the bare `/`, which is the overwhelming majority of
     * visits, and whatever stateful URLs people actually share. Entries that
     * go unread are evicted. The downside is a miss, never a wrong answer.
     *
     * `s-maxage` is deliberately short and `stale-while-revalidate` long: the
     * render only changes when the deployment does, and a new deployment gets
     * its own cache key anyway.
     */
    const cdnCache = {
      key: 'Cache-Control',
      value: 'public, s-maxage=600, stale-while-revalidate=86400',
    };

    return [
      { source: '/', headers: [llmsTxtLink, cdnCache] },
      { source: '/react-router', headers: [llmsTxtLink, cdnCache] },
      { source: '/remix', headers: [llmsTxtLink, cdnCache] },
    ];
  },
};

export default nextConfig;
