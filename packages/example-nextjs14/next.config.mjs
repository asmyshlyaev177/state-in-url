/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    const newConfig = {
      ...config,
    };
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
    externalDir: true,
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
  },
  env: {
    VERCEL: process.env.VERCEL,
  },
};

export default nextConfig;
