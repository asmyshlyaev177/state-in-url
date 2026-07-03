import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '../..');

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
