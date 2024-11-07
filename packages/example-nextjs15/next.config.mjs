/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    const newConfig = {
      ...config,
    };
    // newConfig.resolve.webpack5 = true;
    return newConfig;
  },
  // // Automatically bundle external packages in the Pages Router:
  bundlePagesRouterDependencies: true,
  // // Opt specific packages out of bundling for both App and Pages Router:
  // serverExternalPackages: ['shared'],
  experimental: {
    reactCompiler: true,
    externalDir: true,
    // ppr: 'incremental',
    // after: true,
  },
  transpilePackages: [
    'shared',
    'shared/components',
    'shared/components/Input',
    'shared/components/Input.tsx',
    'shared/components/Input',
    'shared/components/Input.tsx',
  ],
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 15,
  },
  env: {
    VERCEL: process.env.VERCEL,
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
  },
};

export default nextConfig;