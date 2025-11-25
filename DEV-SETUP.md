# Development Setup Guide — DEPRECATED

This document has been merged into the root `README.md`. Please consult `README.md` for setup, testing and Docker commands.

## Prerequisites Check

Before starting, ensure you have:

- [ ] Docker Desktop installed and running (recommended)
      OR
- [ ] MongoDB installed locally
- [ ] Node.js 20+ installed

## Quick Start Options

### Option 1: Docker Compose (Easiest) ✅ RECOMMENDED

```bash
# 1. Start Docker Desktop

# 2. Navigate to project
cd /Users/punkdad/Desktop/PRRC-MAIN-WEB/PRRC-MAIN-WEB

# 3. Start backend with MongoDB
docker-compose up payload-backend

# This automatically starts MongoDB and the backend
# Access: http://localhost:3001
```

### Option 2: Local Development

**Step 1: Start MongoDB**

Using Docker:

```bash
docker run -d --name prrc-mongodb-dev -p 27017:27017 mongo:7
```

OR using Homebrew:

```bash
brew services start mongodb-community@7.0
```

**Step 2: Start Backend**

```bash
cd /Users/punkdad/Desktop/PRRC-MAIN-WEB/PRRC-MAIN-WEB/payload-backend

# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

**Step 3: Start Frontend (separate terminal)**

````bash
cd /Users/punkdad/Desktop/PRRC-MAIN-WEB/PRRC-MAIN-WEB/prrc-next-app

# Install dependencies (if not done)
npm install

# Start development server
npm run dev

> Tip: If you are contributing to the repo and want to enable pre-commit linting and formatting hooks, run the following in the `prrc-next-app` folder:

```bash
cd prrc-next-app
npm install
npm run prepare  # installs husky hooks and enables pre-commit checks
````

Alternatively, at the repository root you can run `scripts/setup-husky.sh` to prepare the sample husky configuration for `prrc-next-app` (macOS / Linux).
This script now prepares hooks for both `prrc-next-app` (frontend) and `payload-backend` (backend).

````

## Testing the Backend

### 1. Check Health Endpoint

```bash
curl http://localhost:3001/health
````

Expected response:

```json
{
  "status": "ok",
  "timestamp": "2024-11-12T21:00:00.000Z"
}
```

### 2. Access Admin Panel

Open browser: http://localhost:3001/admin-panel

- First time: Create admin user
- Subsequent: Login with credentials

### 3. Test API Endpoints

**Get all researchers:**

```bash
curl http://localhost:3001/api/researchers
```

**Get all media:**

```bash
curl http://localhost:3001/api/media
```

### 4. Check Logs

Watch backend logs in real-time:

```bash
cd /Users/punkdad/Desktop/PRRC-MAIN-WEB/PRRC-MAIN-WEB/payload-backend
npm run dev
# Watch the console output
```

## Common Issues

### Issue: "Cannot connect to MongoDB"

**Solution:**

```bash
# Check if MongoDB is running
docker ps | grep mongo
# OR
brew services list | grep mongodb

# Restart MongoDB
docker restart prrc-mongodb-dev
# OR
brew services restart mongodb-community@7.0
```

### Issue: "Port 3001 already in use"

**Solution:**

```bash
# Find what's using the port
lsof -i :3001

# Kill the process
kill -9 <PID>
```

### Issue: TypeScript errors

**Solution:**

```bash
cd payload-backend
rm -rf node_modules package-lock.json
npm install
```

## Development Workflow

### Making Backend Changes

1. Edit files in `payload-backend/src/`
2. Server auto-restarts (using tsx watch)
3. Check console for errors
4. Test changes at http://localhost:3001

### Making Frontend Changes

1. Edit files in `prrc-next-app/src/`
2. Page auto-reloads
3. View at http://localhost:3000

### Database Changes

Add/modify collections in:

```
payload-backend/src/payload.config.ts
```

Server will auto-restart and apply changes.

## Useful Commands

```bash
# Backend
cd payload-backend
npm run dev           # Start development server
npm run build         # Build for production
npm start             # Run production build
npx tsc --noEmit      # Type check

# Frontend
cd prrc-next-app
npm run dev           # Start development server
npm run build         # Build for production
npm start             # Run production build
npm run type-check    # Type check

# Docker
docker-compose up                    # Start all services
docker-compose up payload-backend    # Start backend only
docker-compose logs -f               # Follow logs
docker-compose down                  # Stop all services
docker-compose restart payload-backend  # Restart backend
```

## Services & Ports

| Service        | Port  | URL                               |
| -------------- | ----- | --------------------------------- |
| Frontend       | 3000  | http://localhost:3000             |
| Backend API    | 3001  | http://localhost:3001/api         |
| Backend Admin  | 3001  | http://localhost:3001/admin-panel |
| Backend Health | 3001  | http://localhost:3001/health      |
| MongoDB        | 27017 | mongodb://localhost:27017/prrc    |

## Environment Variables

### Backend (.env)

```env
MONGODB_URI=mongodb://localhost:27017/prrc
PAYLOAD_SECRET=development-secret-key-change-in-production-12345678
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
PORT=3000
NODE_ENV=development

# Optional: Admin and router configuration
NEXT_PUBLIC_FRONTEND_ADMIN_PATH=/AdministrationPage
NEXT_PUBLIC_BACKEND_ADMIN_PATH=/admin-panel
NEXT_PUBLIC_FRONTEND_ADMIN_LOGIN=/admin/login
NEXT_PUBLIC_ROUTER_MODE=app
```

## Next Steps

1. ✅ Get MongoDB running
2. ✅ Start backend server
3. ✅ Test health endpoint
4. ✅ Create admin user
5. ✅ Test API endpoints
6. ✅ Start frontend
7. ✅ Test full application

## Need Help?

- Check console logs for errors
- Review `prrc-next-app/specs/spec.md` for detailed docs and API reference
- See `README.md` for quick-start commands and running locally
- Ensure MongoDB is running and accessible

---

**Current Status:** This file is deprecated — see `README.md` for current setup and commands.
