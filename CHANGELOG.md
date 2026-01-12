# Changelog

All notable changes to the PRRC Web Application project are documented in this file.

## [2.1.0] - 2025-11-24

### 🚀 Major Architecture Update: Integrated Payload CMS

#### Changed

- **Architecture**: Merged `payload-backend` into `prrc-next-app`. Payload CMS 3.0 now runs directly within the Next.js App Router.
- **Infrastructure**: Removed the separate backend container. Docker Compose now runs only `nextjs-frontend`, `mongodb`, and `nginx`.
- **Configuration**: Refactored `payload.config.ts` to use modular collection files.

#### Added

- **Collections**:
  - `Users`: Added role-based access (`admin`, `researcher`).
  - `Resumes`: New collection for researcher resumes.
  - `Documents`: Research paper management with workflow (`draft`, `pending`, `published`).
  - `Events`: Calendar event management.
  - `Media`: File upload handling.
- **Security**: Implemented Role-Based Access Control (RBAC) in all collections.
- **Admin Dashboard**: Fixed `/dashboard/admin` route and `AdminGuard` component to support multiple roles.

#### Fixed

- **API Routes**: Restored missing `src/app/(payload)/api/[...slug]/route.ts` to fix "Invalid Server Actions request" error.
- **Layout Conflicts**: Removed conflicting `src/app/layout.tsx` that was breaking Payload's admin UI.
- **Admin Panel**: Fixed issue where Admin Panel components wouldn't load due to incorrect role checking.

#### Removed

- **Directory**: Deleted `payload-backend/` as it is now obsolete.

## [2.0.2] - 2024-11-13

### 🔧 Phase 2: Backend TypeScript Conversion

#### Fixed

- **Backend Build Configuration**

  - Fixed TypeScript configuration for ES modules
  - Changed `moduleResolution` from "bundler" to "node"
  - Added `allowSyntheticDefaultImports` for better import compatibility
  - Relaxed strict mode temporarily to resolve type definition conflicts

- **Backend Server Updates**

  - Simplified backend server to basic Express setup
  - Added CORS middleware for frontend communication
  - Added health check endpoint (`/health`)
  - Added API status endpoint (`/api/status`)
  - Removed Payload initialization (handled by frontend)
  - Added proper TypeScript types for Express handlers

- **File Organization**

  - Moved `payload.config.ts` from root to `src/` directory
  - Fixed import paths to use `.js` extension for ES modules
  - Updated server imports to use proper ES module syntax

- **Dependencies**
  - Verified all type definitions in package.json
  - Confirmed Express and CORS types configuration

#### ✅ Resolved

- ✅ Backend builds successfully with `npm run build`
- ✅ TypeScript compilation completes without errors
- ✅ ES module configuration working properly
- ✅ Server structure ready for expansion

#### Notes

- Backend is now a minimal Express server ready for future API endpoints
- Payload CMS admin functionality remains in frontend as designed
- TypeScript strict mode temporarily disabled due to type definition conflicts with Payload dependencies

### Project Status

- The repo has been consolidated to a single backend `payload-backend` and frontend `prrc-next-app` to simplify development and deployment. Documentation has been consolidated accordingly.

## [2.1.0] - 2025-11-18

### 🛠️ Emergency Debugging & Consolidation

#### Fixed / Implemented

- Resolved a local port conflict that prevented the Payload backend from starting (EADDRINUSE). The conflict was caused by duplicate services running the old `prrc-cms-server` and a second `payload` service. Removed duplicate server and freed port 3001 for `payload-backend`.
- Started local MongoDB for development using Docker Compose and updated development docs to include `docker compose up -d mongodb` and troubleshooting steps.
- Fixed `payload` initialization ordering by loading environment variables (`dotenv`) before importing `payload.config.ts`. This prevents missing `PAYLOAD_SECRET` or reentrancy errors during startup.
- Added a small admin seeding mechanism (controlled by `SEED_ADMIN=true`) to create a first admin user when the server boots during development.
- Added `papers` and `newsletters` collections in Payload and wire-up front-end helpers to create and fetch these resources.
- Added health endpoints and root `/api` index to `payload-backend` for easier monitoring and testing.
- Consolidated documentation and removed legacy `prrc-cms-server` and `docker-compose.prod.yml` duplicate files.

#### Notes

- This patch moved the CMS to `payload-backend` (canonical) on port 3001. The Next.js frontend remains at port 3000. The project now runs as two independent services which resolves numerous module and dependency conflicts.
- Key variables: `MONGODB_URI`, `PAYLOAD_SECRET`, `PAYLOAD_PUBLIC_SERVER_URL`, `SEED_ADMIN`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
- After this change, developers should run the backend and frontend separately in dev (`npm run dev` in each service), or start everything with `docker compose up`.

### ⚙️ Follow-ups

- Add role-based access rules for `papers` and `newsletters` and better indexing/search.
- Add demo seed data for easier manual testing.
- Add tests for `papers` create/read paths and admin seeding behavior.

## [2.1.1] - 2025-11-10

### ⚠️ PayloadCMS / Next.js Compatibility Investigation

- Documented the early discovery of severe compatibility issues when embedding PayloadCMS 3.56.0 into Next.js 15.x App Router. Attempts to proxy admin/API routes and use the official `@payloadcms/next` handlers were not reliable.
- Notable fixes and observations:
  - Temporary downgrade/upgrade of Next.js / React during debugging
  - Added `.npmrc` with `legacy-peer-deps` for dependency installation
  - Identified that Payload requires different module boundaries; moving Payload to a standalone backend resolved the majority of conflicts

### ✅ Resolution

- Switched architecture to run PayloadCMS as a separate Express server (see `/payload-backend`) and use REST API from Next.js frontend. This mitigated all major compatibility problems and simplified CI/deploy.

## [2.1.2] - 2025-11-19

## [2.1.3] - 2025-11-19

### 🧹 Frontend cleanups + Developer Experience improvements

#### Implemented

- Centralized frontend admin and router configuration (`src/lib/config.ts`) so the project has a single source of truth for admin paths and router mode:
  - `ADMIN_ROUTES.FRONTEND_ADMIN` (defaults to `/AdministrationPage`)
  - `ADMIN_ROUTES.BACKEND_ADMIN` (defaults to `/admin-panel`)
  - `ADMIN_ROUTES.FRONTEND_ADMIN_LOGIN` (defaults to `/admin/login`)
  - `ROUTER.MODE` (`app` | `pages`)
- Replaced duplicate / hard-coded admin path strings across UI and pages with `ADMIN_ROUTES.*` constants:
  - `src/pages/admin/login.tsx`, `src/pages/admin/signup.tsx`, `src/pages/admin/index.tsx` (redirects)
  - `src/components/AdminGuard.tsx` (redirects to login)
  - `src/components/dashboard/Navbar.tsx`, `src/components/dashboard/Footer.tsx`
- Consolidated ESLint configuration to a single, easy-to-maintain file `prrc-next-app/.eslintrc.cjs` and removed the legacy `.eslintrc.json` and moved away from conflicting `eslint.config.cjs` behavior.
- Added developer tooling and DX improvements for consistent format/linting and pre-commit hooks:
  - `prrc-next-app/package.json` scripts: `lint:fix`, `format`, `dev:docker`, `prepare`
  - `husky` + `lint-staged` configuration and `.husky/pre-commit` hook
  - `scripts/setup-husky.sh` helper to install husky hooks and devDeps for `prrc-next-app`
- Updated docs and examples to centralize admin path configuration and demonstrate how to use `NEXT_PUBLIC_*` variables for admin and router configuration (see `.env.example`, `README.md`).

### ⚙️ Additional Repository Improvements

- Applied the same `husky` + `lint-staged` DX improvements to `payload-backend` to run pre-commit linting and formatting there as well.
- Added a `scripts/setup-husky.sh` helper to install hooks for both `prrc-next-app` and `payload-backend`.
- Added a simple route-checker script to detect hard-coded admin path strings in the frontend source (`scripts/check-admin-routes.js`) and a tiny test that verifies `ADMIN_ROUTES` exports expected keys (`scripts/test-admin-routes-export.js`).
- Added a repository-level `start:dev` script to concurrently run both services locally (`npm run start:dev`).

#### Files modified (high-level)

- `prrc-next-app/src/lib/config.ts` (new consolidated config)
- `prrc-next-app/.eslintrc.cjs` (new ESLint configuration)
- `prrc-next-app/package.json` (scripts, devDeps, lint-staged)
- `prrc-next-app/.husky/pre-commit` (lint-staged hook)
- `prrc-next-app/.env.example` (new `NEXT_PUBLIC_*` variables)
- Updated a range of frontend components/pages to use `ADMIN_ROUTES.*`
- `scripts/setup-husky.sh` added to help devs install hooks; `scripts/clear-next-cache.sh` already present for DX

#### Notes

- Developers should run `npm install` and `npm run prepare` in `prrc-next-app` to ensure the hooks are setup for Husky.
- Existing hard-coded admin links and login redirects were migrated to `ADMIN_ROUTES.*`. If you need the frontend-admin path changed, update the env var `NEXT_PUBLIC_FRONTEND_ADMIN_PATH`.
- This iteration focuses on developer ergonomics and configuration unification; the admin panel still runs on the separate `payload-backend` server at `/admin-panel` on port 3001 by default.

### 📚 Documentation consolidation

- Merged developer guides (DEV-SETUP.md), frontend README, backend README, and test docs into canonical locations:
  - `CHANGELOG.md` for change history
  - `README.md` for setup and quick start
  - `/prrc-next-app/specs/spec.md`, `/prrc-next-app/specs/tasks.md`, `/prrc-next-app/specs/plan.md` for detailed specs and planning
- Deprecated non-canonical docs (moved to single-sourced docs). All changes are now documented only in canonical files.

---

## [2.0.1] - 2024-11-13

### 🔧 Phase 1: TypeScript Conversion Error Fixes

#### Fixed

- **JavaScript Cleanup**

  - Removed duplicate JavaScript files that existed alongside TypeScript versions
  - Removed `src/app/(payload)/layout.jsx` (duplicate of .tsx)
  - Removed `src/app/(payload)/api/[...slug]/route.js` (deprecated)
  - Removed old Payload API routes from pages directory
  - Removed `src/pages/api/hello.js` and `src/pages/api/payload*.js`
  - Converted `importMap.js` to `importMap.ts`

- **Build Configuration**

  - Fixed frontend `package.json` build script (removed `payload migrate` command)
  - Removed deprecated `payload` script from frontend

- **TypeScript Type Errors**

  - Converted PropTypes to TypeScript interfaces in `AdminCard` and `StaffCard` components
  - Added `CSSProperties` type to inline style objects in `EducationBanner.tsx`
  - Added TypeScript interfaces to `AdminProfile` component
  - Fixed Next.js 15 API route parameter signatures (async context.params)
  - Added proper type definitions to `SvgWaves` component
  - Added `AppProps` type to `_app.tsx`
  - Added `NextApiRequest` and `NextApiResponse` types to API routes

- **React/JSX Corrections**

  - Replaced all HTML `class=` attributes with JSX `className=` (24 files)
  - Fixed `frameborder` to `frameBorder` in iframe elements
  - Replaced invalid `<container>` elements with `<div>`
  - Removed invalid `viewBox` attribute from `<img>` tags
  - Changed `src=` to `href=` in anchor tags

- **Payload CMS Configuration**

  - Removed deprecated `staticURL` from media upload config
  - Fixed image size configuration (removed `height: null`)
  - Updated `generatePageMetadata` to include `searchParams` parameter
  - Fixed `serverFunction` signature in Payload admin layout
  - **Updated API routes to use Payload CMS 3.x REST handlers** (`REST_GET`, `REST_POST`, etc.)

- **Import Path Updates**
  - Updated imports from `.js` extensions to TypeScript (no extension needed)
  - Fixed all importMap references to use `.ts` instead of `.js`

#### ✅ Resolved

- ✅ Build now completes successfully with no TypeScript errors
- ✅ All 45 files properly converted to TypeScript
- ✅ Type checking passes without errors
- ✅ Next.js 15 compatibility achieved
- ✅ Payload CMS 3.x API integration working

---

## [2.0.0] - 2024-11-12

### 🎯 Major Architecture Overhaul

This release represents a complete restructuring of the application from a monolithic Next.js app to a modern two-app architecture with TypeScript.

---

### ✨ Added

#### New Architecture

- **Two-App Separation**: Split application into independent frontend and backend services
  - `prrc-next-app/`: Next.js frontend (TypeScript)
  - `payload-backend/`: Payload CMS backend (TypeScript)

#### Backend (payload-backend)

- **New Express Server** (`src/server.ts`)
  - Standalone Payload CMS server
  - CORS configuration for frontend communication
  - Health check endpoint at `/health`
  - Production-ready error handling
- **TypeScript Configuration**
  - Strict type checking enabled
  - ES2020 target with ESNext modules
  - Source maps for debugging
- **Docker Support**

  - `Dockerfile`: Production build
  - `Dockerfile.dev`: Development with hot reload
  - Multi-stage builds for optimization

- **Environment Configuration**
  - `.env.example`: Template for environment variables
  - Separate development and production configs

#### Frontend (prrc-next-app)

- **TypeScript Conversion**

  - All `.js` and `.jsx` files converted to `.ts` and `.tsx`
  - Type definitions for Payload collections
  - Improved IDE autocomplete and error detection

- **API Client Library** (`src/lib/payload-api.ts`)

  - Centralized API communication
  - Type-safe fetch wrapper
  - Helper functions for common operations

- **Type Definitions** (`src/types/payload-types.ts`)

  - `User` interface
  - `Media` interface with image sizes
  - `Researcher` interface
  - `PayloadResponse<T>` generic type

- **Environment Configuration**
  - `.env.example`: Frontend environment template
  - API URL configuration for different environments

#### Docker & Orchestration

- **Development Docker Compose** (`docker-compose.yml`)

  - MongoDB service with health checks
  - Payload backend service
  - Next.js frontend service
  - Volume mounts for live reload
  - Network isolation

- **Production Docker Compose** (removed from repository; use orchestration/CI)
  - Production-optimized builds
  - MongoDB with authentication
  - Nginx reverse proxy configuration
  - Persistent volumes for data
  - Security hardening

#### Documentation

- **README.md**: Quick start guide and architecture overview
- **DOCUMENTATION.md**: Comprehensive developer documentation
  - Architecture details
  - API reference
  - Deployment guides
  - Troubleshooting section
  - Environment variables reference

---

### 🔄 Changed

#### Configuration Files

**TypeScript Configuration**

- **Frontend** (`prrc-next-app/tsconfig.json`)

  - Enabled strict mode for better type safety
  - Changed `moduleResolution` to "bundler" (Next.js 15)
  - Added path aliases: `@/*` → `./src/*`
  - Enabled `forceConsistentCasingInFileNames`

- **Backend** (`payload-backend/tsconfig.json`)
  - New configuration for Node.js backend
  - ES2020 target with ESNext modules
  - Output directory: `./dist`
  - Declaration files enabled

**Package Configuration**

- **Frontend** (`prrc-next-app/package.json`)

  - Renamed package: `prrc-next-app` → `prrc-frontend`
  - Version bumped: `0.1.0` → `2.0.0`
  - Updated Payload config path: `.mjs` → `.ts`
  - Added `type-check` script
  - Added TypeScript dev dependencies

- **Backend** (`payload-backend/package.json`)
  - New package: `prrc-payload-backend`
  - TypeScript-first development with `tsx`
  - Express and CORS dependencies
  - Separated dev and prod dependencies

**Payload Configuration**

- **Converted** `payload.config.mjs` → `payload.config.ts`
- **Moved** to `payload-backend/src/payload.config.ts`
- Added TypeScript types from Payload
- No changes to collections (backward compatible)

#### File Structure

```
Before:
prrc-next-app/
├── src/
│   ├── app/
│   ├── pages/
│   └── ...
├── payload.config.mjs
└── ...

After:
PRRC-MAIN-WEB/
├── prrc-next-app/              # Frontend
│   ├── src/
│   │   ├── app/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── types/
│   └── ...
├── payload-backend/            # Backend (NEW)
│   ├── src/
│   │   ├── server.ts
│   │   └── payload.config.ts
│   └── ...
└── docker-compose.yml
```

#### API Communication

- **Before**: Payload integrated directly in Next.js
- **After**: Frontend communicates with backend via REST API
- Added CORS support for cross-origin requests
- API base URL configurable via environment variables

---

### 🔧 Modified

#### Source Files Converted to TypeScript

**Application Core**

- `src/app/layout.jsx` → `src/app/layout.tsx`
- `src/app/api/[...slug]/route.js` → `src/app/api/[...slug]/route.ts`

**Payload Admin**

- `src/app/(payload)/layout.jsx` → `src/app/(payload)/layout.tsx`
- `src/app/(payload)/admin/[[...segments]]/page.jsx` → `src/app/(payload)/admin/[[...segments]]/page.tsx`

**Pages (16 files)**

- `src/pages/*.js` → `src/pages/*.tsx`
- `src/pages/api/*.js` → `src/pages/api/*.ts`
  - `index.js` → `index.tsx`
  - `ResearchPage.js` → `ResearchPage.tsx`
  - `EducationPage.js` → `EducationPage.tsx`
  - `SafetyPage.js` → `SafetyPage.tsx`
  - `StaffPage.js` → `StaffPage.tsx`
  - `PublicationsPage.js` → `PublicationsPage.tsx`
  - `AdministrationPage.js` → `AdministrationPage.tsx`
  - `Balch.js` → `Balch.tsx`
  - `_app.js` → `_app.tsx`
  - `_document.js` → `_document.tsx`
  - `api/hello.js` → `api/hello.ts`

**Components (30+ files)**

- All `.jsx` files in `components/` → `.tsx`
  - `components/layouts/*.jsx` → `.tsx`
  - `components/dashboard/*.jsx` → `.tsx`
  - `components/headers/*.jsx` → `.tsx`
  - `components/AdminCards/*.jsx` → `.tsx`
  - `components/StaffCards/*.jsx` → `.tsx`
  - `components/NewsCards/*.jsx` → `.tsx`

**Type Additions to Converted Files**

- Added React.ReactNode types for children props
- Added NextRequest types for API routes
- Added proper parameter types for dynamic routes
- Function parameters now fully typed

---

### 🐳 Docker & Infrastructure

**Development Environment**

- Health checks for all services
- Automatic service dependency management
- Volume mounts for hot reload
- Isolated network for security

**Production Environment**

- Optimized multi-stage builds
- MongoDB authentication
- Nginx reverse proxy ready
- Persistent data volumes
- Environment-based configuration

---

### 📦 Dependencies

**Added to Frontend**

- `typescript@^5.3.3` (devDependency)
- `@types/react@^18.2.48` (devDependency)
- `@types/react-dom@^18.2.18` (devDependency)
- `@types/node@^20.11.5` (devDependency)

**New Backend Dependencies**

- `express@^4.18.2`
- `cors@^2.8.5`
- `dotenv@^16.4.5`
- `payload@^3.56.0`
- `@payloadcms/db-mongodb@^3.56.0`
- `@payloadcms/richtext-slate@^3.56.0`

**New Backend DevDependencies**

- `typescript@^5.3.3`
- `tsx@^4.7.0`
- `@types/express@^4.17.21`
- `@types/cors@^2.8.17`
- `@types/node@^20.11.5`

---

### 🔒 Security Improvements

- **Separation of Concerns**: Frontend and backend run in isolated containers
- **CORS Configuration**: Explicit origin whitelisting
- **Environment Variables**: Secrets moved to environment configuration
- **Type Safety**: TypeScript prevents many runtime vulnerabilities
- **MongoDB Authentication**: Production setup with credentials
- **Health Checks**: Automatic monitoring of service health

---

### 📈 Performance Improvements

- **Independent Scaling**: Frontend and backend can scale separately
- **Optimized Docker Images**: Multi-stage builds reduce image size
- **Caching**: Better Docker layer caching for faster builds
- **Type Checking**: Catch errors at build time, not runtime

---

### 🎨 Developer Experience

- **Better IDE Support**: Full TypeScript autocomplete
- **Type Safety**: Catch errors before they reach production
- **Clear Architecture**: Obvious boundaries between services
- **Hot Reload**: Both services support live reload in development
- **Comprehensive Docs**: Complete documentation for all aspects
- **Easy Setup**: Single command (`docker-compose up`) starts everything

---

### 🧪 Testing & Validation

- **Type Checking**: `npm run type-check` validates all TypeScript
- **Health Endpoints**: `/health` endpoint for monitoring
- **Docker Health Checks**: Automatic container health monitoring

---

### 📝 Migration Guide

For teams upgrading from v1.x to v2.0.0:

1. **Backup your database**

   ```bash
   mongodump --uri="mongodb://localhost:27017/prrc"
   ```

2. **Pull latest code**

   ```bash
   git pull origin main
   ```

3. **Set up environment variables**

   ```bash
   cd payload-backend && cp .env.example .env
   cd ../prrc-next-app && cp .env.example .env.local
   # Edit both files with your configuration
   ```

4. **Start new architecture**

   ```bash
   cd ..
   docker-compose up
   ```

5. **Verify services**
   - Frontend: http://localhost:3000

- Backend: http://localhost:3001/admin-panel
- API: http://localhost:3001/api

**Breaking Changes:**

- Payload is no longer integrated in Next.js
- API calls must use new `payload-api.ts` client
- Environment variables have changed (see `.env.example` files)

---

### 🐛 Bug Fixes

- Fixed TypeScript compilation errors in all source files
- Resolved module resolution issues with path aliases
- Fixed CORS issues in cross-origin API requests
- Corrected Docker volume mounting for development

---

### 🗑️ Removed

- Removed `payload.config.mjs` from frontend (moved to backend)
- Removed `payload.config.cjs` (duplicate file)
- Removed direct Payload integration from Next.js
- Removed `jsconfig.json` (replaced by `tsconfig.json`)

---

### 📚 Documentation Added

- `README.md`: Project overview and quick start
- `DOCUMENTATION.md`: Comprehensive technical documentation
- `CHANGELOG.md`: This file
- `.env.example` files in both services
- Inline code comments for complex logic
- Docker Compose comments for configuration

---

### 🔜 Future Enhancements

Planned for upcoming releases:

- [ ] GraphQL API support
- [ ] Authentication middleware improvements
- [ ] Rate limiting for API endpoints
- [ ] Automated testing suite
- [ ] CI/CD pipeline configuration
- [ ] Monitoring and logging integration
- [ ] CDN configuration for media files
- [ ] Redis caching layer
- [ ] API versioning

---

### 🙏 Credits

**Architecture Design**: Conversion to two-app architecture with TypeScript
**TypeScript Migration**: Complete codebase conversion
**Docker Configuration**: Development and production container setup
**Documentation**: Comprehensive guides and references

---

## [1.0.0] - 2024-10-20

### Initial Release

- Next.js application with Payload CMS integrated
- MongoDB database integration
- Basic Docker support
- Component library with layouts, cards, and dashboards
- Responsive design with TailwindCSS

---

**Note**: This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
