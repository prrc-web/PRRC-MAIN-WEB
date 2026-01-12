import { CollectionConfig, Access } from 'payload';

const isAdminOrDirector: Access = ({ req: { user } }) => 
  Boolean(user?.roles?.includes('admin') || user?.roles?.includes('director'));

const isAdminOrOwner: Access = ({ req: { user } }) => {
  if (!user) return false;
  if (user.roles?.includes('admin') || user.roles?.includes('director')) return true;
  return { relatedUser: { equals: user.id } };
};

export const Staff: CollectionConfig = {
  slug: 'staff',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'position'],
    group: 'Lab Content',
  },
  access: {
    read: () => true,
    create: isAdminOrDirector,
    update: isAdminOrOwner,
    delete: isAdminOrDirector,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'select',
          required: true,
          defaultValue: 'research',
          options: [
            { label: 'Administration (Directors)', value: 'administration' },
            { label: 'Research Staff', value: 'research' },
            { label: 'Outreach & Development', value: 'outreach' },
            { label: 'Support & Operations', value: 'support' },
          ],
        },
        {
          name: 'priority',
          type: 'number',
          defaultValue: 10,
          label: 'Display Order (1=Top)',
          admin: { description: 'Lower numbers appear first' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'title', type: 'text', width: '20%' },
        { name: 'position', type: 'text', width: '80%' },
      ],
    },
    {
      name: 'headshot',
      type: 'upload',
      relationTo: 'media', 
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'email', type: 'email', required: true },
            { name: 'phone', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
                name: 'platform',
                type: 'select',
                options: [
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Personal Website', value: 'website' },
                    { label: 'ResearchGate', value: 'researchgate' },
                ]
            },
            { name: 'url', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'relatedUser',
      type: 'relationship',
      relationTo: 'users',
      required: false, // Optional linkage
      unique: true,
      admin: { position: 'sidebar' },
    },
  ],
};