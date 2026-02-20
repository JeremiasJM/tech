import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/tech',
  assetPrefix: '/tech/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
