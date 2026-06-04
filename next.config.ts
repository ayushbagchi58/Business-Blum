import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },

    ],
  },
  // Optimize CSS handling for Tailwind v4
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
