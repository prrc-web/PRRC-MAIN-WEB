# PRRC Next.js Application Specification

## Documentation Policy

All project documentation must follow the project doc policy. Canonical docs are:

- `CHANGELOG.md` (root)
- `README.md` (root)
- `prrc-next-app/specs/spec.md` (this file)
- `prrc-next-app/specs/tasks.md`
- `prrc-next-app/specs/plan.md`

Avoid duplicate docs in other locations. When merging, move content to the canonical files and delete the originals. Keep docs concise and single-sourced.

## Project Overview

This is a Next.js web application for the Petroleum Recovery Research Center (PRRC), a division of New Mexico Tech. The application serves as a public-facing website for the research center, providing information about their research activities, staff, publications, education programs, and administrative details.

### Project Identity

**CMS Server**: `/payload-backend` (sibling directory)

- **Purpose**: Public-facing website for PRRC
- **Target Audience**: Researchers, industry professionals, students, and the general public interested in petroleum recovery research
- **Organization**: PRRC (Petroleum Recovery Research Center), New Mexico Tech
  The application is built with the following technologies:

- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Database**: MongoDB (for storing content and user data)
- **Containerization**: Docker (for deployment)

## Architecture

The application uses a **decoupled architecture** with separate frontend and backend services:

### System Architecture (Updated 2025-11-11)

```
┌─────────────────────────────────────┐
│     Next.js Frontend (Port 3000)    │
│  ─────────────────────────────────  │
│  - Pages Router (main website)      │
│  - React components                 │
│  - Static assets                    │
│  - Client-side interactions         │
└─────────────────────────────────────┘
              │
              │ HTTP REST API calls
cd ../payload-backend
┌─────────────────────────────────────┐
│  PayloadCMS Server (Port 3001)      │
│  ─────────────────────────────────  │
│  - Express server                   │
│  - Admin UI (/admin)                │
│  - REST API (/api)                  │
│  - Authentication                   │
└─────────────────────────────────────┘
              │
              │ MongoDB Driver
              ▼
┌─────────────────────────────────────┐
│         MongoDB Atlas               │
│  ─────────────────────────────────  │
│  - Content storage                  │
│  - User accounts                    │
│  - Media metadata                   │
└─────────────────────────────────────┘
```

### Why Decoupled?

PayloadCMS 3.x has module system conflicts when embedded in Next.js 15.x App Router. Running it as a standalone Express server provides:

1. **Zero dependency conflicts** - Each service manages its own dependencies
2. **Independent deployment** - Deploy CMS and frontend to different servers
3. **Cleaner separation** - True headless CMS architecture
4. **Better scalability** - Scale frontend and CMS independently
5. **Simpler development** - No complex Next.js/CMS integration issues

### Communication Pattern

The Next.js frontend communicates with the CMS via standard REST API calls:

```javascript
// Server-side data fetching
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3001/api/researchers');
  const { docs: researchers } = await response.json();
  return { props: { researchers } };
}

// Client-side data fetching
const response = await fetch('http://localhost:3001/api/media');
const { docs: media } = await response.json();
```

### Service Locations

- **Next.js App**: `/prrc-next-app` (this repository)
- **CMS Server**: `/payload-backend` (sibling directory)

### Admin login from the frontend

The project includes a lightweight frontend login at `/admin/login` which proxies to the Payload backend login endpoint (`/api/users/login`) and sets the backend auth cookie. After a successful login the browser is redirected to `http://localhost:3001/admin-panel` (the Payload Admin UI). There is also an admin-only signup UI at `/admin/signup` that allows an existing admin to create additional users via the backend API.

### Admin routing and configuration (2025-11-19)

To avoid duplication and confusion between App Router (RSC) and Pages Router implementations, admin paths are centralized in `src/lib/config.ts` and configurable via environment variables. The configuration values are available at runtime via `process.env` and include:

- NEXT_PUBLIC_FRONTEND_ADMIN_PATH — The path for the frontend admin UI (default `/AdministrationPage`).
- NEXT_PUBLIC_BACKEND_ADMIN_PATH — The path for the Payload backend admin UI (default `/admin-panel`).
- NEXT_PUBLIC_FRONTEND_ADMIN_LOGIN — The path for the frontend login UI (default `/admin/login`).
- NEXT_PUBLIC_ROUTER_MODE — The router mode the project is targeting: `app` or `pages` (used for documentation and integrations)

Code that performs redirects or renders frontend admin links should use the exported `ADMIN_ROUTES` constants from `src/lib/config.ts` instead of hard-coded strings. This makes it safe to change routes and keeps the codebase consistent between router patterns.

> Note: The canonical development ports are: Next.js frontend → 3000, Payload CMS backend (admin + API) → 3001. If you need to change these, update `.env` in `payload-backend` and the `next dev` command in `prrc-next-app/package.json`.

### Conversion Summary (condensed)

This project was converted from a monolithic Next.js + Payload setup to a two-app TypeScript architecture. Key achievements:

- Split frontend and backend for independent deployment
- Converted all JavaScript files to TypeScript + added types for Payload collections
- Moved Payload into the `payload-backend` service (Express server)
- Added development `docker-compose.yml` with health checks and volume mounts
- Reorganized documentation: consolidated docs into `README.md`, `CHANGELOG.md`, and `prrc-next-app/specs/`

Both services must be running for full functionality.

### Key Directories

**Next.js Frontend (`/prrc-next-app`):**

- `src/pages` - Next.js routes and page components (Pages Router only)
- `components` - Reusable UI components organized by functionality
- `components/layouts` - Page layout components
- `components/dashboard` - Shared UI components (Navbar, Footer, etc.)
- `public` - Static assets (images, documents)
- `specs` - Project documentation

**PayloadCMS Server (`/payload-backend`):**

- `server.js` - Express server initialization
- `payload.config.mjs` - CMS collections and configuration
- `public/media` - Uploaded media files

## Functional Requirements

### Core Pages

1. **Homepage** - Main landing page with PRRC objectives and news
2. **Administration** - Administrative information about the center
3. **Staff** - Information about PRRC personnel
4. **Education** - Educational programs and resources
5. **Publications** - Research publications and documents
6. **Research** - Current research projects and focus areas
7. **Safety** - Safety protocols and information

### Research Areas

The application showcases research areas including:

- Enhanced oil recovery
- CCUS (Carbon Capture, Utilization and Storage)
- Geothermal energy
- Advanced materials
- Petrophysics
- Reservoir characterization

## Technical Requirements

### Development Environment

- **Runtime**: Node.js (version 20.x)
- **Package Manager**: npm
- **Database**: MongoDB Atlas (recommended) or local MongoDB

### Services Required

The application consists of two separate services:

1. **Next.js Frontend** (Port 3000)
   - Public-facing website
   - React components and pages
   - Static asset serving

2. **PayloadCMS Server** (Port 3001)
   - Content management admin UI
   - REST API for content delivery
   - User authentication
   - Media file storage

### Deployment

- **Frontend**: Can be deployed to Vercel, Netlify, or any Node.js host
- **CMS**: Requires Node.js server (VPS, DigitalOcean, AWS EC2, etc.)
- **Database**: MongoDB Atlas for production
- **Reverse Proxy**: Nginx for production SSL and domain routing
- **Process Manager**: PM2 or systemd to keep CMS server running

## Implementation Details

### Frontend Features

- Responsive design using Next.js and Tailwind CSS
- Modern UI components using NextUI
- Server-side rendering for improved performance and SEO
- Static site generation capabilities
- Component-based architecture for maintainability

### CMS Integration

- PayloadCMS runs as standalone Express server (separate from Next.js)
- Communication via REST API over HTTP
- Collections: Users, Researchers, Media
- MongoDB as the database backend
- Admin UI accessible at dedicated port (3001)

### API Endpoints (CMS Server)

- `GET /api/researchers` - List all researchers
- `GET /api/researchers/:id` - Get specific researcher
- `POST /api/researchers` - Create researcher (auth required)
- `PATCH /api/researchers/:id` - Update researcher (auth required)
- `DELETE /api/researchers/:id` - Delete researcher (auth required)
- `GET /api/media` - List media files
- `POST /api/media` - Upload media (auth required)
- `GET /api/papers` - List published papers
- `GET /api/newsletters` - List newsletters
- `POST /api/papers` - Create a paper (auth required)
- `POST /api/users/login` - User authentication
- `GET /api/users/me` - Get current user

### Development Conventions

- Prettier for code formatting (configured in `.prettierrc`)
- Standard React/Next.js patterns
- Tailwind CSS for styling with utility classes
- PascalCase for component names
- camelCase for other modules
- File names use PascalCase for React components and camelCase for other modules

### Environment Configuration

The application uses environment variables split between two services:

**Next.js Frontend (`.env`):**

- `NEXT_PUBLIC_SERVER_URL` - Public URL for the Next.js app
- `CMS_API_URL` - URL of the PayloadCMS API server

**Additional Notes (CMS):**

- `SEED_ADMIN=true` when set in `payload-backend/.env` will attempt to create the first admin user on startup using `ADMIN_EMAIL` and `ADMIN_PASSWORD`. Set these only in dev.
- New collections: `papers` and `newsletters`. The frontend has helpers in `src/lib/payload-api.ts` to fetch and create these records.

## Consolidated Documentation (from DOCUMENTATION.md)

### Getting Started

Prerequisites: Docker Desktop, Node.js 20+, Git.

1. Set up environment variables for backend and frontend using provided .env examples.
2. Start services locally with:

```bash
docker compose up
```

3. Create the first admin user via `http://localhost:3001/admin-panel`.

### Development Guide Highlights

Run the backend locally (without Docker):

```bash
cd payload-backend
npm install
npm run dev
```

Run the frontend locally:

```bash
cd prrc-next-app
npm install
npm run dev
```

### API Reference (summary)

Base URL: `http://localhost:3001/api`

Common endpoints:

- `GET /api/researchers` - list
- `POST /api/media` - upload

See `src/lib/payload-api.ts` for client functions used by the frontend.

### Deployment Notes

Use `docker compose up -d` for local runs. Production deployment should be orchestrated via CI/CD and not by a repository production compose file.

### Troubleshooting

- Port conflicts: use `lsof -i :PORT` to find blocking processes.
- MongoDB issues: verify `docker compose ps mongodb` and check `docker compose logs mongodb`.

**PayloadCMS Server (`../payload-backend/.env`):**

- `MONGODB_URI` - Connection string for MongoDB database
- `PAYLOAD_SECRET` - Secret key for JWT tokens (min 32 characters)
- `PORT` - Server port (default 3001)

### Build and Deployment Process

**Development:**

1. Start CMS Server: `cd ../payload-backend && npm run dev`
2. Start Next.js: `cd prrc-next-app && npm run dev`

**Production:**

**CMS Server:**

```bash
cd ../payload-backend
npm install
npm start  # Or use PM2: pm2 start server.js
```

**Next.js Frontend:**

```bash
cd prrc-next-app
npm install
npm run build
npm run start  # Or deploy to Vercel/Netlify
```

**Docker Deployment (Optional):**

- Each service can be containerized separately
- Use Docker Compose to orchestrate both services
- Nginx reverse proxy for SSL and routing

## Security Considerations

- MongoDB security best practices
- PayloadCMS authentication system
- Environment variable management for sensitive information
- Standard Next.js security practices

## Scalability Considerations

- Component-based architecture for easy maintenance and extension
- CMS integration for non-technical content updates
- Docker containerization for consistent deployment
- Server-side rendering for improved performance
