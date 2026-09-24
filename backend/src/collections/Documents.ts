import type { CollectionConfig, Where } from 'payload';

export const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'updatedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true;

      // Preserve original behavior: anonymous users still see published docs.
      // An explicitly-typed Where[] keeps each condition's keys concrete, so the
      // optional-undefined properties that trip Payload's strict Where typing
      // under TS strict mode never appear (the bare `user?.id` form did).
      const or: Where[] = [
        {
          status: {
            equals: 'published',
          },
        },
      ];
      if (user) {
        or.push({ owner: { equals: user.id } });
      }

      return { or };
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true;
      // Must be logged in to own/update a document.
      if (!user) return false;

      return {
        owner: {
          equals: user.id,
        },
      };
    },
    delete: ({ req: { user } }) => Boolean(user?.roles?.includes('admin')),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'abstract',
      type: 'textarea',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ req: { user } }: { req: { user: { id: string } } }) =>
        user?.id,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Pending Review',
          value: 'pending_review',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      access: {
        // Only admins can publish
        update: ({ req: { user }, data }) => {
          if (user?.roles?.includes('admin')) return true;
          // Researchers can only set to draft or pending_review
          return data?.status === 'draft' || data?.status === 'pending_review';
        },
      },
    },
  ],
};
