# Global Roadmap

## Phase 1: Foundation (Completed)

- Basic Next.js setup
- Payload CMS integration

## Phase 2: Features & Architecture Split (In Progress)

- Researcher Profiles → Staff Collection
- Resume Management
- Document Workflow
- **Backend extraction:** standalone `prrc-backend` Payload CMS service owns all
  collections + MongoDB; frontend runs in frontend-only mode and fetches via REST. *(Done — Nginx routes `/api/` + `/admin-panel/` to the backend, rest to the frontend.)*

## Phase 3: Public Launch

- SEO Optimization
- Performance Tuning
