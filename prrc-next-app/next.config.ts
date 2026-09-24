import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['payload'],
  // TEMPORARILY DISABLED to test cold-start deadlock hypothesis (circular @payload-config resolution)
  // Payload's `withPayload()` plugin normally wires up the `@payload-config`
  // webpack alias. This config is intentionally bare (frontend-only mode), so
  // map it manually; otherwise `import config from '@payload-config'` fails to
  // resolve during `next build`. Points at the minimal config used for dev:frontend.
  /*
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@payload-config': path.resolve(__dirname, 'src/payload.config.minimal.ts'),
    };
    return config;
  },
  */
};

export default nextConfig;
