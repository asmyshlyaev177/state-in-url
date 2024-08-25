/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const newConfig = {
      ...config,
    }
    newConfig.module.rules.push({
      test: /\.html$/,
      type: 'asset/source'
    })
    return newConfig
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  experimental: {
    // asyncWebAssembly: true,
    // importAsync: true,
    outputFileTracingIncludes: {
      "**": ["./node_modules/shiki/**/*"],
    },
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 15
  }
};

export default nextConfig;
