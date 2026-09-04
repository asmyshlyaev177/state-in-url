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

    // Demo pages only. They render from the query string, and Vercel keys a
    // dynamic response on the full URL, so each state gets its own entry and
    // none can serve another's. Short `s-maxage` because a deployment gets its
    // own key anyway.
    const cdnCache = {
      key: 'Cache-Control',
      value: 'public, s-maxage=600, stale-while-revalidate=86400',
    };

    // The one above does not reach a deployment: a dynamic response carries
    // Next's own `no-store` and that is what the Edge Network serves, though
    // `next start` returns the configured value. This one the Edge Network
    // reads, prefers over `Cache-Control`, and never forwards — so the browser
    // still gets no-store, right for a page rendered from the query string.
    const vercelCdnCache = {
      key: 'Vercel-CDN-Cache-Control',
      value: 'max-age=600, stale-while-revalidate=86400',
    };

    // The AI discovery set (ai-visibility.org.uk) plus llms.txt, robots.txt and
    // the sitemap. Served from `public/` or as `force-static` routes, neither
    // of which sets a `Cache-Control`, so Vercel's `max-age=0,
    // must-revalidate` applied and every fetch revalidated. They change only
    // on deploy, and a deploy invalidates the CDN.
    //
    // The `age > s-maxage` trap below does not reach these: nothing prefetches
    // a text file, so a stale-marked response costs one conditional GET.
    const aiFiles = [
      '/llms.txt',
      '/ai.txt',
      '/ai.json',
      '/identity.json',
      '/brand.txt',
      '/faq-ai.txt',
      '/developer-ai.txt',
      '/robots-ai.txt',
      '/ai-visibility-verify.txt',
      '/robots.txt',
      '/sitemap.xml',
    ];
    const aiFileCache = {
      key: 'Cache-Control',
      value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    };

    // Built from the locale table, not listed: a missing page silently loses
    // its `Link:` header, and 27 sources is past where a hand-kept list holds.
    //
    // `cdnCache` must not reach `/vs/nuqs`. It is prerendered (`○` in the build
    // output) so the header survives there, and Vercel then serves the entry at
    // an `age` far past `s-maxage=600` — the client never sees a fresh response
    // and `<Link>` prefetch revalidates on a loop, measured at ~26 requests a
    // second from one idle tab. Its layout's `revalidate` caches it for a week.
    const demoPages = ['', '/react-router', '/remix', '/astro'];
    const pages = [...demoPages, '/vs/nuqs'];
    const prefixes = ['', ...LOCALES.map((locale) => `/${locale.dir}`)];

    return [
      ...prefixes.flatMap((prefix) =>
        pages.map((page) => {
          const headers = [llmsTxtLink];
          if (demoPages.includes(page)) headers.push(cdnCache);
          // English `/` alone: the one URL whose cache entry is certain to be
          // read again. The others can have it once traffic justifies it.
          if (prefix === '' && page === '') headers.push(vercelCdnCache);
          return { source: `${prefix}${page}` || '/', headers };
        }),
      ),
      ...aiFiles.map((source) => ({ source, headers: [aiFileCache] })),
    ];
  },
};

export default nextConfig;
