# Quick Reference Card

## 🚀 Common Commands

### Start/Stop Services

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# Restart a service
docker-compose restart [service-name]
```

### View Logs

```bash
# All services
docker-compose logs

# Follow logs (live)
docker-compose logs -f

# Specific service
docker-compose logs payload-backend
docker-compose logs nextjs-frontend
docker-compose logs mongodb
```

### Check Status

```bash
# Container status
docker-compose ps

# Backend health
curl http://localhost:3001/health

# API test
curl http://localhost:3001/api/researchers
```

## 🔧 Development Workflows

### Making Code Changes

**Frontend changes:**

1. Edit files in `prrc-next-app/src/`
2. Changes auto-reload (if Docker volumes mounted)
3. View at http://localhost:3000

**Backend changes:**

1. Edit files in `payload-backend/src/`
2. Server auto-restarts
3. Check logs: `docker-compose logs payload-backend`

### Type Checking

```bash
# Frontend
cd prrc-next-app && npm run type-check

# Backend
cd payload-backend && npx tsc --noEmit
```

### Database Operations

```bash
# Backup
docker exec prrc-mongodb mongodump --out=/data/backup

# Restore
docker exec prrc-mongodb mongorestore /data/restore

# Reset (WARNING: Deletes all data)
docker-compose down -v
docker-compose up
```

## 📡 URLs

| Service  | URL                               | Purpose              |
| -------- | --------------------------------- | -------------------- |
| Frontend | http://localhost:3000             | Public website       |
| Admin    | http://localhost:3001/admin-panel | CMS admin panel      |
| API      | http://localhost:3001/api         | REST API             |
| Health   | http://localhost:3001/health      | Backend health check |
| MongoDB  | mongodb://localhost:27017         | Database connection  |

## 🔑 Environment Variables

### Backend (.env)

```env
MONGODB_URI=mongodb://mongodb:27017/prrc
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
PORT=3000
```

## 📁 Project Structure

```
PRRC-MAIN-WEB/
├── payload-backend/           # Backend
│   ├── src/
│   │   ├── server.ts         # Entry point
│   │   └── payload.config.ts # CMS config
│   └── .env                  # Backend env vars
│
├── prrc-next-app/            # Frontend
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   ├── pages/            # Next.js Pages Router
│   │   ├── lib/              # Utilities
│   │   └── types/            # TypeScript types
│   └── .env.local            # Frontend env vars
│
├── docker-compose.yml        # Dev Docker Compose
└── (production compose removed from the repository; use CI/CD or a deployment manifest)
```

## 🐛 Troubleshooting Quick Fixes

| Problem               | Solution                                           |
| --------------------- | -------------------------------------------------- |
| Port in use           | `lsof -i :3000` then `kill -9 <PID>`               |
| Container won't start | `docker-compose down && docker-compose up --build` |
| Type errors           | `npm install && npm run type-check`                |
| MongoDB connection    | `docker-compose restart mongodb`                   |
| Clear cache           | `docker system prune -a`                           |
| Reset database        | `docker-compose down -v && docker-compose up`      |

## 🔄 Update Dependencies

```bash
# Frontend
cd prrc-next-app
npm update

# Backend
cd ../payload-backend
npm update

# Rebuild containers
docker-compose build --no-cache
```

## 🎯 API Usage

### Fetch Data

```typescript
import { getResearchers } from "@/lib/payload-api";
const data = await getResearchers();
```

### Custom Request

```typescript
import { fetchFromPayload } from "@/lib/payload-api";
const data = await fetchFromPayload("researchers", {
  method: "POST",
  body: JSON.stringify({ name: "John" }),
});
```

## 📊 Monitoring

```bash
# Container stats
docker stats

# Disk usage
docker system df

# Service health
docker-compose ps
curl http://localhost:3001/health
```

## 🚀 Deployment

### Production

```bash
# Build and start
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs -f
```

## 📚 Documentation Files

- `README.md` - Quick start guide
- `DOCUMENTATION.md` - Complete technical docs
- `CHANGELOG.md` - All changes
- `MIGRATION.md` - Upgrade guide
- `QUICK-REFERENCE.md` - This file

## 🆘 Emergency Commands

```bash
# Stop everything
docker-compose down

# Force rebuild
docker-compose build --no-cache

# Remove all containers and volumes (DANGER!)
docker-compose down -v

# View all Docker processes
docker ps -a

# Kill specific container
docker kill <container-id>
```

---

**Keep this handy for daily development!**
