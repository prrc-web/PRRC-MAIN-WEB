# PRRC Web Application - Comprehensive Documentation

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Getting Started](#getting-started)
3. [Development Guide](#development-guide)
4. [API Reference](#api-reference)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)

## Architecture Overview

### Two-App Architecture

The application is split into two independent services:

**Frontend (prrc-next-app)**

- Next.js 15 with TypeScript
- Handles UI/UX and user interactions
- Fetches data from Payload API
- Runs on port 3000

**Backend (payload-backend)**

- Payload CMS 3.56 with TypeScript
- Provides REST API and GraphQL
- Manages content and authentication
- Runs on port 3001

**Database**

- MongoDB 7
- Stores all CMS data
- Runs on port 27017

### Benefits of This Architecture

✅ **Separation of Concerns** - Frontend and backend can be developed independently
✅ **Scalability** - Each service can scale independently
✅ **Type Safety** - TypeScript prevents runtime errors
✅ **Maintainability** - Clear boundaries and shared types
✅ **Easy Deployment** - Docker Compose handles all services

## Getting Started

### Prerequisites

- Docker Desktop installed
- Node.js 20+ (for local development without Docker)
- Git

### Initial Setup

1. **Navigate to project:**

   ```bash
   cd PRRC-MAIN-WEB
   ```

2. **Set up environment variables:**

   Backend:

   ```bash
   cd payload-backend
   cp .env.example .env
   ```

   Edit `.env`:

   ```env
   MONGODB_URI=mongodb://mongodb:27017/prrc
   PAYLOAD_SECRET=your-strong-secret-here
   PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   ```

   Frontend:

   ```bash
   cd ../prrc-next-app
   cp .env.example .env.local
   ```

   Edit `.env.local`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   PORT=3000
   ```

3. **Start all services:**

   ```bash
   cd ..
   docker-compose up
   ```

4. **Create first admin user:**
   - Go to http://localhost:3001/admin-panel
   - Fill in registration form
   - Login and start managing content

## Development Guide

### Local Development (Without Docker)

**Terminal 1 - Database:**

```bash
# Start MongoDB (if installed locally)
mongod --dbpath /path/to/data
```

**Terminal 2 - Backend:**

```bash
cd payload-backend
npm install
npm run dev
```

**Terminal 3 - Frontend:**

```bash
cd prrc-next-app
npm install
npm run dev
```

### With Docker (Recommended)

```bash
docker-compose up
```

### Type Checking

Run TypeScript compiler without emitting files:

```bash
# Frontend
cd prrc-next-app
npm run type-check

# Backend
cd payload-backend
npx tsc --noEmit
```

### Code Structure

**Frontend:**

```
prrc-next-app/src/
├── app/               # Next.js App Router
│   ├── layout.tsx     # Root layout
│   └── api/           # API routes (proxying to Payload)
├── pages/             # Next.js Pages Router
│   ├── index.tsx      # Homepage
│   ├── ResearchPage.tsx
│   └── ...
├── components/        # React components
├── lib/               # Utilities
│   └── payload-api.ts # API client
└── types/             # TypeScript definitions
    └── payload-types.ts
```

**Backend:**

```
payload-backend/src/
├── server.ts          # Express server
└── payload.config.ts  # Payload configuration
```

## API Reference

### REST Endpoints

Base URL: `http://localhost:3001/api`

#### Researchers

```
GET    /api/researchers       # List all researchers
GET    /api/researchers/:id   # Get single researcher
POST   /api/researchers       # Create researcher (auth required)
PATCH  /api/researchers/:id   # Update researcher (auth required)
DELETE /api/researchers/:id   # Delete researcher (auth required)
```

#### Media

```
GET    /api/media             # List all media files
GET    /api/media/:id         # Get single media file
POST   /api/media             # Upload media (auth required)
DELETE /api/media/:id         # Delete media (auth required)
```

#### Users

```
GET    /api/users             # List all users (auth required)
POST   /api/users             # Create user (auth required)
```

### Using the API from Frontend

```typescript
import { getResearchers } from "@/lib/payload-api";

// In component or page
const researchers = await getResearchers();
```

### Custom API Calls

```typescript
import { fetchFromPayload } from "@/lib/payload-api";

const data = await fetchFromPayload("researchers", {
  method: "POST",
  body: JSON.stringify({
    name: "John Doe",
    title: "Research Scientist",
  }),
});
```

## Deployment

### Development Deployment

```bash
docker-compose up -d
```

Services will run in background.

### Production Deployment

1. **Set up production environment:**

   ```bash
   cp .env.example .env.production
   ```

2. **Configure production variables:**

   ```env
   # .env.production
   MONGODB_URI=mongodb://admin:password@mongodb:27017/prrc?authSource=admin
   PAYLOAD_SECRET=generate-strong-32-char-secret
   PAYLOAD_PUBLIC_SERVER_URL=https://api.yourdomain.com
   FRONTEND_URL=https://yourdomain.com
   MONGO_ROOT_PASSWORD=secure-password
   ```

3. **Deploy with production compose:**
   ```bash
   docker compose up -d  # use the main docker-compose.yml for local development
   ```

### Health Checks

**Backend Health:**

```bash
curl http://localhost:3001/health
```

Response:

```json
{
  "status": "ok",
  "timestamp": "2024-11-12T20:00:00.000Z"
}
```

**Check Container Status:**

```bash
docker-compose ps
```

## Troubleshooting

### Port Already in Use

**Problem:** Port 3000, 3001, or 27017 is already in use

**Solution:**

```bash
# Find process using port
lsof -i :3000

# Kill process or change port in docker-compose.yml
```

### MongoDB Connection Refused

**Problem:** Backend can't connect to MongoDB

**Solution:**

```bash
# Check MongoDB is running
docker-compose ps mongodb

# Check logs
docker-compose logs mongodb

# Restart service
docker-compose restart mongodb
```

### TypeScript Errors

**Problem:** Type errors in development

**Solution:**

```bash
# Reinstall dependencies
cd prrc-next-app
rm -rf node_modules package-lock.json
npm install

# Check types
npm run type-check
```

### Container Won't Start

**Problem:** Docker container fails to start

**Solution:**

```bash
# View logs
docker-compose logs [service-name]

# Rebuild containers
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Database Data Reset

**Problem:** Need to reset database

**Solution:**

```bash
# Stop services
docker-compose down

# Remove volumes
docker volume rm prrc-main-web_mongodb_data

# Restart
docker-compose up
```

## Environment Variables Reference

### Backend (.env)

| Variable                    | Description               | Default                          | Required |
| --------------------------- | ------------------------- | -------------------------------- | -------- |
| `MONGODB_URI`               | MongoDB connection string | `mongodb://localhost:27017/prrc` | Yes      |
| `PAYLOAD_SECRET`            | Secret key for JWT tokens | -                                | Yes      |
| `PAYLOAD_PUBLIC_SERVER_URL` | Public URL of backend     | `http://localhost:3001`          | Yes      |
| `PORT`                      | Backend server port       | `3001`                           | No       |
| `NODE_ENV`                  | Environment mode          | `development`                    | No       |
| `FRONTEND_URL`              | Frontend URL for CORS     | `http://localhost:3000`          | Yes      |

### Frontend (.env.local)

| Variable                       | Description                   | Default                       | Required |
| ------------------------------ | ----------------------------- | ----------------------------- | -------- |
| `NEXT_PUBLIC_API_URL`          | Payload API URL (client-side) | `http://localhost:3001`       | Yes      |
| `NEXT_PUBLIC_API_URL_INTERNAL` | Payload API URL (server-side) | `http://payload-backend:3001` | No       |
| `PORT`                         | Frontend server port          | `3000`                        | No       |
| `NODE_ENV`                     | Environment mode              | `development`                 | No       |

## Maintenance

### Backup Database

```bash
# Create backup
docker exec prrc-mongodb mongodump --out=/data/backup

# Copy to host
docker cp prrc-mongodb:/data/backup ./backup
```

### Restore Database

```bash
# Copy backup to container
docker cp ./backup prrc-mongodb:/data/restore

# Restore
docker exec prrc-mongodb mongorestore /data/restore
```

### Update Dependencies

```bash
# Frontend
cd prrc-next-app
npm update

# Backend
cd ../payload-backend
npm update
```

### Logs

```bash
# View all logs
docker-compose logs

# Follow logs
docker-compose logs -f

# Specific service
docker-compose logs payload-backend
```

## Support

For issues or questions:

1. Check this documentation
2. Review error logs: `docker-compose logs`
3. Check Payload CMS docs: https://payloadcms.com/docs
4. Check Next.js docs: https://nextjs.org/docs

---

## 📝 Changes Log: November 12 - November 24, 2024

**Document Updated:** November 25, 2024  
**Period Covered:** November 12, 2024 - November 24, 2024  
**Major Version Updates:** 2.0.2 → 2.1.3

### Overview of Changes

Between November 12 and November 24, 2024, the PRRC Web Application underwent significant refinements focused on developer experience, configuration management, and bug fixes. The architecture remained stable as a two-app TypeScript system, with improvements concentrated on eliminating hard-coded values, standardizing tooling, and resolving deployment issues.

---

### 🐛 Critical Bug Fixes

#### 1. **Port Conflict Resolution (Nov 18)**
**Issue:** Backend service failed to start with EADDRINUSE error on port 3001  
**Root Cause:** Duplicate services (`prrc-cms-server` and `payload` service) running simultaneously  
**Fix Applied:**
- Removed duplicate legacy `prrc-cms-server` service
- Consolidated to single `payload-backend` service
- Updated docker-compose.yml to prevent port conflicts
- Freed port 3001 for canonical backend service

**Files Modified:**
- `docker-compose.yml` - Removed duplicate service definitions
- Documentation updated to reflect single backend service

**Impact:** Backend now starts reliably without manual port cleanup

---

#### 2. **Payload Initialization Ordering Bug (Nov 18)**
**Issue:** Missing `PAYLOAD_SECRET` or reentrancy errors during server startup  
**Root Cause:** Environment variables loaded after Payload config import  
**Fix Applied:**
- Moved `dotenv.config()` before `payload.config.ts` import
- Ensured environment variables available before configuration parsing
- Added validation for required environment variables

**Files Modified:**
- `payload-backend/src/server.ts` - Reordered initialization sequence

**Impact:** Eliminated startup crashes and configuration errors

---

#### 3. **MongoDB Connection Issues (Nov 18)**
**Issue:** Backend unable to connect to MongoDB in development  
**Root Cause:** MongoDB service not started or connection string misconfigured  
**Fix Applied:**
- Added MongoDB startup command to dev workflow: `docker compose up -d mongodb`
- Updated connection string handling in environment config
- Added connection health checks and better error messages
- Updated DEV-SETUP.md with troubleshooting steps

**Files Modified:**
- `DEV-SETUP.md` - Added MongoDB startup instructions
- `docker-compose.yml` - Improved MongoDB health checks

**Impact:** Reliable database connectivity in development environments

---

### ✨ New Features & Improvements

#### 1. **Admin Seeding Mechanism (Nov 18)**
**Feature:** Automatic first admin user creation during development  
**Implementation:**
- Added `SEED_ADMIN=true` environment variable flag
- Auto-creates admin user from `ADMIN_EMAIL` and `ADMIN_PASSWORD` on startup
- Only runs when database is empty (first boot)
- Simplifies initial setup for developers

**Environment Variables Added:**
```env
SEED_ADMIN=true
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme123
```

**Files Modified:**
- `payload-backend/src/server.ts` - Added seeding logic
- `.env.example` - Added new variables

**Impact:** Eliminates manual admin creation step during development setup

---

#### 2. **New Collections: Papers & Newsletters (Nov 18)**
**Feature:** Added content management for research papers and newsletters  
**Collections Added:**
- `papers` - Research publications with metadata
- `newsletters` - Newsletter archive and management

**Implementation:**
- Defined schemas in Payload configuration
- Added API endpoints for CRUD operations
- Created frontend helper functions for data fetching

**Files Modified:**
- `payload-backend/src/payload.config.ts` - Added collection definitions
- `prrc-next-app/src/lib/payload-api.ts` - Added helper functions

**Impact:** Extended content management capabilities

---

#### 3. **Centralized Configuration System (Nov 19)**
**Feature:** Single source of truth for admin paths and router configuration  
**Implementation:**

Created `src/lib/config.ts` with centralized constants:
```typescript
export const ADMIN_ROUTES = {
  FRONTEND_ADMIN: process.env.NEXT_PUBLIC_FRONTEND_ADMIN_PATH || '/AdministrationPage',
  BACKEND_ADMIN: process.env.NEXT_PUBLIC_BACKEND_ADMIN_PATH || '/admin-panel',
  FRONTEND_ADMIN_LOGIN: process.env.NEXT_PUBLIC_FRONTEND_ADMIN_LOGIN || '/admin/login',
};

export const ROUTER = {
  MODE: (process.env.NEXT_PUBLIC_ROUTER_MODE as 'app' | 'pages') || 'app',
};
```

**Hard-Coded Paths Eliminated:**
- `/AdministrationPage` - Now uses `ADMIN_ROUTES.FRONTEND_ADMIN`
- `/admin-panel` - Now uses `ADMIN_ROUTES.BACKEND_ADMIN`
- `/admin/login` - Now uses `ADMIN_ROUTES.FRONTEND_ADMIN_LOGIN`

**Files Modified (24 files total):**
- `src/pages/admin/login.tsx`
- `src/pages/admin/signup.tsx`
- `src/pages/admin/index.tsx`
- `src/components/AdminGuard.tsx`
- `src/components/dashboard/Navbar.tsx`
- `src/components/dashboard/Footer.tsx`
- And 18+ other components using admin paths

**Environment Variables Added:**
```env
NEXT_PUBLIC_FRONTEND_ADMIN_PATH=/AdministrationPage
NEXT_PUBLIC_BACKEND_ADMIN_PATH=/admin-panel
NEXT_PUBLIC_FRONTEND_ADMIN_LOGIN=/admin/login
NEXT_PUBLIC_ROUTER_MODE=app
```

**Impact:** Admin paths now configurable via environment variables without code changes

---

#### 4. **ESLint Configuration Consolidation (Nov 19)**
**Issue:** Multiple conflicting ESLint configs causing confusion  
**Fix Applied:**
- Consolidated to single `.eslintrc.cjs` file
- Removed legacy `.eslintrc.json`
- Removed conflicting `eslint.config.cjs`
- Unified linting rules across project

**Files Modified:**
- Created `prrc-next-app/.eslintrc.cjs` (canonical config)
- Deleted `prrc-next-app/.eslintrc.json` (legacy)
- Deleted `prrc-next-app/eslint.config.cjs` (conflicting)

**Configuration Structure:**
```javascript
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Unified rules across project
  }
};
```

**Impact:** Consistent linting behavior and clearer configuration

---

#### 5. **Developer Tooling Enhancement (Nov 19)**
**Feature:** Pre-commit hooks and automated formatting  
**Implementation:**

**New Scripts Added to `package.json`:**
```json
{
  "scripts": {
    "prepare": "husky install",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "dev:docker": "docker compose -f ../docker-compose.yml up --build"
  }
}
```

**Pre-commit Hooks:**
- Installed Husky for git hooks
- Added lint-staged for selective linting
- Auto-runs on `git commit`:
  - Lints staged TypeScript/JavaScript files
  - Formats code with Prettier
  - Blocks commit if errors found

**Files Created:**
- `.husky/pre-commit` - Git hook script
- `scripts/setup-husky.sh` - Installation helper for both services

**Dependencies Added:**
```json
{
  "devDependencies": {
    "husky": "^8.0.3",
    "lint-staged": "^15.0.2",
    "prettier": "^3.0.0"
  }
}
```

**Lint-Staged Configuration:**
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

**Impact:** Code quality enforced automatically, reduces review overhead

---

#### 6. **Route Validation Tooling (Nov 19)**
**Feature:** Automated detection of hard-coded admin paths  
**Implementation:**

Created validation scripts:
- `scripts/check-admin-routes.js` - Scans for hard-coded paths
- `scripts/test-admin-routes-export.js` - Verifies config exports

**Usage:**
```bash
cd prrc-next-app
npm run check-admin-routes
```

**Detects:**
- Hard-coded `/AdministrationPage` strings
- Hard-coded `/admin-panel` strings
- Hard-coded `/admin/login` strings

**Impact:** Prevents regression to hard-coded values during development

---

#### 7. **Concurrent Development Script (Nov 19)**
**Feature:** Single command to run both services  
**Implementation:**

Added root-level `package.json` with:
```json
{
  "scripts": {
    "start:dev": "concurrently \"cd prrc-next-app && npm run dev\" \"cd payload-backend && npm run dev\""
  }
}
```

**Usage:**
```bash
npm run start:dev  # From repository root
```

**Impact:** Simplified development workflow for running both services

---

### 🏗️ Current Directory Structure

As of November 24, 2024, the project structure is:

```
PRRC-MAIN-WEB/
│
├── 📁 prrc-next-app/                    # Frontend Application (Next.js 15 + TypeScript)
│   ├── 📁 .husky/                       # Git hooks for pre-commit checks
│   │   └── pre-commit                   # Runs lint-staged on commit
│   │
│   ├── 📁 src/                          # Source code
│   │   ├── 📁 app/                      # Next.js App Router (Next.js 15)
│   │   │   ├── layout.tsx               # Root layout
│   │   │   ├── 📁 (payload)/            # Payload admin routes
│   │   │   │   └── admin/[[...segments]]/page.tsx
│   │   │   └── 📁 api/                  # API route handlers
│   │   │
│   │   ├── 📁 pages/                    # Next.js Pages Router (legacy support)
│   │   │   ├── index.tsx                # Homepage
│   │   │   ├── ResearchPage.tsx         # Research section
│   │   │   ├── EducationPage.tsx        # Education section
│   │   │   ├── SafetyPage.tsx           # Safety section
│   │   │   ├── StaffPage.tsx            # Staff directory
│   │   │   ├── PublicationsPage.tsx     # Publications list
│   │   │   ├── AdministrationPage.tsx   # Admin dashboard
│   │   │   ├── Balch.tsx                # Balch facility page
│   │   │   ├── _app.tsx                 # App wrapper
│   │   │   ├── _document.tsx            # HTML document
│   │   │   └── 📁 api/                  # API routes (Pages Router)
│   │   │       └── hello.ts             # Example API endpoint
│   │   │
│   │   ├── 📁 components/               # Reusable UI components
│   │   │
│   │   ├── 📁 lib/                      # Utility libraries
│   │   │   ├── config.ts                # ✨ NEW: Centralized configuration
│   │   │   └── payload-api.ts           # API client for Payload backend
│   │   │
│   │   ├── 📁 types/                    # TypeScript type definitions
│   │   │   └── payload-types.ts         # Payload collection types
│   │   │
│   │   ├── 📁 collections/              # Payload collection configs (if any)
│   │   │   └── Users/                   # User collection
│   │   │
│   │   └── 📁 styles/                   # Global styles
│   │
│   ├── 📁 components/                   # Legacy components directory
│   │   ├── 📁 AdminCards/               # Admin interface cards
│   │   ├── 📁 dashboard/                # Dashboard components
│   │   ├── 📁 headers/                  # Header components
│   │   ├── 📁 layouts/                  # Layout components
│   │   ├── 📁 NewsCards/                # News card components
│   │   ├── 📁 StaffCards/               # Staff card components
│   │   └── 📁 svgContent/               # SVG graphics
│   │
│   ├── 📁 public/                       # Static assets
│   │
│   ├── 📁 specs/                        # Project specifications
│   │   ├── spec.md                      # Detailed specifications
│   │   ├── tasks.md                     # Task tracking
│   │   ├── plan.md                      # Development plan
│   │   └── changelog.md                 # Spec changes log
│   │
│   ├── .env.example                     # Environment template
│   ├── .eslintrc.cjs                    # ✨ UPDATED: Consolidated ESLint config
│   ├── .prettierrc                      # Prettier formatting config
│   ├── .npmrc                           # NPM configuration
│   ├── package.json                     # ✨ UPDATED: New scripts and tooling
│   ├── tsconfig.json                    # TypeScript configuration
│   ├── next.config.mjs                  # Next.js configuration
│   ├── tailwind.config.js               # TailwindCSS config
│   ├── payload.config.ts                # Payload CMS config (integrated)
│   ├── Dockerfile                       # Production container
│   └── Dockerfile.dev                   # Development container
│
├── 📁 scripts/                          # ✨ NEW: Utility scripts
│   ├── setup-husky.sh                   # Install git hooks for both services
│   ├── clear-next-cache.sh              # Clear Next.js build cache
│   ├── check-admin-routes.js            # Validate no hard-coded paths
│   └── test-admin-routes-export.js      # Test config exports
│
├── 📁 nginx/                            # Nginx configuration (for production)
│   └── ...                              # Reverse proxy configs
│
├── docker-compose.yml                   # ✨ UPDATED: Development orchestration
├── nginx.conf                           # Nginx config file
├── package.json                         # ✨ NEW: Root-level scripts
│
└── 📄 Documentation Files
    ├── README.md                        # ✨ UPDATED: Quick start guide
    ├── DOCUMENTATION.md                 # This file (comprehensive docs)
    ├── CHANGELOG.md                     # ✨ UPDATED: Detailed change history
    ├── DEV-SETUP.md                     # ✨ UPDATED: Development setup (deprecated)
    ├── PROJECT-STATUS.md                # Project status overview
    ├── MIGRATION.md                     # Migration guide
    ├── QUICK-REFERENCE.md               # Command reference
    └── CONVERSION-SUMMARY.md            # Executive summary
```

---

### 🔑 Key Structure Changes Explained

#### 1. **Single-App Architecture (Revised Understanding)**
**Important Note:** Despite documentation references to a separate `payload-backend` directory, the current implementation integrates Payload CMS within the `prrc-next-app` service. The backend runs embedded in Next.js on port 3001.

**Actual Architecture:**
- **Single Next.js application** with Payload CMS integrated
- Runs on port 3000 (frontend) and 3001 (Payload admin/API)
- MongoDB on port 27017
- Configuration in `prrc-next-app/payload.config.ts`

**Why This Matters:**
- Original plan was two-app architecture (frontend + separate backend)
- Current state: Payload integrated into Next.js (simpler deployment)
- Documentation references to `payload-backend/` directory are outdated
- All backend logic lives in `prrc-next-app/src/`

#### 2. **Centralized Configuration**
- `src/lib/config.ts` - Single source for all runtime configs
- Environment variables control all paths
- No hard-coded admin routes anywhere in codebase

#### 3. **Developer Tooling**
- `.husky/` - Git hooks directory
- `scripts/` - Utility scripts at root level
- Pre-commit checks automatically run

#### 4. **Dual Router Support**
- App Router (`src/app/`) - Next.js 15 modern approach
- Pages Router (`src/pages/`) - Legacy support
- Configurable via `NEXT_PUBLIC_ROUTER_MODE` environment variable

---

### 🛠️ Updated Development Workflow

#### Initial Setup
```bash
# 1. Clone and navigate
cd PRRC-MAIN-WEB

# 2. Install dependencies
cd prrc-next-app
npm install

# 3. Setup git hooks
npm run prepare

# 4. Copy environment template
cp .env.example .env.local

# 5. Edit environment variables
nano .env.local
```

#### Development Commands
```bash
# Start with Docker (recommended)
docker compose up

# OR run services individually
cd prrc-next-app
npm run dev

# Run both services from root
npm run start:dev

# Linting and formatting
npm run lint
npm run lint:fix
npm run format

# Type checking
npm run type-check

# Check for hard-coded admin routes
npm run check-admin-routes
```

#### Pre-Commit Workflow
```bash
# Git workflow now includes automatic checks
git add .
git commit -m "Your message"
# → Automatically runs:
#   - ESLint on staged files
#   - Prettier formatting
#   - Type checking
#   - Blocks commit if errors found
```

---

### 📋 Environment Variables Reference (Updated)

#### Frontend `.env.local`
```env
# API Connection
NEXT_PUBLIC_API_URL=http://localhost:3001

# Admin Path Configuration (NEW - Nov 19)
NEXT_PUBLIC_FRONTEND_ADMIN_PATH=/AdministrationPage
NEXT_PUBLIC_BACKEND_ADMIN_PATH=/admin-panel
NEXT_PUBLIC_FRONTEND_ADMIN_LOGIN=/admin/login
NEXT_PUBLIC_ROUTER_MODE=app

# Server Configuration
PORT=3000
NODE_ENV=development
```

#### Backend (Integrated Payload) Configuration
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/prrc

# Payload CMS
PAYLOAD_SECRET=your-strong-secret-here-min-32-chars
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001

# Admin Seeding (NEW - Nov 18)
SEED_ADMIN=true
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme123

# Server
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

---

### 🐛 All Bugs Fixed (Nov 12-24)

#### Bug #1: Port Conflict (EADDRINUSE on 3001)
- **Date Fixed:** November 18, 2024
- **Root Cause:** Duplicate `prrc-cms-server` and `payload` services
- **Solution:** Removed legacy services, consolidated to single backend
- **Affected Files:** `docker-compose.yml`
- **Testing:** Verified backend starts cleanly on port 3001

#### Bug #2: Payload Initialization Error
- **Date Fixed:** November 18, 2024
- **Root Cause:** Environment variables loaded after config import
- **Solution:** Moved `dotenv.config()` before Payload import
- **Affected Files:** `payload-backend/src/server.ts` (now integrated in Next.js)
- **Testing:** Verified no reentrancy or missing secret errors

#### Bug #3: MongoDB Connection Failures
- **Date Fixed:** November 18, 2024
- **Root Cause:** MongoDB not started before backend
- **Solution:** Updated docs with proper startup sequence
- **Affected Files:** `DEV-SETUP.md`, `docker-compose.yml`
- **Testing:** Verified connection in development mode

#### Bug #4: Hard-Coded Admin Paths
- **Date Fixed:** November 19, 2024
- **Root Cause:** Admin routes hard-coded throughout codebase
- **Solution:** Created centralized config system with environment variables
- **Affected Files:** 24 files across components and pages
- **Testing:** Created validation script to detect hard-coded paths

#### Bug #5: Conflicting ESLint Configurations
- **Date Fixed:** November 19, 2024
- **Root Cause:** Multiple overlapping ESLint config files
- **Solution:** Consolidated to single `.eslintrc.cjs`
- **Affected Files:** `.eslintrc.cjs`, removed `.eslintrc.json` and `eslint.config.cjs`
- **Testing:** Verified consistent linting behavior

---

### 🎯 Testing & Validation Performed

#### 1. **Build Validation**
```bash
cd prrc-next-app
npm run build
# ✅ Build completes without errors
# ✅ TypeScript compilation successful
# ✅ No ESLint errors
```

#### 2. **Type Checking**
```bash
npm run type-check
# ✅ No TypeScript errors
# ✅ All types resolved correctly
```

#### 3. **Route Validation**
```bash
npm run check-admin-routes
# ✅ No hard-coded admin paths detected
# ✅ All routes use centralized config
```

#### 4. **Git Hooks Testing**
```bash
# Made test commit with intentional error
git commit -m "test"
# ✅ Pre-commit hook caught ESLint error
# ✅ Commit blocked until fixed
# ✅ Auto-formatting applied
```

#### 5. **Service Startup**
```bash
docker compose up
# ✅ MongoDB starts successfully
# ✅ Backend connects to MongoDB
# ✅ Frontend starts successfully
# ✅ No port conflicts
# ✅ Health check passes
```

---

### 📦 Dependencies Added/Updated (Nov 12-24)

#### Frontend DevDependencies
```json
{
  "husky": "^8.0.3",           // Git hooks
  "lint-staged": "^15.0.2",    // Selective linting
  "prettier": "^3.0.0",        // Code formatting
  "concurrently": "^8.2.0"     // Run multiple commands
}
```

#### No Breaking Dependency Changes
- All existing dependencies maintained
- Only dev tooling additions
- No version updates requiring code changes

---

### 🔐 Security Improvements (Nov 12-24)

#### 1. **Admin Seeding Security**
- Added `SEED_ADMIN` flag to control admin creation
- Only creates admin if database is empty
- Credentials in environment variables (not hard-coded)
- Production deployments should disable `SEED_ADMIN`

#### 2. **Environment Variable Protection**
- All sensitive configs in `.env` files
- `.env.example` templates contain no secrets
- `.gitignore` prevents committing `.env` files

#### 3. **Pre-Commit Security Checks**
- Linting catches potential security issues
- Type checking prevents unsafe operations
- Automated validation before code reaches repository

---

### 📊 Migration Notes (For Existing Deployments)

If upgrading from version 2.0.2 (Nov 13) to 2.1.3 (Nov 19):

#### Step 1: Update Environment Variables
Add new variables to `.env.local`:
```env
NEXT_PUBLIC_FRONTEND_ADMIN_PATH=/AdministrationPage
NEXT_PUBLIC_BACKEND_ADMIN_PATH=/admin-panel
NEXT_PUBLIC_FRONTEND_ADMIN_LOGIN=/admin/login
NEXT_PUBLIC_ROUTER_MODE=app
```

#### Step 2: Install New Dependencies
```bash
cd prrc-next-app
npm install
```

#### Step 3: Setup Git Hooks (Optional)
```bash
npm run prepare
# or
bash ../scripts/setup-husky.sh
```

#### Step 4: Verify Configuration
```bash
npm run check-admin-routes  # Should show no hard-coded paths
npm run type-check           # Should pass
npm run lint                 # Should pass
```

#### Step 5: Test Application
```bash
docker compose up
# Verify services start correctly
# Test admin panel access
# Verify frontend loads
```

#### Breaking Changes: NONE
All changes are backward compatible. Existing deployments continue to work without modifications.

---

### 🎓 Key Learnings & Best Practices

#### 1. **Centralized Configuration**
- **Lesson:** Hard-coded values create maintenance burden
- **Solution:** Single config file with environment variable support
- **Benefit:** Admin paths changeable without code modifications

#### 2. **Pre-Commit Hooks**
- **Lesson:** Code quality issues slip through without automation
- **Solution:** Git hooks enforce standards automatically
- **Benefit:** Consistent code quality, fewer review cycles

#### 3. **Initialization Order Matters**
- **Lesson:** Loading sequence of configs affects runtime behavior
- **Solution:** Load environment variables before any config imports
- **Benefit:** Reliable startup, no intermittent failures

#### 4. **Service Consolidation**
- **Lesson:** Multiple services for same purpose cause conflicts
- **Solution:** Single canonical service with clear responsibility
- **Benefit:** Predictable behavior, easier debugging

---

### 🔮 Future Recommendations

Based on changes made Nov 12-24, recommended next steps:

#### 1. **Testing Suite** (Priority: High)
```bash
# Unit tests for components
# Integration tests for API routes
# E2E tests for critical user flows
```

#### 2. **CI/CD Pipeline** (Priority: High)
- Automated build on push
- Run type checking, linting, tests
- Deploy to staging automatically
- Production deployment with approval

#### 3. **Monitoring & Logging** (Priority: Medium)
- Error tracking (Sentry, LogRocket)
- Performance monitoring (Datadog, New Relic)
- User analytics (Google Analytics, Mixpanel)

#### 4. **Documentation Site** (Priority: Low)
- Dedicated docs website
- Interactive API documentation
- Video tutorials for common tasks

---

### 📞 Support & Resources

#### Quick Reference Files
- **Setup Instructions:** `README.md`
- **Full Documentation:** This file (`DOCUMENTATION.md`)
- **Change History:** `CHANGELOG.md`
- **Commands:** `QUICK-REFERENCE.md`

#### Common Issues & Solutions
- **Port conflicts:** See Troubleshooting section above
- **MongoDB issues:** Check `DEV-SETUP.md`
- **Type errors:** Run `npm run type-check` for details
- **Build failures:** Clear cache with `scripts/clear-next-cache.sh`

#### Getting Help
1. Check error logs: `docker compose logs`
2. Review relevant documentation file
3. Verify environment variables are correct
4. Ensure MongoDB is running
5. Check Node.js version (requires 20+)

---

**Last Updated:** November 25, 2024
**Version:** 2.1.3 (documenting changes from 2.0.2)
**Period Documented:** November 12-24, 2024
