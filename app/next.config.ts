import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-src 'self' https://intlayer.org https://*.intlayer.org;"
  }
];

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => {
    return  [
      {
        source: '/(.*)', // Apply to all paths
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: *;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: *;
              style-src 'self' 'unsafe-inline' blob: *;
              img-src 'self' data: blob: *;
              font-src 'self' data: *;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              upgrade-insecure-requests;
            `
            .replace(/\s{2,}/g, ' ') // Remove extra whitespace
            .trim(),
          },
        ],
      },
    ];
  },
};

export default withIntlayer(nextConfig);
