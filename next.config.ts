import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Optimize CSS handling for Tailwind v4
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
