const { buildConfig } = require('payload');
const { mongooseAdapter } = require('@payloadcms/db-mongodb');
const { slateEditor } = require('@payloadcms/richtext-slate');

module.exports = buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'displayName',
          type: 'text',
        },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticURL: '/media',
        staticDir: 'public/media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'center'
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'center'
          },
          {
            name: 'tablet',
            width: 1024,
            height: null,
            position: 'center'
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'researchers',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'bio',
          type: 'richText',
        },
        {
          name: 'profilePicture',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'contact',
          type: 'group',
          fields: [
            {
              name: 'email',
              type: 'text',
              required: true,
            },
            {
              name: 'phone',
              type: 'text',
            },
          ],
        },
        {
          name: 'resume',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/prrc',
  }),
});