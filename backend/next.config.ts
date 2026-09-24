import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

// Backend-only Next app: serves Payload's admin panel (/admin) + API (/api/*).
// `withPayload()` auto-discovers ./payload.config.ts and wires up the
// @payload-config alias, route handlers, and admin UI.
const nextConfig: NextConfig = withPayload({
  reactStrictMode: true,
  // Let Payload (and its db/editor packages) be resolved at runtime, not bundled.
  serverExternalPackages: [
    'payload',
    '@payloadcms/db-mongodb',
    '@payloadcms/richtext-slate',
  ],
});

export default nextConfig;
