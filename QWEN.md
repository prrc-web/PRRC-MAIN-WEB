# PRRC-MAIN-WEB Project Context

## Project Overview

**PRRC Web Application** is a monolithic Next.js 15 application with Payload CMS 3.56 integrated directly within the Next.js App Router. It serves as a research lab management platform with features for staff profiles, document management, events, and media handling.

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Docker Network                            │
│  ┌─────────────┐     ┌──────────────────────┐               │
│  │   Nginx     │────▶│   Next.js :3000      │               │
│  │   :80       │     │   + Payload CMS      │               │
│  └─────────────┘     └──────────┬───────────┘               │
│         │                       │                            │
│         │                       ▼                            │
│         │              ┌─────────────────┐                   │
│         └─────────────▶│   MongoDB :27017│                   │
│                        └─────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

### Tech Stack

| Component        | Technology              |
| ---------------- | ----------------------- |
| Framework        | Next.js 15 (App Router) |
| CMS              | Payload CMS 3.56        |
| Language         | TypeScript 5.9          |
| Database         | MongoDB 7               |
| Styling          | Tailwind CSS + NextUI   |
| Testing          | Jest                    |
| Containerization | Docker + Docker Compose |

## Directory Structure

```
PRRC-MAIN-WEB/
├── prrc-next-app/          # Main Next.js + Payload application
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   ├── collections/    # Payload CMS collections (Users, Documents, Staff, etc.)
│   │   ├── components/     # React components
│   │   ├── lib/            # Utility libraries
│   │   ├── types/          # TypeScript type definitions
│   │   └── payload.config.ts
│   ├── tests/              # Jest test suites
│   └── package.json
├── specs/                  # Canonical documentation
│   ├── spec.md             # System architecture & topography
│   ├── plan.md             | Global roadmap
│   ├── tasks.md            # Active & completed tasks
│   └── standards/          # Development standards
├── nginx/                  # Nginx reverse proxy configuration
├── scripts/                # Utility scripts
├── logs/                   # Log output directory
├── archive/                # Deprecated documentation
└── docker-compose.yml      # Docker orchestration
```

## Building and Running

### Prerequisites

- Docker & Docker Compose
- Node.js 18+ (for local development)
- MongoDB 7 (if running without Docker)

### Quick Start (Docker - Recommended)

```bash
# Start all services (MongoDB, Next.js, Nginx)
docker compose up

# Start in background
docker compose up -d

# View logs
docker compose logs -f

# Stop all services
docker compose down
```

**Access Points:**

- Frontend & Admin Panel: http://localhost:3000
- Payload Admin: http://localhost:3000/admin
- API: http://localhost:3000/api

### Local Development (Without Docker)

```bash
# 1. Start MongoDB
docker run -d --name prrc-mongodb-dev -p 27017:27017 mongo:7

# 2. Setup environment
cd prrc-next-app
cp .env.example .env.local
# Edit .env.local with your configuration

# 3. Install dependencies & run
npm install
npm run dev
```

### Key Commands

| Command                  | Description                       |
| ------------------------ | --------------------------------- |
| `npm run dev`            | Start Next.js dev server          |
| `npm run build`          | Build production bundle           |
| `npm run start`          | Start production server           |
| `npm run lint`           | Run ESLint                        |
| `npm run lint:fix`       | Auto-fix ESLint issues            |
| `npm run format`         | Format with Prettier              |
| `npm run type-check`     | TypeScript type checking          |
| `npm run test`           | Run Jest tests                    |
| `npm run generate:types` | Generate Payload TypeScript types |

### Root-Level Scripts

| Command                      | Description                                    |
| ---------------------------- | ---------------------------------------------- |
| `npm run dev:docker`         | Start Docker development environment           |
| `npm run clean:next`         | Clear Next.js cache                            |
| `npm run generate:types:log` | Generate types in background (logs to `logs/`) |

## Payload CMS Collections

| Collection | Slug        | Description                                                 |
| ---------- | ----------- | ----------------------------------------------------------- |
| Users      | `users`     | User accounts with RBAC (admin, researcher roles)           |
| Staff      | `staff`     | Staff/researcher profiles with headshots, bios              |
| Documents  | `documents` | Research papers with workflow (draft → pending → published) |
| Events     | `events`    | Calendar event management                                   |
| Resumes    | `resumes`   | Resume/CV uploads                                           |
| Media      | `media`     | File upload handling                                        |

## Development Conventions

### Documentation Standards

**Canonical Documentation** (only these are authoritative):

- `README.md` - Quick start & reference
- `CHANGELOG.md` - Version history
- `specs/spec.md` - Architecture & system topography
- `specs/plan.md` - Global roadmap
- `specs/tasks.md` - Task tracking

**Documentation Policy:**

- All architectural specs live in `<root>/specs/`
- Deprecated docs go to `archive/`
- No `spec.md` files in subdirectories

### Script Execution Protocol

**Standard 002: Background Execution**

1. Run long-running processes in **background/detached mode**
2. Direct script output to `logs/` directory
3. Never run scripts >30 seconds in attached mode
4. Monitor via log files, not direct output

Example:

```bash
# Use the logging version for type generation
npm run generate:types:log  # outputs to logs/generate-types.log
```

### Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier (auto-applied via lint-staged on commit)
- **Linting**: ESLint with Next.js config
- **Imports**: Path aliases `@/*` → `./src/*`

### Git Hooks

- **pre-commit**: lint-staged runs Prettier on staged files
- **prepare**: Husky install (auto-run on `npm install`)

## Environment Variables

### Required (`.env.local`)

```bash
# API Configuration
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_API_URL_INTERNAL=http://localhost:3000

# Payload CMS
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000

# Database
MONGODB_URI=mongodb://localhost:27017/prrc

# App
PORT=3000
NODE_ENV=development
```

## Testing

```bash
cd prrc-next-app
npm install
npm test
```

Tests are located in `prrc-next-app/tests/` and use Jest with TypeScript support.

## Troubleshooting

### Port Conflicts

```bash
# Check what's using port 3000
lsof -i :3000

# Kill process if needed
kill -9 <PID>
```

### MongoDB Connection Issues

```bash
# Check MongoDB container
docker compose ps mongodb

# Restart MongoDB
docker compose restart mongodb

# View MongoDB logs
docker compose logs mongodb
```

### Next.js Cache Issues

```bash
npm run clean:next
# Or manually
rm -rf prrc-next-app/.next
```

### Payload Type Generation

If types are out of sync:

```bash
npm run generate:types:log  # Background execution
# Check logs/generate-types.log for output
```

## Version

**Current**: 2.1.0 (Integrated Payload CMS Architecture)

## Support & Resources

- **Architecture Details**: `specs/spec.md`
- **API Reference**: http://localhost:3000/api
- **Health Check**: `curl http://localhost:3000/api/health`
- **Logs**: `docker compose logs -f`

---

_Last Updated: March 24, 2026_
