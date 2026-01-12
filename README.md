# PRRC Web Application

## 🚀 Quick Start

### Start Everything with Docker

```bash
cd PRRC-MAIN-WEB
docker-compose up
```

Access your application:

- **Frontend & Admin Panel**: http://localhost:3000
- **Payload Admin**: http://localhost:3000/admin
- **API**: http://localhost:3000/api

## Development Setup

This is a **monolithic Next.js application** with Payload CMS 3.0 integrated directly within the Next.js App Router.

See `/specs/spec.md` for full architecture and data flows.

### Start with Docker (recommended)

```bash
cd PRRC-MAIN-WEB
docker compose up
```

### Local development (without Docker)

1. **Start MongoDB:**

```bash
# Using Docker
docker run -d --name prrc-mongodb-dev -p 27017:27017 mongo:7

# Or using Homebrew on macOS
brew services start mongodb-community@7.0
```

2. **Start the Next.js application:**

```bash
cd prrc-next-app
npm install
npm run dev
```

### Running Tests

```bash
cd prrc-next-app
npm install
npm test
```

### First Time Setup

1. **Create environment file:**

   ```bash
   cd prrc-next-app
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

2. **Start services:**

   ```bash
   cd ..
   docker-compose up
   ```

3. **Create admin user:**
   - Visit http://localhost:3000/admin
   - Register your first admin user

## 📁 Project Structure

```
PRRC-MAIN-WEB/
├── prrc-next-app/          # Next.js Application with Integrated Payload CMS
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   ├── components/     # React components
│   │   └── collections/    # Payload CMS collections
│   └── payload.config.ts   # Payload CMS configuration
├── docker-compose.yml      # Development setup
├── nginx.conf              # Nginx reverse proxy config
└── specs/                  # Global documentation
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

- **Check application health**: curl http://localhost:3000/api/health
- **View logs**: docker compose logs -f

**Further docs**

- **[CHANGELOG.md](./CHANGELOG.md)** - Detailed list of changes
- **Detailed system specs & architecture:** `specs/spec.md`

**Documentation policy:**

Only these files are considered canonical project documentation: `CHANGELOG.md`, `README.md`, and the `/specs/` set of `spec.md`, `tasks.md`, and `plan.md`. Other `.md` documents have been merged and deprecated — please update canonical docs when making changes.

## 🔧 Development

### Type Checking

```bash
cd prrc-next-app
npm run type-check
```

### Building

```bash
cd prrc-next-app
npm run build
```

## 🐳 Production Deployment

```bash
docker compose up -d  # starts services defined in docker-compose.yml
```

## 🏗️ Architecture

Monolithic Next.js application with integrated Payload CMS:

- **Next.js 15 with Payload CMS** (Port 3000) - Frontend, Admin UI, and API
- **MongoDB** (Port 27017) - Database
- **Nginx** (Port 80) - Reverse proxy (production)

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Payload CMS 3.56** - Headless CMS
- **MongoDB 7** - Database
- **Docker** - Containerization

## 📝 Version

**Current Version**: 2.1.0 (Integrated Payload CMS Architecture)

## 🆘 Support

- Check `specs/spec.md` for detailed developer documentation and API reference
- Review [CHANGELOG.md](./CHANGELOG.md) for recent changes
- Check logs: `docker-compose logs`

---

**PRRC Internal Use Only** | Last Updated: January 6, 2026
