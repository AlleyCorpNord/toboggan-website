import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  /* config options here */
  // i18n: {
  //   locales: ['en', 'fr', 'es'],
  //   defaultLocale: 'en',
  // },
};

export default nextConfig;
