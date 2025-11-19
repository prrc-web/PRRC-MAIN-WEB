# PRRC Next.js Application

A Next.js web application for the Petroleum Recovery Research Center (PRRC), New Mexico Tech.

## Project Status: ✅ CMS SEPARATED - WORKING SOLUTION

**PayloadCMS now runs as a standalone server** (as of 2025-11-11)

The admin panel compatibility issues have been resolved by running PayloadCMS as an independent Express server, completely separate from the Next.js application.

### Architecture

```
┌─────────────────────────┐
│  Next.js Frontend       │  Fetches data via
│  localhost:3001         │  ────────────────┐
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

- Public-facing website (`http://localhost:3001`)
- Homepage and all content pages
- Navigation and layouts
- Static content rendering
- **PayloadCMS Admin Panel** (`http://localhost:3001/admin`)
- **REST API for content management** (`http://localhost:3001/api`)
- **PayloadCMS Admin Panel** (`http://localhost:3001/admin`)
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

Access admin at: `http://localhost:3001/admin`

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

Access website at: `http://localhost:3001`

### Why Two Servers?

PayloadCMS 3.x has compatibility issues when embedded in Next.js 15.x. Running it as a standalone Express server eliminates all module conflicts. See [Changelog](./specs/changelog.md) for technical details.

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
│   └── docpolicy.md              # Documentation policy
│
├── next.config.mjs               # Next.js configuration
├── .env                          # Environment variables (not in git)
└── package.json                  # Frontend dependencies only
```

**PayloadCMS** now lives in `../payload-backend/` with the rest of the backend/server code.

## Available Scripts

```bash
npm run dev          # Start development server (localhost:3001)
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
- Admin Panel: `http://localhost:3001/admin`
- REST API: `http://localhost:3001/api/*`

This eliminates all compatibility issues between PayloadCMS and Next.js. See [Changelog](./specs/changelog.md#solution-implemented-standalone-cms-server-2025-11-11) for implementation details.

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

See [specs/docpolicy.md](./specs/docpolicy.md) for details.

### Prettier Configuration

Code formatting is handled by Prettier with custom rules:

- 2 spaces indentation
- Single quotes
- No semicolons
- No trailing commas

## Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

Nginx reverse proxy is configured in `nginx.conf`.

## Contributing

1. Review [specs/spec.md](./specs/spec.md) for architecture
2. Check [specs/tasks.md](./specs/tasks.md) for current work
3. Update [specs/changelog.md](./specs/changelog.md) with all changes
4. Follow code style conventions
5. Test locally before committing

## Support

For questions or issues:

- Review documentation in `/specs`
- Check [specs/changelog.md](./specs/changelog.md) for known issues
- Contact PRRC IT team

## License

Proprietary - Petroleum Recovery Research Center, New Mexico Tech

---

**Last Updated**: November 11, 2025  
**Status**: Production Ready - CMS Separated  
**Next.js Version**: 15.0.3  
**PayloadCMS**: 3.56.0 (standalone server on port 3001)  
**Architecture**: Decoupled CMS + Frontend
