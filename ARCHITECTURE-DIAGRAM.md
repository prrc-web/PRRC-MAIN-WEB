# PRRC Web Application - Current Architecture Flow

**Last Updated:** November 25, 2024  
**Architecture Type:** Integrated Monolith (Next.js + Payload CMS)  
**Deployment Model:** Docker Compose with Nginx Reverse Proxy

---

## 🏗️ High-Level Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER'S BROWSER                          │
│                    http://localhost:3000                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTP Requests
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     NGINX REVERSE PROXY                         │
│                    Container: prrc-nginx                        │
│                      Port: 80 (→ 3000)                          │
│                                                                 │
│  Routes all traffic to Next.js application                     │
│  - Frontend pages                                               │
│  - API requests                                                 │
│  - Admin panel                                                  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Proxied to internal port 3000
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│              NEXT.JS 15 APPLICATION (Monolith)                  │
│           Container: prrc-nextjs-frontend                       │
│                  Internal Port: 3000                            │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  │              INTEGRATED PAYLOAD CMS                       │ │
│  │           (Running inside Next.js)                        │ │
│  │                                                           │ │
│  │  Configuration: /prrc-next-app/payload.config.ts         │ │
│  │  Admin Routes: /app/(payload)/admin/[[...segments]]      │ │
│  │  API Routes: /api/* (Payload REST API)                   │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │         NEXT.JS FRONTEND PAGES                            │ │
│  │                                                           │ │
│  │  App Router:   /src/app/*                                │ │
│  │  Pages Router: /src/pages/*                              │ │
│  │  Components:   /components/*, /src/components/*          │ │
│  │  API Client:   /src/lib/payload-api.ts                   │ │
│  │  Config:       /src/lib/config.ts                        │ │
│  └───────────────────────────────────────────────────────────┘ │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ MongoDB Driver Connection
                             │ (via Mongoose)
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      MONGODB DATABASE                           │
│                   Container: prrc-mongodb                       │
│                       Port: 27017                               │
│                                                                 │
│  Collections:                                                   │
│  - users                                                        │
│  - media                                                        │
│  - resumes                                                      │
│  - events                                                       │
│  - documents                                                    │
│  - researchers                                                  │
│  - papers (if added)                                            │
│  - newsletters (if added)                                       │
│                                                                 │
│  Volume: mongodb_data (persistent)                             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Request Flow Diagrams

### 1. Frontend Page Request Flow

```
User visits http://localhost:3000/ResearchPage
          ▼
    Nginx (Port 80)
          ▼
    Proxies to Next.js (Port 3000)
          ▼
    Next.js Pages Router
          ▼
    /src/pages/ResearchPage.tsx renders
          ▼
    Component fetches data via payload-api.ts
          ▼
    API call to http://localhost:3000/api/researchers
          ▼
    Payload CMS REST API handler
          ▼
    MongoDB query via Mongoose
          ▼
    Data returned to component
          ▼
    Page rendered with data
          ▼
    HTML sent to browser
```

### 2. Admin Panel Access Flow

```
Admin visits http://localhost:3000/admin-panel
          ▼
    Nginx (Port 80)
          ▼
    Proxies to Next.js (Port 3000)
          ▼
    Next.js App Router catches route
          ▼
    /src/app/(payload)/admin/[[...segments]]/page.tsx
          ▼
    Payload Admin UI loaded (embedded in Next.js)
          ▼
    Admin authenticates via Payload Auth
          ▼
    Session stored in MongoDB
          ▼
    Admin Panel Interface displayed
          ▼
    All admin actions go through Payload API
          ▼
    Changes written to MongoDB
```

### 3. API Request Flow (External Client)

```
Client makes API call: GET /api/researchers
          ▼
    Nginx (Port 80)
          ▼
    Proxies to Next.js (Port 3000)
          ▼
    Next.js catches /api/* route
          ▼
    Payload CMS REST API handler
          ▼
    Checks authentication (if required)
          ▼
    Queries MongoDB via Mongoose
          ▼
    Returns JSON response
          ▼
    Response proxied back through Nginx
          ▼
    Client receives data
```

---

## 📁 Directory Structure with Request Routing

```
PRRC-MAIN-WEB/
│
├── prrc-next-app/                   ← SINGLE APPLICATION CONTAINER
│   │
│   ├── payload.config.ts            ← PAYLOAD CMS CONFIGURATION
│   │   └── Configures:
│   │       • Database connection (MongoDB)
│   │       • Collections (Users, Media, etc.)
│   │       • Admin user model
│   │       • API routes (/api/*)
│   │       • Rich text editor
│   │
│   ├── src/
│   │   │
│   │   ├── app/                     ← NEXT.JS APP ROUTER (Primary)
│   │   │   ├── layout.tsx           → Root layout for all pages
│   │   │   │
│   │   │   ├── (payload)/           ← PAYLOAD ADMIN ROUTES
│   │   │   │   └── admin/
│   │   │   │       └── [[...segments]]/
│   │   │   │           └── page.tsx  → Payload Admin UI entry point
│   │   │   │                           (Handles /admin-panel/*)
│   │   │   │
│   │   │   └── api/                 ← CUSTOM API ROUTES (if any)
│   │   │       └── [...slug]/
│   │   │           └── route.ts     → Forwards to Payload API
│   │   │
│   │   ├── pages/                   ← NEXT.JS PAGES ROUTER (Legacy)
│   │   │   ├── index.tsx            → Homepage (/)
│   │   │   ├── ResearchPage.tsx     → Research section (/ResearchPage)
│   │   │   ├── EducationPage.tsx    → Education (/EducationPage)
│   │   │   ├── StaffPage.tsx        → Staff directory (/StaffPage)
│   │   │   ├── AdministrationPage.tsx → Frontend admin dashboard
│   │   │   │                          (/AdministrationPage)
│   │   │   ├── _app.tsx             → App wrapper with global state
│   │   │   ├── _document.tsx        → HTML document template
│   │   │   │
│   │   │   └── api/                 ← PAGES API ROUTES
│   │   │       └── hello.ts         → Example API endpoint
│   │   │
│   │   ├── lib/
│   │   │   ├── config.ts            ← CENTRALIZED CONFIG
│   │   │   │   • ADMIN_ROUTES constants
│   │   │   │   • ROUTER mode settings
│   │   │   │   • Environment-based configuration
│   │   │   │
│   │   │   └── payload-api.ts       ← API CLIENT
│   │   │       • fetchResearchers()
│   │   │       • fetchMedia()
│   │   │       • Generic fetch wrappers
│   │   │
│   │   ├── collections/             ← PAYLOAD COLLECTION SCHEMAS
│   │   │   ├── Users/               → User collection config
│   │   │   ├── Media/               → Media collection config
│   │   │   ├── Resumes/             → Resume collection config
│   │   │   ├── Events/              → Events collection config
│   │   │   └── Documents/           → Documents collection config
│   │   │
│   │   ├── components/              → Reusable React components
│   │   ├── types/                   → TypeScript type definitions
│   │   └── styles/                  → Global CSS styles
│   │
│   ├── components/                  ← LEGACY COMPONENTS (outside src/)
│   │   ├── AdminCards/
│   │   ├── dashboard/
│   │   ├── headers/
│   │   └── layouts/
│   │
│   ├── .env.example                 ← ENVIRONMENT TEMPLATE
│   ├── package.json                 ← Dependencies & scripts
│   ├── tsconfig.json                ← TypeScript config
│   ├── next.config.mjs              ← Next.js config
│   └── Dockerfile.dev               ← Development container build
│
├── nginx/                           ← REVERSE PROXY CONFIG
│   ├── Dockerfile                   → Build nginx container
│   └── nginx.conf                   → Routing rules
│
├── docker-compose.yml               ← ORCHESTRATION CONFIG
│   └── Defines 3 services:
│       • mongodb (database)
│       • nextjs-frontend (app + Payload)
│       • nginx (reverse proxy)
│
└── scripts/                         ← UTILITY SCRIPTS
    ├── setup-husky.sh               → Install git hooks
    ├── clear-next-cache.sh          → Clear build cache
    └── check-admin-routes.js        → Validate config usage
```

---

## 🔀 Route Mapping

### External URL → Internal Handler

| User Accesses | Nginx Proxies To | Next.js Handles With | Final Handler |
|---------------|------------------|----------------------|---------------|
| `http://localhost:3000/` | `nextjs-frontend:3000/` | Pages Router | `/src/pages/index.tsx` |
| `http://localhost:3000/ResearchPage` | `nextjs-frontend:3000/ResearchPage` | Pages Router | `/src/pages/ResearchPage.tsx` |
| `http://localhost:3000/admin-panel` | `nextjs-frontend:3000/admin-panel` | App Router | `/src/app/(payload)/admin/[[...segments]]/page.tsx` |
| `http://localhost:3000/api/researchers` | `nextjs-frontend:3000/api/researchers` | Payload API | Payload REST handler → MongoDB |
| `http://localhost:3000/api/media` | `nextjs-frontend:3000/api/media` | Payload API | Payload REST handler → MongoDB |
| `http://localhost:3000/AdministrationPage` | `nextjs-frontend:3000/AdministrationPage` | Pages Router | `/src/pages/AdministrationPage.tsx` |

---

## 🌐 Network Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    Docker Network: prrc-network               │
│                          (Bridge Mode)                        │
│                                                               │
│  ┌────────────────┐      ┌──────────────────┐      ┌──────┐ │
│  │   prrc-nginx   │──────│ prrc-nextjs-     │──────│ prrc-│ │
│  │   (Port 80)    │      │   frontend       │      │mongo-│ │
│  │                │      │  (Port 3000)     │      │  db  │ │
│  │  Exposed:      │      │                  │      │      │ │
│  │  0.0.0.0:3000  │      │  Internal only   │      │27017 │ │
│  │  → 80          │      │                  │      │      │ │
│  └────────────────┘      └──────────────────┘      └──────┘ │
│         ▲                         │                    ▲     │
│         │                         │                    │     │
│         │                         └────────────────────┘     │
│         │                      MongoDB connection           │
│         │                   mongodb://mongodb:27017/prrc    │
│         │                                                    │
└─────────┼────────────────────────────────────────────────────┘
          │
          │ External access from host
          │
     ┌────▼────┐
     │  HOST   │
     │  OS     │
     │(macOS)  │
     └─────────┘
```

---

## 🔄 Startup Sequence

```
1. docker compose up
        │
        ▼
2. Create network: prrc-network
        │
        ▼
3. Start MongoDB container
        │
        ├─→ Create volume: mongodb_data
        ├─→ Initialize database: prrc
        ├─→ Health check: ping database
        └─→ Ready on port 27017
        │
        ▼
4. Build & Start Next.js container
        │
        ├─→ Install dependencies (npm install)
        ├─→ Load environment variables
        ├─→ Initialize Payload CMS
        │   ├─→ Connect to MongoDB
        │   ├─→ Register collections
        │   ├─→ Setup admin routes
        │   └─→ Create API endpoints
        ├─→ Start Next.js dev server
        └─→ Ready on internal port 3000
        │
        ▼
5. Build & Start Nginx container
        │
        ├─→ Copy nginx.conf
        ├─→ Setup reverse proxy rules
        ├─→ Wait for nextjs-frontend
        └─→ Ready on port 80 (exposed as 3000)
        │
        ▼
6. All services running
        │
        ├─→ Access frontend: http://localhost:3000
        ├─→ Access admin: http://localhost:3000/admin-panel
        └─→ Access API: http://localhost:3000/api/*
```

---

## 🔐 Authentication Flow

```
Admin Login Flow:
──────────────────

1. Admin visits /admin-panel
        ▼
2. Payload Admin UI loads
        ▼
3. Login form displayed
        ▼
4. Admin submits credentials
        ▼
5. POST /api/users/login
        ▼
6. Payload verifies credentials
        │
        ├─→ Query MongoDB for user
        ├─→ Compare password hash
        └─→ Create JWT token
        ▼
7. JWT stored in HTTP-only cookie
        ▼
8. Admin redirected to dashboard
        ▼
9. Subsequent requests include JWT
        ▼
10. Payload middleware validates JWT
        ▼
11. Admin can perform authorized actions
```

---

## 📊 Data Flow Example: Fetching Researchers

```
Component Render:
─────────────────

src/pages/ResearchPage.tsx
        │
        │ useEffect(() => { ... })
        │
        ▼
Call: fetchResearchers()
  (from src/lib/payload-api.ts)
        │
        ▼
Fetch: http://localhost:3000/api/researchers
        │
        ▼
Nginx receives request
        │
        ▼
Proxy to: nextjs-frontend:3000/api/researchers
        │
        ▼
Next.js routes to Payload API handler
        │
        ▼
Payload API handler executes:
  - Check access control
  - Build MongoDB query
        │
        ▼
MongoDB query via Mongoose:
  db.researchers.find({})
        │
        ▼
MongoDB returns documents
        │
        ▼
Payload formats response:
  {
    docs: [...],
    totalDocs: 10,
    page: 1
  }
        │
        ▼
Response sent through Next.js
        │
        ▼
Nginx proxies response back
        │
        ▼
fetchResearchers() receives data
        │
        ▼
Component state updated
        │
        ▼
ResearchPage.tsx re-renders with data
        │
        ▼
User sees researchers list
```

---

## 🎯 Key Architecture Points

### ✅ **Single Application Container**
- Next.js and Payload CMS run in the same process
- No separate backend service needed
- Simplified deployment and development

### ✅ **Integrated Payload CMS**
- Payload runs embedded in Next.js
- Configuration: `payload.config.ts` at app root
- Admin UI served via App Router: `/app/(payload)/`
- API served via Payload's built-in REST handlers: `/api/*`

### ✅ **Dual Router Support**
- **App Router** (`/src/app/`): Modern Next.js 15 routing for Payload admin
- **Pages Router** (`/src/pages/`): Legacy routing for frontend pages
- Both routers work simultaneously

### ✅ **Nginx Reverse Proxy**
- All traffic goes through Nginx first
- Provides single entry point
- Can be configured for SSL, caching, load balancing
- Next.js container not exposed directly to host

### ✅ **Environment-Based Configuration**
- Admin paths configurable via environment variables
- No hard-coded values in source code
- Central config file: `src/lib/config.ts`

### ✅ **TypeScript Throughout**
- Full type safety from frontend to database
- Shared types between Payload and frontend
- Compile-time error checking

---

## 🚀 Development Workflow

### Local Development (Recommended)

```bash
# Start all services
cd PRRC-MAIN-WEB
docker compose up

# Services start in order:
# 1. MongoDB (port 27017)
# 2. Next.js + Payload (internal port 3000)
# 3. Nginx (exposed port 3000)

# Access application
open http://localhost:3000

# Access admin panel
open http://localhost:3000/admin-panel

# View logs
docker compose logs -f nextjs-frontend
```

### Without Docker

```bash
# Terminal 1: Start MongoDB
docker run -d -p 27017:27017 mongo:7

# Terminal 2: Start Next.js + Payload
cd prrc-next-app
npm install
npm run dev
# App runs on http://localhost:3000
# Includes both frontend and Payload admin
```

---

## 🔧 Configuration Files Explained

### `docker-compose.yml`
```yaml
services:
  mongodb:           # Database container
  nextjs-frontend:   # Single app (Next.js + Payload)
  nginx:             # Reverse proxy
```

### `prrc-next-app/payload.config.ts`
```typescript
// Payload CMS configuration
// - Database connection
// - Collections definition
// - Admin user setup
// - API routes config
```

### `prrc-next-app/src/lib/config.ts`
```typescript
// Frontend configuration
// - Admin route paths
// - Router mode settings
// - Environment variable mappings
```

### `prrc-next-app/next.config.mjs`
```javascript
// Next.js configuration
// - Build settings
// - Webpack config
// - Environment variables
```

---

## 📈 Comparison: Old vs Current Architecture

### ❌ OLD (Documented but Never Implemented)
```
Frontend (prrc-next-app)  →  Backend (payload-backend)  →  MongoDB
   Port 3000                      Port 3001                 Port 27017
```
- Two separate applications
- Backend as standalone Express server
- Frontend calls backend API
- More complex deployment

### ✅ CURRENT (Actual Implementation)
```
User  →  Nginx  →  Next.js + Payload  →  MongoDB
       Port 80      Internal Port 3000   Port 27017
```
- Single integrated application
- Payload embedded in Next.js
- Simplified architecture
- Easier to develop and deploy

---

**Generated:** November 25, 2024  
**Architecture Version:** 2.1.3 (Integrated Monolith)  
**Status:** Production-ready with Docker Compose orchestration
