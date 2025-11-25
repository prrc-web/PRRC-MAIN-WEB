# Migration Guide: v1.x → v2.0.0

## Overview

This guide will help you migrate from the old monolithic architecture to the new two-app TypeScript architecture.

## ⚠️ IMPORTANT: Before You Start

### Backup Your Data

```bash
# Backup MongoDB database
mongodump --uri="mongodb://localhost:27017/prrc" --out=./backup-$(date +%Y%m%d)

# Backup .env files
cp prrc-next-app/.env prrc-next-app/.env.backup
```

### What Changed?

**Old Architecture (v1.x):**

```
prrc-next-app/
├── payload.config.mjs        # Payload integrated in Next.js
├── src/
│   ├── app/
│   │   └── api/[...slug]/    # Payload API routes
│   └── pages/                # JavaScript files
└── ...
```

**New Architecture (v2.0.0):**

```
PRRC-MAIN-WEB/
├── payload-backend/          # NEW: Separate backend
│   └── src/
│       ├── server.ts         # Express server
│       └── payload.config.ts # Payload config
├── prrc-next-app/            # Frontend only
│   └── src/
│       ├── app/              # TypeScript files
│       ├── pages/            # TypeScript files
│       ├── lib/              # NEW: API client
│       └── types/            # NEW: Type definitions
└── docker-compose.yml        # NEW: Orchestration
```

## Step-by-Step Migration

### Step 1: Pull Latest Code

```bash
cd PRRC-MAIN-WEB
git pull origin main
```

### Step 2: Set Up Backend Environment

```bash
cd payload-backend
cp .env.example .env
```

Edit `payload-backend/.env`:

```env
# MongoDB Connection
MONGODB_URI=mongodb://mongodb:27017/prrc

# Payload Secret (GENERATE A NEW ONE FOR PRODUCTION!)
PAYLOAD_SECRET=your-32-character-secret-key-here

# Public URL
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001

# Server Port
PORT=3001

# Environment
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### Step 3: Set Up Frontend Environment

```bash
cd ../prrc-next-app
cp .env.example .env.local
```

Edit `prrc-next-app/.env.local`:

```env
# API URL (for browser)
NEXT_PUBLIC_API_URL=http://localhost:3001

# API URL (for server-side - Docker)
NEXT_PUBLIC_API_URL_INTERNAL=http://payload-backend:3001

# Frontend Port
PORT=3000

# Environment
NODE_ENV=development
```

### Step 4: Install Dependencies

**Option A: Using Docker (Recommended)**

```bash
cd ..
docker-compose build
```

**Option B: Local Installation**

```bash
# Backend
cd payload-backend
npm install

# Frontend
cd ../prrc-next-app
npm install
```

### Step 5: Start Services

**With Docker:**

```bash
cd PRRC-MAIN-WEB
docker-compose up
```

**Without Docker:**

```bash
# Terminal 1: Backend
cd payload-backend
npm run dev

# Terminal 2: Frontend
cd prrc-next-app
npm run dev
```

### Step 6: Verify Services

1. **Check Backend:** http://localhost:3001/health

   - Should return: `{"status":"ok","timestamp":"..."}`

2. **Check Admin:** http://localhost:3001/admin-panel

   - Should show Payload admin login

3. **Check Frontend:** http://localhost:3000
   - Should show your website

### Step 7: Login or Create Admin User

If you have existing users in the database, they will still work. Otherwise:

1. Go to http://localhost:3001/admin-panel
2. Click "Create your first user"
3. Fill in the form
4. Login

## Code Changes Required

### Updating API Calls

**Old Way (v1.x):**

```javascript
// Direct Payload API in Next.js
import { getPayload } from "payload";
const payload = await getPayload({ config });
const researchers = await payload.find({ collection: "researchers" });
```

**New Way (v2.0.0):**

```typescript
// Use API client
import { getResearchers } from "@/lib/payload-api";
const researchers = await getResearchers();
```

### Custom API Calls

**Old Way:**

```javascript
const res = await fetch("/api/researchers");
const data = await res.json();
```

**New Way:**

```typescript
import { fetchFromPayload } from "@/lib/payload-api";
const data = await fetchFromPayload("researchers");
```

### Type Definitions

You now have TypeScript interfaces available:

```typescript
import type { Researcher, Media } from "@/types/payload-types";

const researcher: Researcher = {
  id: "123",
  name: "John Doe",
  title: "Research Scientist",
  contact: {
    email: "john@example.com",
  },
};
```

## Common Issues & Solutions

### Issue: Port Already in Use

**Error:** `Port 3000/3001/27017 is already in use`

**Solution:**

```bash
# Find process using port
lsof -i :3000

# Kill it
kill -9 <PID>

# Or change port in docker-compose.yml
```

### Issue: MongoDB Connection Failed

**Error:** `MongoServerError: connect ECONNREFUSED`

**Solution:**

```bash
# Check MongoDB is running
docker-compose ps mongodb

# Restart MongoDB
docker-compose restart mongodb

# Check logs
docker-compose logs mongodb
```

### Issue: CORS Errors

**Error:** `CORS policy: No 'Access-Control-Allow-Origin' header`

**Solution:**
Check `FRONTEND_URL` in `payload-backend/.env` matches your frontend URL.

### Issue: Type Errors

**Error:** TypeScript compilation errors

**Solution:**

```bash
# Reinstall dependencies
cd prrc-next-app
rm -rf node_modules package-lock.json
npm install

# Check types
npm run type-check
```

## Rollback Plan

If you need to rollback to v1.x:

```bash
# Stop new services
docker-compose down

# Checkout previous version
git checkout v1.x

# Restore database from backup
mongorestore ./backup-YYYYMMDD

# Restore .env
cp prrc-next-app/.env.backup prrc-next-app/.env

# Start old version
npm run dev
```

## Testing After Migration

### 1. Test Backend

```bash
curl http://localhost:3001/health
# Should return: {"status":"ok",...}
```

### 2. Test API

```bash
curl http://localhost:3001/api/researchers
# Should return: {"docs":[...],...}
```

### 3. Test Admin

- Visit http://localhost:3001/admin-panel
- Login with your credentials
- Try creating/editing content

### 4. Test Frontend

- Visit http://localhost:3000
- Check all pages load correctly
- Verify data displays properly

## Production Migration

For production environments:

1. **Schedule maintenance window**
2. **Backup production database**
3. **Test migration on staging first**
4. **Use production Docker Compose:**
   ```bash
   docker compose up -d
   ```
5. **Generate strong secrets:**
   ```bash
   openssl rand -base64 32
   ```
6. **Update DNS if needed**
7. **Monitor logs:**
   ```bash
   docker-compose logs -f
   ```

## Benefits After Migration

✅ **Type Safety** - Catch errors at compile time
✅ **Better Performance** - Services can scale independently
✅ **Easier Maintenance** - Clear separation of concerns
✅ **Better DX** - Full IDE autocomplete
✅ **Production Ready** - Docker orchestration
✅ **Future Proof** - Modern architecture

## Need Help?

1. Check [DOCUMENTATION.md](./DOCUMENTATION.md)
2. Review [CHANGELOG.md](./CHANGELOG.md)
3. Check Docker logs: `docker-compose logs`
4. Check service health: `docker-compose ps`

---

**Migration Support:** Contact your development team if you encounter issues not covered in this guide.

**Last Updated:** November 12, 2024
