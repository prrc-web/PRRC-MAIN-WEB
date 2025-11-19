# PRRC Web Application

## 🚀 Quick Start

### Start Everything with Docker

```bash
cd PRRC-MAIN-WEB
docker-compose up
```

Access your applications:

- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3001/admin
- **API**: http://localhost:3001/api

### First Time Setup

1. **Create environment files:**

   ```bash
   cd payload-backend
   cp .env.example .env

   cd ../prrc-next-app
   cp .env.example .env.local
   ```

2. **Start services:**

   ```bash
   cd ..
   docker-compose up
   ```

3. **Create admin user:**
   - Visit http://localhost:3001/admin
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

## 🔧 Development

### Without Docker

**Backend:**

```bash
cd payload-backend
npm install
npm run dev
```

**Frontend:**

```bash
cd prrc-next-app
npm install
npm run dev
```

### Type Checking

```bash
# Frontend
cd prrc-next-app
npm run type-check

# Backend
cd payload-backend
npm run build
```

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
