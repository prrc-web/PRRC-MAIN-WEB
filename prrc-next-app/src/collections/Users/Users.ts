import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['researcher'],
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Researcher',
          value: 'researcher',
        },
      ],
      access: {
        // Only admins can update roles
        update: ({ req: { user } }) => {
          return Boolean(user?.roles?.includes('admin'));
        },
      },
    },
    {
      name: 'name',
      type: 'text',
    },
  ],
};
