import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: false,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;

