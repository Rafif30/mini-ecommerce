import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: "dist",
  trailingSlash: true,
  poweredByHeader: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
