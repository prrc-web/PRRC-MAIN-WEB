# Changelog: PRRC Next.js Application

## 2025-11-10: PayloadCMS 3.x + Next.js 15.x Integration Issues

### Critical Compatibility Problems Discovered

Attempted to restore PayloadCMS admin functionality in existing PRRC Next.js application. Discovered severe incompatibility between PayloadCMS 3.56.0 and Next.js 15.x versions.

### Environment Issues Resolved

1. **Shell Configuration** - Fixed broken `.zshrc` file with malformed nvm initialization
2. **Node Modules Corruption** - Cleaned corrupted node_modules with duplicate directories and invalid inode counts
3. **Next.js Installation** - Reinstalled Next.js after module corruption

### Dependency Resolution

1. **Next.js Version Downgrade** - Downgraded from 15.5.6 to 15.0.3 for PayloadCMS compatibility
2. **React Version Upgrade** - Upgraded React from 18.3.1 to 19.x (PayloadCMS requirement)
3. **GraphQL Installation** - Added missing `graphql` package dependency
4. **TypeScript Dependencies** - Installed `typescript`, `@types/react`, `@types/node` with `--legacy-peer-deps`

### Configuration Changes Made

#### 1. PayloadCMS Config (`payload.config.mjs`)

```javascript
export default buildConfig({
  admin: {
    user: 'users',
  },
  routes: {
    api: '/api',
    admin: '/admin',
  },
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  // ... collections, db, editor config
});
```

#### 2. Environment Variables (`.env`)

Added critical missing variable:

```bash
PAYLOAD_SECRET=U88HPaZWUhf1K2Ytj6kH+RzYRAhK82HoiBaLVbX1FNs=
```

#### 3. NPM Configuration (`.npmrc`)

Created to handle peer dependency conflicts:

```
legacy-peer-deps=true
```

#### 4. Custom SCSS Fix (`src/app/(payload)/custom.scss`)

Removed non-existent PayloadCMS SCSS import:

```scss
/* PayloadCMS styles are automatically included */
```

### Admin Panel Route Fixes

#### 1. Admin Page Component (`src/app/(payload)/admin/[[...segments]]/page.jsx`)

Fixed async params handling for Next.js 15.x:

```javascript
export async function generateMetadata(props) {
  const params = (await props.params) || {};
  return generatePageMetadata({
    config: configPromise,
    params: params,
  });
}

export default async function Page(props) {
  const awaitedParams = (await props.params) || {};
  const awaitedSearchParams = (await props.searchParams) || {};

  const params = {
    segments: awaitedParams.segments || [],
  };

  return RootPage({
    config: configPromise,
    importMap,
    params: Promise.resolve(params),
    searchParams: Promise.resolve(awaitedSearchParams),
  });
}
```

#### 2. Admin Layout (`src/app/(payload)/layout.jsx`)

Fixed RootLayout import path:

```javascript
import { RootLayout } from '@payloadcms/next/layouts'; // Changed from '/views'
```

### API Route Attempts (ALL FAILED)

#### Attempt 1: Pages Router Proxy

Created `/api/[...slug].js` in Pages Router to proxy to PayloadCMS admin API.
**Result**: Failed - proxy returned HTML instead of JSON, no database writes.

#### Attempt 2: Official REST Handlers

```javascript
import {
  REST_DELETE,
  REST_GET,
  REST_PATCH,
  REST_POST,
} from '@payloadcms/next/routes';
```

**Result**: Failed - handlers don't return Response objects in Next.js 15.

#### Attempt 3: Custom Handler with getPayload

```javascript
const payload = await getPayload({ config: configPromise });
export async function GET(req, { params }) {
  return payload.handleRequest(req, { slug });
}
```

**Result**: Failed - `payload.handleRequest` doesn't exist in PayloadCMS 3.x.

### MongoDB Atlas Setup

1. **Cluster Created**: Cluster39407 (8.0.15)
2. **Database User**: Created with proper roles
3. **IP Whitelist**: Configured for development machine
4. **Connection String**: Updated in `.env`

### Remaining Critical Issues (UNRESOLVED)

#### 1. API Routes Non-Functional

- All API endpoints return 500 errors
- `/api/users/me` - Used by admin to check auth status
- `/api/users/first-register` - Used to create first admin user
- **Root Cause**: No compatible method to implement PayloadCMS REST API in Next.js 15 App Router

#### 2. Admin Panel Redirect Loop

- Admin panel at `/admin/login` redirects to `/admin/create-first-user`
- Cannot create first user because API routes fail
- Cannot access any admin functionality

#### 3. TypeScript Auto-Detection

- Next.js keeps trying to install TypeScript dependencies
- Project is JavaScript-only, should use JSDoc for types
- `.bak` files exist: `tsconfig.json.bak`, `next-env.d.ts.bak`

### Technical Debt Identified

1. **Mixed Router Patterns**: App Router (admin) + Pages Router (main site) causing conflicts
2. **Version Mismatches**:
   - PayloadCMS 3.56.0 designed for Next.js 15.2.3+
   - Using Next.js 15.0.3 due to compatibility issues
   - React 19 vs React 18 peer dependency conflicts
3. **Missing Sharp**: Image processing library not installed (warnings in console)
4. **No Email Adapter**: PayloadCMS email functionality disabled

### Files Modified

**Created:**

- `.npmrc`
- `src/app/(payload)/layout.jsx` (converted from .tsx)
- `src/app/(payload)/admin/[[...segments]]/page.jsx` (converted from .tsx)
- `src/app/(payload)/custom.scss` (modified)

**Deleted:**

- `src/app/(payload)/layout.tsx`
- `src/app/(payload)/admin/[[...segments]]/page.tsx`
- `src/pages/api/payload.js`
- `src/pages/api/payload/[...slug].js`
- `src/app/api/[...slug]/route.js` (created and deleted multiple times)

**Modified:**

- `.env` - Added PAYLOAD_SECRET
- `payload.config.mjs` - Added routes and secret config
- `package.json` - Multiple dependency updates

### Current State

- ✅ Development server runs without crashes
- ✅ Homepage accessible at `http://localhost:3001`
- ✅ Admin panel loads at `/admin/create-first-user`
- ❌ **API routes completely non-functional**
- ❌ **Cannot create admin users**
- ❌ **PayloadCMS admin panel unusable**

### Recommended Next Steps

**Option A: Remove PayloadCMS**

- Disable PayloadCMS entirely
- Build custom admin panel with simple auth
- Use MongoDB directly for data management

**Option B: Start Fresh with Template**

- Use `npx create-payload-app@latest` with compatible versions
- Migrate existing pages/components to new structure

**Option C: Continue Debugging** (NOT RECOMMENDED)

- Deep dive into PayloadCMS 3.x source code
- Custom implement REST API layer
- High risk, time-intensive

### Lessons Learned

1. PayloadCMS 3.x is tightly coupled to specific Next.js versions
2. App Router + Pages Router mixing creates complex routing issues
3. Peer dependency conflicts require `--legacy-peer-deps` flag
4. Next.js 15.x async params pattern requires careful handling

### Solution Implemented: Standalone CMS Server (2025-11-11)

After extensive debugging, decided to **completely separate PayloadCMS** from the Next.js application.

#### Architecture Decision

Created independent PayloadCMS server running on separate port:

```
┌─────────────────────────┐
│  Next.js Frontend       │
│  localhost:3001         │  ──┐
│  (Public website)       │    │
└─────────────────────────┘    │
                               │ HTTP API calls
┌─────────────────────────┐    │
│  PayloadCMS Server      │  ──┘
│  localhost:3001         │
│  (Admin + REST API)     │
└─────────────────────────┘
           │
           ▼
┌─────────────────────────┐
│  MongoDB Atlas          │
└─────────────────────────┘
```

#### New Directory Structure

Created `/payload-backend` alongside `/prrc-next-app`:

```
PRRC-MAIN-WEB/
├── prrc-next-app/          # Next.js frontend (Pages Router)
└── payload-backend/        # PayloadCMS + API (Express)
    ├── server.js           # Express + Payload initialization
    ├── payload.config.mjs  # Copied from main app
    ├── package.json        # Only CMS dependencies
    ├── .env                # CMS-specific environment
    └── README.md           # CMS server documentation
```

#### Files Created

1. **`payload-backend/package.json`**
   - Dependencies: payload, express, cors, dotenv
   - Uses `"type": "module"` for full ESM support
   - No Next.js dependencies

2. **`payload-backend/src/server.ts`**

   ```javascript
   import express from 'express';
   import payload from 'payload';
   import cors from 'cors';

   const app = express();

   app.use(
     cors({
       origin: 'http://localhost:3001',
       credentials: true,
     }),
   );

   await payload.init({
     secret: process.env.PAYLOAD_SECRET,
     express: app,
   });
   ```

app.listen(3001);

````

3. **`payload-backend/.env`**
- MONGODB_URI
- PAYLOAD_SECRET
- PORT=3001

4. **`payload-backend/README.md`**
- Setup instructions
- API endpoint documentation
- Next.js integration examples

#### How It Works

1. PayloadCMS runs on port 3001 (hosted inside `payload-backend`)
2. Provides admin UI at `/admin`
3. Exposes REST API at `/api/*`
4. Next.js app fetches data via HTTP:
```javascript
const res = await fetch('http://localhost:3001/api/researchers');
const { docs } = await res.json();
````

#### Benefits of This Approach

- ✅ **Zero module conflicts** - Each app uses its own module system
- ✅ **Independent deployment** - Can deploy CMS and frontend separately
- ✅ **Clean separation** - CMS is true "backend", Next.js is pure frontend
- ✅ **No dependency hell** - Each has only what it needs
- ✅ **Simple CORS** - Standard cross-origin setup
- ✅ **Works immediately** - No complex Next.js integration

#### Next.js App Changes Needed

Remove all PayloadCMS integration from `prrc-next-app`:

1. Delete `src/app/(payload)/` directory
2. Remove PayloadCMS dependencies from package.json
3. Remove `payload.config.mjs`
4. Fetch data via REST API instead

#### Usage

**Terminal 1:**

```bash
cd ../payload-backend
npm install
npm run dev  # Runs on localhost:3001
```

**Terminal 2:**

```bash
cd prrc-next-app
npm run dev  # Runs on localhost:3001
```

Admin accessible at: `http://localhost:3001/admin`

#### Why This Is Better

PayloadCMS was never designed to be embedded in Next.js App Router. The official `@payloadcms/next` package exists, but has severe compatibility issues with:

- Next.js 15.x async params
- Mixed CommonJS/ESM environments
- App Router + Pages Router coexistence

Running it standalone is the **intended architecture** for complex deployments. The Next.js integration is meant for simple use cases where the CMS runs the entire site.

---

## Previous: Payload CMS and Next.js Configuration Conflicts

### Original Problem

The PRRC Next.js application had dependency conflicts between Payload CMS and Next.js, specifically related to ES modules vs CommonJS handling.

#### Error Messages Encountered:

- Payload CMS: `[MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file... doesn't parse as CommonJS. Reparsing as ES module because module syntax was detected. This incurs a performance overhead. To eliminate this warning, add "type": "module" to package.json.`
- Next.js: `ReferenceError: module is not defined in ES module scope` when trying to process CSS files
- Next.js: `Configuring Next.js via 'next.config.cjs' is not supported.`

### Root Causes

1. The payload.config.js file used ES module syntax (import/export) but was named with a `.js` extension
2. When `"type": "module"` was added to package.json, it caused Next.js internal processing files to fail
3. Next.js doesn't support `.cjs` config files, only `.js`, `.mjs`, or `.ts`
4. CSS processing tools (css-loader, postcss-loader) couldn't handle ES module setting properly

### Solution Steps

#### Step 1: Identify Configuration Files

```bash
ls -la next.config.*
# Found: next.config.js, next.config.mjs

ls -la payload.config.*
# Found: payload.config.js, payload.config.cjs
```

#### Step 2: Remove "type": "module" from package.json

```json
// Before
{
  "name": "prrc-next-app",
  "version": "0.1.0",
  "type": "module",  // ← This was causing CSS processing issues
  "private": true,
  // ...
}

// After
{
  "name": "prrc-next-app",
  "version": "0.1.0",
  "private": true,  // ← Removed "type": "module"
  // ...
}
```

#### Step 3: Rename Payload Config to Use ES Module Extension

```bash
# Rename the file to properly indicate ES module syntax
mv payload.config.js payload.config.mjs
```

#### Step 4: Update Package.json Script

```json
// Before
"scripts": {
  // ...
  "payload": "cross-env PAYLOAD_CONFIG_PATH=payload.config.js payload"
},

// After
"scripts": {
  // ...
  "payload": "cross-env PAYLOAD_CONFIG_PATH=payload.config.mjs payload"  // ← Updated path
}
```

### Final Working Configuration

#### package.json

```json
{
  "name": "prrc-next-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --hostname 0.0.0.0 --port 3001",
    "build": "next build",
    "start": "next start --port 3001",
    "lint": "next lint",
    "payload": "cross-env PAYLOAD_CONFIG_PATH=payload.config.mjs payload"
  },
  "dependencies": {
    "@payloadcms/db-mongodb": "^3.56.0",
    "@payloadcms/next": "^3.56.0",
    "@payloadcms/richtext-slate": "^3.56.0",
    "next": "^15.5.6",
    "payload": "^3.56.0",
    "react": "^18",
    "react-dom": "^18"
  }
}
```

#### next.config.mjs

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['payload'],
};

export default nextConfig;
```

#### payload.config.mjs

```javascript
// payload.config.mjs - already using ES module syntax
import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  collections: [
    // ... collection definitions
  ],
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/prrc',
  }),
});
```

### Result

- ✅ Next.js application runs properly without CSS processing errors
- ✅ Payload CMS runs without the module type warning
- ✅ All dependencies aligned at compatible versions (3.56.0)
- ✅ No conflicts between Next.js and Payload CMS configurations

### Commands That Now Work

```bash
npm run dev          # Next.js development server
npm run payload      # Payload CMS commands
npm run build        # Next.js production build
```

### Additional Notes

- Next.js config must use .mjs or .js extension with appropriate syntax
- Payload CMS config uses .mjs extension to indicate ES module syntax
- No need for "type": "module" in package.json with this configuration
- All Payload CMS packages maintained at compatible version 3.56.0
