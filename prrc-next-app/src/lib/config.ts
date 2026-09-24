// Centralized runtime config for public frontend paths and router settings.
// This file is intended to avoid hardcoded paths across the codebase.
export const ADMIN_ROUTES = {
  // Path used for frontend admin UI (pages router).
  FRONTEND_ADMIN:
    process.env.NEXT_PUBLIC_FRONTEND_ADMIN_PATH || '/AdministrationPage',
  // Path used for the Payload admin/backend panel. Standardized on Payload's default route (/admin).
  BACKEND_ADMIN: process.env.NEXT_PUBLIC_BACKEND_ADMIN_PATH || '/admin',
  // Login route on frontend
  FRONTEND_ADMIN_LOGIN:
    process.env.NEXT_PUBLIC_FRONTEND_ADMIN_LOGIN || '/admin/login',
};

export const ROUTER = {
  // Use app router or pages router: 'app' | 'pages'. Defaults to app if not provided.
  MODE: (process.env.NEXT_PUBLIC_ROUTER_MODE as 'app' | 'pages') || 'app',
};

export default { ADMIN_ROUTES, ROUTER };
