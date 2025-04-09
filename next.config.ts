import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  // autres options ici si tu en as
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
