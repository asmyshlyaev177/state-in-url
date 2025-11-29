import { type NextConfig } from 'next'

const nextConfig = {
  webpack: (config: NextConfig) => {
    const newConfig = {
      ...config,
    } as NextConfig;
    newConfig.resolve.webpack5 = true;
    newConfig.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }
    return newConfig;
  },
  transpilePackages: ['shared', 'shared/components', 'shared/components/Input', 'shared/components/Input.tsx', 'shared/components/Input', 'shared/components/Input.tsx'],
  reactStrictMode: true,

  basePath: '',
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
    polyfillsOptimization: true,
    externalDir: true,
    ppr: true,
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
  },
};

export default nextConfig;
