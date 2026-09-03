import { execSync } from 'node:child_process';
import path from 'path';

// The one locale table, shared with the README tooling and with src/app/i18n.
import { LOCALES } from '../../scripts/i18n/locales.mjs';

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
    // A `Link:` header survives a HEAD request and reaches clients that never
    // parse markup. Per documented page, not globbed, so it can't end up on
    // every image and hashed asset too.
    const llmsTxtLink = {
      key: 'Link',
      value:
        '</llms.txt>; rel="alternate"; type="text/markdown"; title="LLM-friendly reference (llms.txt)"',
    };

    // No `Vary: Accept`, though `/` has two representations (src/proxy.ts
    // answers it with llms.txt for a Markdown client). Next overwrites Vary
    // with its own RSC values on every dynamic response, so it would look like
    // a control and be none. `Cache-Control: no-store` on the Markdown branch
    // is what actually keeps the two apart — see the note in src/proxy.ts.

    // Demo pages only: they render from the query string, and Vercel keys a
    // dynamic function response on the full URL, so each distinct state gets
    // its own entry and none can serve another's. Most entries are written
    // once and evicted unread; what pays is the bare `/` and shared stateful
    // links. Short `s-maxage` because a new deployment gets its own key anyway.
    const cdnCache = {
      key: 'Cache-Control',
      value: 'public, s-maxage=600, stale-while-revalidate=86400',
    };

    // The one above never survives on Vercel: a dynamic response carries
    // Next's own `no-store` and that is what the Edge Network serves (`next
    // start` returns the configured value, the deployment does not). This
    // header is read by the Edge Network, preferred over `Cache-Control`, and
    // never forwarded — so the browser still gets no-store, which is right for
    // a page rendered from the query string.
    const vercelCdnCache = {
      key: 'Vercel-CDN-Cache-Control',
      value: 'max-age=600, stale-while-revalidate=86400',
    };

    // Built from the locale table, not listed: twenty-seven sources is past
    // where a hand-kept list stays correct, and a missing page silently loses
    // its `Link:` header.
    //
    // `cdnCache` must not reach `/vs/nuqs`. That page is prerendered (`○` in
    // the build output) so the header survives, and Vercel then serves the
    // entry with an `age` far past `s-maxage=600` — the client never gets a
    // response it considers fresh and revalidates on a loop. Measured on
    // production 2026-09-03: ~26 requests a second from one idle tab. Its
    // layout's `revalidate = 604800` already caches it for a week.
    const demoPages = ['', '/react-router', '/remix'];
    const pages = [...demoPages, '/vs/nuqs'];
    const prefixes = ['', ...LOCALES.map((locale) => `/${locale.dir}`)];

    return prefixes.flatMap((prefix) =>
      pages.map((page) => {
        const headers = [llmsTxtLink];
        if (demoPages.includes(page)) headers.push(cdnCache);
        // English `/` alone: the one URL whose cache entry is certain to be
        // read again. The others can have it once traffic justifies it.
        if (prefix === '' && page === '') headers.push(vercelCdnCache);
        return { source: `${prefix}${page}` || '/', headers };
      }),
    );
  },
};

export default nextConfig;
