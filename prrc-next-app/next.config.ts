import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Next.js doesn't infer /Users/punkdad/ from the
  // stray home-dir package-lock.json (which has no packages) and then try to
  // watch/trace across the entire home tree at startup — that inference is what
  // leaves `next dev` idle at ~0% CPU before it ever binds the port.
  outputFileTracingRoot: __dirname,
  serverExternalPackages: ['payload'],
  // @payload-config alias (frontend-only mode): map it to the minimal config so
  // `import config from '@payload-config'` resolves during dev/build. Without this,
  // pages like app/frontend/staff/page.tsx hang webpack on unresolved module resolution.
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@payload-config': path.resolve(__dirname, 'src/payload.config.minimal.ts'),
    };
    return config;
  },
};

export default nextConfig;
