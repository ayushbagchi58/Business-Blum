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
  // Permanent redirects for email link compatibility
  async redirects() {
    return [
      // Redirect old reset password URL format to new format with query parameter
      {
        source: "/account/reset_password/:token",
        destination: "/reset-password?token=:token",
        permanent: true,
      },
      // Redirect old create password URL format to new format with query parameter
      {
        source: "/account/create_password/:token",
        destination: "/create-password?token=:token",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
