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
};

export default nextConfig;
