import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
// NOTICE: Removed "./src/" from all these imports
import { Users } from './collections/Users/Users.ts';
import { Media } from './collections/Media';
import { Resumes } from './collections/Resumes';
import { Events } from './collections/Events';
import { Documents } from './collections/Documents';
import { Staff } from './collections/Staff';

// Get MongoDB URI - if not set, run in frontend-only mode
const MONGODB_URI = process.env.MONGODB_URI;

export default buildConfig({
  admin: {
    user: 'users',
  },
  routes: {
    api: '/api',
  },
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  collections: [Users, Media, Resumes, Events, Documents, Staff],
  editor: slateEditor({}),
  // Only initialize database if MONGODB_URI is explicitly set
  ...(MONGODB_URI && {
    db: mongooseAdapter({
      url: MONGODB_URI,
    }),
  }),
});
