import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'center',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'center',
      },
      {
        name: 'tablet',
        width: 1024,
        position: 'center',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true;
      return {
        owner: {
          equals: user?.id,
        },
      };
    },
    delete: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true;
      return {
        owner: {
          equals: user?.id,
        },
      };
    },
  },
  fields: [
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ req: { user } }: { req: { user: { id: string } } }) =>
        user?.id,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'alt',
      type: 'text',
    },
  ],
};
