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
  // images: {
  //   unoptimized: true
  // }
};

export default nextConfig;
