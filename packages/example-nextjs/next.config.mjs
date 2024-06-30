/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.DEMO ? '/state-in-url' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
