import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { Users } from './src/collections/Users/Users';
import { Media } from './src/collections/Media';
import { Resumes } from './src/collections/Resumes';
import { Events } from './src/collections/Events';
import { Documents } from './src/collections/Documents';
import { Staff } from './src/collections/Staff';

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
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/prrc',
  }),
});
