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
  },
  env: {
    VERCEL: process.env.VERCEL,
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
  }
};

export default nextConfig;
