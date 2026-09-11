/**
 * Minimal Payload Config for Frontend-Only Mode
 * Used when MONGODB_URI is not set — skips all collection loading
 *
 * Run with: PAYLOAD_CONFIG_PATH=src/payload.config.minimal.ts npm run dev
 */
import { buildConfig } from 'payload';

export default buildConfig({
  admin: {
    user: 'users',
  },
  routes: {
    api: '/api',
  },
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  collections: [],
  editor: {
    slate: {},
  },
});
