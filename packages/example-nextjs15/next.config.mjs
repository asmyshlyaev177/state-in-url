/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // webpack: (config) => {
  //   const newConfig = {
  //     ...config,
  //   };
  //   // newConfig.resolve.webpack5 = true;
  //   return newConfig;
  // },
  // // Opt specific packages out of bundling for both App and Pages Router:
  // serverExternalPackages: ['shared'],
  experimental: {
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
