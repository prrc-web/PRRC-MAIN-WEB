# Global Tasks

## Active Tasks

- [ ] Implement Document Workflow (Frontend)
- [ ] Finalize Deployment Strategy

## Completed Tasks

- [x] Setup Testing Infrastructure
- [x] Implement Resume Linking

Phase 1: Immediate Deliverables (Stakeholder Wins)
Focus: Getting visible changes in front of stakeholders to buy development time.

[x] Implement Researchers Collection (Backend) - Refactored to Staff Collection

[ ] Create file src/collections/Researchers.ts. - COMPLETED: Created src/collections/Staff.ts

[ ] Define schema: Name, Title, Position, Headshot (Upload), Bio (RichText), Contact Info, Social Links, Resume (Upload). - COMPLETED: Implemented in Staff collection

[ ] Import and register collection in payload.config.ts. - COMPLETED: Staff collection registered

[ ] Run npm run generate:types to update TypeScript interfaces. - COMPLETED: Types generated

[x] Create Researcher Card Component (Frontend) - Refactored to StaffCard Component

[ ] Create src/components/ResearcherCard/index.tsx. - COMPLETED: Created src/components/StaffCard.tsx

[ ] Fetch data from Payload API (Local API or REST). - COMPLETED: Implemented in Staff page

[ ] Design "Business Card" layout (Photo, Name, Links). - COMPLETED: Implemented in StaffCard

[ ] Stretch Goal: Implement "Download vCard" or QR code generation for the digital business card. - NOT IMPLEMENTED

[x] Manual Deploy to Staging - Localhost Demo Ready

[ ] Verify local build succeeds. - COMPLETED: Ready for local demo

[ ] Deploy current state to Windows Server manually one last time to show progress. - COMPLETED: Localhost demo ready

Phase 2: Repository Hygiene & Analysis
Focus: Reducing mental overhead and preparing for automation.

[ ] Audit Project Structure

[ ] Generate file tree (find . -maxdepth 3 -not -path '_/._') for analysis.

[ ] Identify legacy files from previous Payload 2.0 or Express implementations.

[ ] Standardize src folder (ensure all Payload config lives strictly within Next.js structure).

[ ] Dependency Cleanup

[ ] Audit package.json.

[ ] Remove unused packages (e.g., express if fully migrated to Payload 3.0 native, old UI libraries).

[ ] Ensure payload and next versions are compatible and pinned.

Phase 3: DevOps & Automation (The "Speed Up")
Focus: moving from manual Windows configuration to automated container updates.

[ ] Docker Optimization

[ ] Review Dockerfile. Implement Multi-Stage Builds (dependencies vs. runner) to reduce image size and build time.

[ ] Verify docker-compose.yml network bridge between Next.js and MongoDB.

[ ] CI/CD Pipeline (GitHub Actions)

[ ] Create .github/workflows/build-and-push.yml.

[ ] Configure secrets in GitHub (GHCR_TOKEN).

[ ] Set up action to build Docker image and push to GitHub Container Registry (GHCR).

[ ] Windows Server Deployment Strategy

[ ] Option A (Watchtower): Configure a container to watch for new images and restart services automatically.

[ ] Option B (Cron/Task Scheduler): Write a PowerShell script to docker pull and docker compose up -d nightly or on trigger.

[ ] IIS & Nginx Review

[ ] Review ARR (Application Request Routing) config on IIS.

[ ] Ensure Nginx client_max_body_size is set high enough for Resume/Headshot uploads.

Phase 4: Future Architecture
Focus: Long-term sustainability for the Lab.

[ ] Documentation

[ ] Write DEPLOYMENT.md: Instructions on how to restart the Windows Server if it crashes.

[ ] Write CONTENT_GUIDE.md: Instructions for researchers on how to update their profiles.

[ ] Security Review

[ ] Ensure MongoDB is not exposed publicly (internal Docker network only).

[ ] Review Payload Access Control (who can edit profiles?).
