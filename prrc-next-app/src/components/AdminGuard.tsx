import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../lib/payload-api';
import { ADMIN_ROUTES } from '@/lib/config';

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then((data: any) => {
        const roles = data?.user?.roles || [];
        if (
          roles.includes('admin') ||
          roles.includes('editor') ||
          roles.includes('researcher')
        ) {
          setOk(true);
        } else {
          window.location.href = ADMIN_ROUTES.FRONTEND_ADMIN_LOGIN;
        }
      })
      .catch(() => {
        window.location.href = ADMIN_ROUTES.FRONTEND_ADMIN_LOGIN;
      });
  }, []);

  if (!ok) return null;
  return <>{children}</>;
}
