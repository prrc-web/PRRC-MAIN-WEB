# PRRC Next.js Application — DEPRECATED

This README was merged into the root `README.md` and `/prrc-next-app/specs/spec.md` per the project's documentation policy.

See the canonical docs:

- Root README: `../README.md`
- Spec: `./spec.md`
- Tasks: `./tasks.md`

This file is kept for backward compatibility only and should not be used as a primary source of truth.

## Project Status: ✅ CMS SEPARATED - WORKING SOLUTION

**PayloadCMS now runs as a standalone server** (as of 2025-11-11)

The admin panel compatibility issues have been resolved by running PayloadCMS as an independent Express server, completely separate from the Next.js application.

### Architecture

```
┌─────────────────────────┐
│  Next.js Frontend       │  Fetches data via
│  localhost:3000         │  ────────────────┐
│  (Public website)       │                  │
└─────────────────────────┘                  │
                                             ▼
                               ┌─────────────────────────┐
                               │  PayloadCMS Server      │
                              │  localhost:3001         │
                               │  (Admin + REST API)     │
                               └─────────────────────────┘
                                             │
                                             ▼
                               ┌─────────────────────────┐
                               │  MongoDB Atlas          │
                               └─────────────────────────┘
```

### What Works ✅

- Public-facing website (`http://localhost:3000`)
- Homepage and all content pages
- Navigation and layouts
- Static content rendering
- **PayloadCMS Admin Panel** (`http://localhost:3001/admin-panel`)
- **REST API for content management** (`http://localhost:3001/api`)
- **PayloadCMS Admin Panel** (`http://localhost:3001/admin-panel`)
- **REST API for content management** (`http://localhost:3001/api`)
- User authentication
- Content management functionality

### Project Locations

This repository contains the **Next.js frontend only**. The CMS server is in a sibling directory:

```
PRRC-MAIN-WEB/
├── prrc-next-app/          # This repository (Next.js)
└── payload-backend/        # CMS and API server
```

**To run the complete system, you need both directories.**

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- MongoDB Atlas account (or local MongoDB)
- npm or yarn package manager

### Complete System Setup

This application works with a **separate PayloadCMS server**. You need to set up both:

#### 1. PayloadCMS Server (Content Management)

```bash
cd ../payload-backend
npm install
```

Configure `.env`:

```env
MONGODB_URI=your_mongodb_connection_string
PAYLOAD_SECRET=your_secret_key_here
PORT=3001
```

Start the CMS:

```bash
npm run dev
```

Access admin at: `http://localhost:3001/admin-panel`

Alternatively, use the frontend login at: `http://localhost:3000/admin/login` to authenticate and then access the backend admin UI. To access the backend admin UI after signing in, go to `http://localhost:3001/admin-panel`. To create new users (admin only), use `http://localhost:3000/admin/signup`.

Important: To avoid a Next.js router conflict we keep the frontend `/admin` route for the Next app (this is the website admin page). The Payload backend admin UI is now hosted at `/admin-panel` and reachable directly at `http://localhost:3001/admin-panel` or via the same-origin nginx proxy when running the full stack. If you run Next locally without nginx, use `/admin/login` to sign in and then go to the backend admin at `http://localhost:3001/admin-panel`.

Configuration: To avoid duplication between App Router and Pages Router, we added `NEXT_PUBLIC_ROUTER_MODE` and centralized admin paths in `NEXT_PUBLIC_FRONTEND_ADMIN_PATH` and `NEXT_PUBLIC_BACKEND_ADMIN_PATH` (see `.env.example`). You can set `NEXT_PUBLIC_ROUTER_MODE=app` or `NEXT_PUBLIC_ROUTER_MODE=pages` to indicate which router is being targeted by integrations referencing the admin routes.

#### 2. Next.js Frontend (This Repository)

```bash
cd prrc-next-app
npm install
```

Configure `.env`:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3001
CMS_API_URL=http://localhost:3001/api
```

Start the frontend:

```bash
npm run dev
```

If you've added or updated the `devDependencies` in `package.json`, run:

```bash
npm install
npm run prepare   # install husky pre-commit hooks (optional, recommended)
```

Access website at: `http://localhost:3000`

### Why Two Servers?

PayloadCMS 3.x has compatibility issues when embedded in Next.js 15.x. Running it as a standalone Express server eliminates all module conflicts. See [CHANGELOG.md](../CHANGELOG.md) for technical details.

### Fetching CMS Data

In your Next.js pages/components:

```javascript
// Server-side
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/api/researchers');
  const { docs } = await res.json();
  return { props: { researchers: docs } };
}

// Client-side
const res = await fetch('http://localhost:3001/api/media');
const { docs } = await res.json();
```

## Technology Stack

- **Framework**: Next.js 15.0.3 (Pages Router)
- **React**: 19.x
- **CMS**: PayloadCMS 3.56.0 (runs as part of the backend at port 3001)
- **Database**: MongoDB
- **UI Library**: NextUI
- **Styling**: Tailwind CSS

**Note**: PayloadCMS dependencies are NOT in this package.json. The CMS now runs from the backend in `/payload-backend`.

## Project Structure

```
prrc-next-app/
├── src/
│   └── pages/                    # Next.js Pages Router
│       ├── index.js              # Homepage
│       ├── administration.js     # Admin info page
│       ├── staff.js              # Staff page
│       ├── education.js          # Education page
│       ├── publications.js       # Publications page
│       ├── research.js           # Research page
│       └── _app.js               # App wrapper
│
├── components/
│   ├── dashboard/                # Shared UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   └── layouts/                  # Page layouts
│
├── public/                       # Static assets
│   ├── images/
│   └── documents/
│
├── specs/                        # Project documentation
│   ├── spec.md                   # System architecture
│   ├── changelog.md              # All changes and decisions
│   ├── tasks.md                  # Task tracking
│   ├── plan.md                   # Implementation phases
│   └── docpolicy.md              # Documentation policy (moved to spec.md)
│
├── next.config.mjs               # Next.js configuration
├── .env                          # Environment variables (not in git)
└── package.json                  # Frontend dependencies only
```

**PayloadCMS** now lives in `../payload-backend/` with the rest of the backend/server code.

### Important: App Router vs Pages Router

This project contains both Next.js App Router (`src/app`) and Pages Router (`src/pages`). To avoid confusion:

- The **Frontend site** uses Pages Router pages within `src/pages` (e.g., `/AdministrationPage`, `/StaffPage`).
- The **Payload Admin RSC integration** lives in `src/app/(payload)` and is not a full frontend route — it enables Payload's React Server Component integration only.
- If you want to change which router to use for admin-related features, set `NEXT_PUBLIC_ROUTER_MODE` in `.env` to `app` or `pages` and make sure your integration codepoints write to `src/app` or `src/pages` accordingly. We recommend keeping the frontend pages under `src/pages` and keeping Payload UI at `BACKEND_ADMIN` (`/admin-panel`).

All references to the frontend admin path are centralized in `src/lib/config.ts` to avoid duplication and confusion between these router styles. Update `NEXT_PUBLIC_FRONTEND_ADMIN_PATH` if you want to publish the frontend admin under a different path.

## Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Run production server
npm run lint         # Run ESLint
```

## Key Features

### Research Areas

- Enhanced Oil Recovery (EOR)
- Carbon Capture, Utilization & Storage (CCUS)
- Geothermal Energy
- Advanced Materials
- Petrophysics
- Reservoir Characterization

### Content Sections

- **Homepage**: PRRC objectives and latest news
- **Administration**: Center leadership and contact info
- **Staff**: Researcher profiles and expertise
- **Education**: Programs and educational resources
- **Publications**: Research papers and reports
- **Research**: Active projects and focus areas
- **Safety**: Safety protocols and guidelines

## Current Technical Status

### ✅ Resolved: PayloadCMS Separation (2025-11-11)

**Solution**: PayloadCMS now runs as a standalone Express server.

- PayloadCMS Server: `http://localhost:3001`
- Admin Panel: `http://localhost:3001/admin-panel`
- REST API: `http://localhost:3001/api/*`

This eliminates all compatibility issues between PayloadCMS and Next.js. See [CHANGELOG.md](../CHANGELOG.md) for implementation details.

### API Integration

The Next.js app fetches content from the CMS via REST API:

```javascript
// Example: Fetch researchers
const response = await fetch('http://localhost:3001/api/researchers');
const { docs } = await response.json();
```

### Known Minor Issues

- TypeScript auto-detection warnings (project is JavaScript-only - can be ignored)
- Missing Sharp package for image optimization (install if needed: `npm install sharp`)

### Removed Issues

- ~~PayloadCMS admin panel non-functional~~ ✅ Fixed with separation
- ~~API routes failing~~ ✅ Fixed with separation
- ~~Module conflicts~~ ✅ Fixed with separation
- ~~Mixed Router patterns~~ ✅ Removed App Router entirely

## MongoDB Setup

This project requires MongoDB. You can use:

1. **MongoDB Atlas** (recommended for production)
   - Create free cluster at mongodb.com
   - Whitelist your IP
   - Create database user
   - Get connection string

2. **Local MongoDB**

   ```bash
   # macOS
   brew install mongodb-community
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod
   ```

## Environment Configuration

### Required Environment Variables

```env
# Next.js Server
NEXT_PUBLIC_SERVER_URL=http://localhost:3001

# PayloadCMS API Endpoint (points to separate server)
CMS_API_URL=http://localhost:3001/api
```

**Note**: MongoDB and PayloadCMS configuration now lives in `../payload-backend/.env`

## Development Notes

### Code Style

- JavaScript only (no TypeScript)
- JSDoc for type annotations
- PascalCase for React components
- camelCase for other files
- Minimal code comments (explain WHY, not WHAT)

### Documentation Policy

All project documentation lives in `/specs`:

- `spec.md` - Architecture and design decisions
- `changelog.md` - All updates and changes
- `tasks.md` - Task tracking
- `plan.md` - Implementation roadmap

See [specs/spec.md](./specs/spec.md#documentation-policy) for details.

### Prettier Configuration

Code formatting is handled by Prettier with custom rules:

- 2 spaces indentation
- Single quotes
- No semicolons
- No trailing commas

## Docker Deployment

````bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

### Run only the frontend (no DB)

If you already run MongoDB (locally or via the separate `payload-backend` compose), you can start only the frontend service to avoid starting the DB container:

```bash
# start only the frontend service defined as `node`
docker compose up node
```
docker compose up node
```

```env
MONGODB_URI=mongodb://host.docker.internal:27017/prrc
```

To bring up the mongo container inside this compose, run it with the `db` profile:

```bash
docker compose up --profile db
```

Note: if `prrc-next-app` previously created containers that exposed port 3001 then stopping the payload backend won't allow `prrc-next-app` to use 3001 anyway — change of `node` port to 3000 in `docker-compose.yml` prevents this conflict.

This keeps `docker compose up` lightweight (frontend-only) while still letting you opt-in to the DB if desired.

### Connect to a mongo from the backend compose

If you prefer to use the `payload-backend` compose that already starts a mongo container, you can run both compose files together so services are created on the same network:

```bash
docker compose -f ../payload-backend/docker-compose.yml -f docker-compose.yml up
```

This makes the `mongo` host reachable from the Next container using the `mongo` hostname defined in the backend compose file.

```

Nginx reverse proxy is configured in `nginx.conf`.

## Contributing

1. Review [specs/spec.md](./specs/spec.md) for architecture
2. Check [specs/tasks.md](./specs/tasks.md) for current work
3. Update [CHANGELOG.md](../CHANGELOG.md) with all changes
4. Follow code style conventions
5. Test locally before committing

## Support

For questions or issues:

- Review documentation in `/specs`
- Check [CHANGELOG.md](../CHANGELOG.md) for known issues
- Contact PRRC IT team

## License

Proprietary - Petroleum Recovery Research Center, New Mexico Tech

---

**Last Updated**: November 11, 2025
**Status**: Production Ready - CMS Separated
**Next.js Version**: 15.0.3
**PayloadCMS**: 3.56.0 (standalone server on port 3001)
**Architecture**: Decoupled CMS + Frontend
```
````
