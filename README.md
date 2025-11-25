# PRRC Web Application

## 🚀 Quick Start

### Start Everything with Docker

```bash
cd PRRC-MAIN-WEB
docker-compose up
```

Access your applications:

- **Frontend**: http://localhost:3000

* **Admin Panel** (Payload backend): http://localhost:3001/admin-panel

- **API**: http://localhost:3001/api

## Development Setup

This repo contains two services that run independently in development:

- `prrc-next-app` (Next.js frontend) — port 3000
- `payload-backend` (Payload CMS) — port 3001

You can use Docker Compose to run both, or run each service locally for development. See also `/specs/spec.md` for full architecture and flows.

### Start with Docker (recommended)

```bash
cd PRRC-MAIN-WEB
docker compose up
```

### Local development (without Docker)

1. Start MongoDB

```bash
# Using Docker
docker run -d --name prrc-mongodb-dev -p 27017:27017 mongo:7

# Or using Homebrew on macOS
brew services start mongodb-community@7.0
```

2. Start the backend (Payload CMS):

```bash
cd payload-backend
npm install
npm run dev
```

3. Start the frontend (Next.js):

````bash
cd prrc-next-app
npm install
npm run dev

Alternatively, you can run both services concurrently (non-docker) using the repository script from the repo root:

```bash
cd PRRC-MAIN-WEB
npm run start:dev
````

````

### Running Tests

Backend API e2e tests use Jest + Supertest and can run against an ephemeral MongoDB instance via docker-compose.test.yml:

```bash
cd payload-backend
npm install
npm run test:e2e:docker
````

You can also run `npm test` in the backend to execute tests against a running instance at `http://localhost:3001`.

### First Time Setup

1. **Create environment files:**

   ```bash

   ```

- Access your applications (Nginx reverse-proxy will serve both on :3000):

- **Frontend** (via Nginx): http://localhost:3000

  - **Admin Panel** (via Nginx proxy): http://localhost:3000/admin-panel

  - Nginx will proxy `http://localhost:3000/admin-panel/*` to the Payload backend (`payload-backend:3001`).

  cd ../prrc-next-app
  cp .env.example .env.local

  ```

  ```

2. **Start services:**

   ```bash
   cd ..
   docker-compose up
   ```

3. **Create admin user:**
   - Visit http://localhost:3001/admin-panel
   - Register your first admin user

## 📁 Project Structure

```
PRRC-MAIN-WEB/
├── payload-backend/        # CMS Backend (TypeScript)
├── prrc-next-app/          # Frontend (TypeScript)
├── docker-compose.yml      # Development setup
└── (production orchestration is handled via deploy scripts or cloud pipelines)
```

## 📚 Documentation

### Quick Reference

Common commands and troubleshooting tips are now consolidated here. Use this for starting services, viewing logs, and quick checks.

```bash
# Start all services
docker compose up

# Start in background
docker compose up -d

# Stop all services
docker compose down
```

- **Check backend health**: curl http://localhost:3001/health
- **View logs**: docker compose logs -f

**Further docs**

- **[CHANGELOG.md](./CHANGELOG.md)** - Detailed list of changes
- **Detailed system specs & architecture:** `prrc-next-app/specs/spec.md`
  **Documentation policy:**

Only these files are considered canonical project documentation: `CHANGELOG.md`, `README.md`, and the `/prrc-next-app/specs/` set of `spec.md`, `tasks.md`, and `plan.md`. Other `.md` documents have been merged and deprecated — please update canonical docs when making changes.

## 🔧 Development

### Without Docker

**Backend:**

```bash
cd payload-backend
npm install
npm run dev
```

**Frontend:**

````bash
cd prrc-next-app
npm install
npm run dev
### Seeding

To seed an initial admin user during development set these in `payload-backend/.env` or in your environment:

```bash
SEED_ADMIN=true
ADMIN_EMAIL=you@example.com
ADMIN_PASSWORD=supersecret
````

This will create a first admin when Payload initializes if there are no users.

````

### Type Checking

```bash
# Frontend
cd prrc-next-app
npm run type-check

# Backend
cd payload-backend
npm run build
````

## 🐳 Production Deployment

```bash
docker compose up -d  # starts services defined in docker-compose.yml
```

## 🏗️ Architecture

Two independent services:

- **Next.js Frontend** (Port 3000) - User interface
- **Payload Backend** (Port 3001) - CMS and API
- **MongoDB** (Port 27017) - Database

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Payload CMS 3.56** - Headless CMS
- **MongoDB 7** - Database
- **Docker** - Containerization

## 📝 Version

**Current Version**: 2.0.0 (TypeScript Two-App Architecture)

## 🆘 Support

- Check `prrc-next-app/specs/spec.md` for detailed developer documentation and API reference
- Review [CHANGELOG.md](./CHANGELOG.md) for recent changes
- Check logs: `docker-compose logs`

---

**PRRC Internal Use Only** | Last Updated: November 12, 2024
