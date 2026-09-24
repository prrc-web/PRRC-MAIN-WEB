import { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token, user }) => {
        // Use the local URL or env var
        const resetPasswordURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/verify?token=${token}`;
        return `
          <!doctype html>
          <html>
            <body>
              <h1>Hi ${user.email},</h1>
              <p>Welcome to the PRRC Portal. Please verify your account by clicking the link below:</p>
              <p>
                 <a href="${resetPasswordURL}">${resetPasswordURL}</a>
              </p>
            </body>
          </html>
        `;
      },
    },
  },
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  access: {
    read: () => true, // Start permissive, lock down later
    create: ({ req: { user } }) => Boolean(user?.roles?.includes('admin') || user?.roles?.includes('director')),
    update: ({ req: { user } }) => Boolean(user?.roles?.includes('admin') || user?.roles?.includes('director') || user?.id),
    delete: ({ req: { user } }) => Boolean(user?.roles?.includes('admin')),
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['researcher'],
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Director', value: 'director' },
        { label: 'Researcher', value: 'researcher' },
      ],
      access: {
        update: ({ req: { user } }) => Boolean(user?.roles?.includes('admin')), // Only admins can change roles
      },
    },
  ],
};
