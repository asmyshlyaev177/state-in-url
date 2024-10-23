import { type NextConfig } from 'next'

const nextConfig = {
  webpack: (config: NextConfig) => {
    const newConfig = {
      ...config,
    } as NextConfig;
    newConfig.resolve.webpack5 = true;
    return newConfig;
  },
  transpilePackages: ['shared', 'shared/components', 'shared/components/Input', 'shared/components/Input.tsx', 'shared/components/Input', 'shared/components/Input.tsx'],
  reactStrictMode: true,

  basePath: '',
  experimental: {
    externalDir: true,
    // ppr: true,
    // serverComponentsExternalPackages: ["state-in-url", "urlstate"],
    // optimizePackageImports: {
    //   'shiki'
    // }
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
    // ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 15,
    formats: ['image/webp', 'image/png']
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
