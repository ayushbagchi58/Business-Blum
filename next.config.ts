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
        hostname: "companieslogo.com",
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
    unoptimized: false,
  },
  // Optimize CSS handling for Tailwind v4
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
