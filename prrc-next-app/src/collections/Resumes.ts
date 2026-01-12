import type { CollectionConfig } from 'payload';

export const Resumes: CollectionConfig = {
  slug: 'resumes',
  admin: {
    useAsTitle: 'title',
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
      name: 'resumeFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Resume PDF',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Job Title',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'experience',
      type: 'array',
      fields: [
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          required: true,
        },
        {
          name: 'startDate',
          type: 'date',
          required: true,
        },
        {
          name: 'endDate',
          type: 'date',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      fields: [
        {
          name: 'institution',
          type: 'text',
          required: true,
        },
        {
          name: 'degree',
          type: 'text',
          required: true,
        },
        {
          name: 'year',
          type: 'number',
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      fields: [
        {
          name: 'skill',
          type: 'text',
        },
      ],
    },
  ],
};
