import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    const newConfig = {
      ...config,
    };
    if (newConfig.resolve) {
      newConfig.resolve.fallback = {
        ...newConfig.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return newConfig;
  },
  transpilePackages: ['shared', 'shared/components', 'shared/components/Input', 'shared/components/Input.tsx', 'shared/components/Input', 'shared/components/Input.tsx'],
  reactStrictMode: true,

  basePath: '',
  experimental: {
    externalDir: true,
    // ppr: 'incremental',
    // serverComponentsExternalPackages: ["state-in-url", "urlstate"],
    // optimizePackageImports: {
    //   'shiki'
    // }
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
    // ignoreBuildErrors: true,
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 15,
    formats: ['image/webp']
  },
  env: {
    VERCEL: process.env.VERCEL,
  },
};

export default nextConfig;
