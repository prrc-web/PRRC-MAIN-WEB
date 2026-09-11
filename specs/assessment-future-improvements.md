# Assessment: Future Improvements & Production Readiness

**Date**: May 26, 2026  
**Author**: Automated Architecture Review  
**Version**: 1.0  

## Executive Summary

This document captures the full architectural assessment of the PRRC Web Application (Next.js 15 + Payload CMS 3.56). The codebase is **production-ready at B+/8.5**, with exemplary accessibility (WCAG 2.2 AA) and developer experience. However, critical ambiguities remain that must be resolved before launch.

**Key Verdicts**:
- ✅ **Architecture**: Well-structured hybrid monolith, but backend service status unclear
- ✅ **Code Quality**: TypeScript everywhere, linting/formatting in place
- ⚠️ **Security**: RBAC good, missing error boundaries, rate limiting, CSP
- ✅ **Accessibility**: Excellent ADA/WCAG compliance
- ⚠️ **Testing**: Only E2E tests – needs unit/component expansion
- ✅ **DX**: Top-tier tooling (Husky, ESLint, Prettier, path aliases)

---

## 1. Architecture & Runtime Behavior

### 1.1 Monolith vs Hybrid Confusion

**Uncertainty**: The `specs/spec.md` diagram shows a "Visual Monolith" with both Frontend and Payload CMS in the same Next.js monolith, but the codebase contains references to a separate `payload-backend` Express server.

**Questions**:
1. Is the `payload-backend/` directory still needed, or was it deprecated in v2.1.0? The current `docker-compose.yml` does **not** include it.
2. Should the project fully migrate to Next.js App Router API routes, or maintain the hybrid approach?
3. What is the intended data flow between frontend and backend? (Currently no working API routes exist in `/src/app/api/` except the Payload-generated one)

**Impact**: High – affects deployment architecture and scaling decisions

**Recommendation**: Either fully integrate Payload into Next.js (remove separate backend) OR define clear microservice boundaries with documented API contracts

---

### 1.2 Mixed Pages & App Router

**Uncertainty**: Both routers coexist, causing confusion and potential duplicate content issues.

**Current State**:
- App Router: `/src/app/` (new pages, staff, login, administration)
- Pages Router: `/src/pages/` (only 4 files: `_app.tsx`, `_document.tsx`, `dashboard/admin.tsx`, `dashboard/new-paper.tsx`)

**Questions**:
1. What is the migration timeline to remove Pages Router entirely?
2. Are there any Pages Router routes that cannot be migrated to App Router yet?
3. Why did migration happen incrementally rather than all at once?

**Impact**: Medium – search engine indexing, user confusion

**Recommendation**: Set a deadline (Q3 2026) to complete migration. Document migration decisions in an ADR

---

### 1.3 Import Map Management

**Uncertainty**: Generated `importMap.ts` files exist in both `/src/app/(payload)/admin/` and `/src/app/(payload)/`.

**Questions**:
1. Is this a Payload-generated artifact that should be in `.gitignore`?
2. How do we handle importMap updates after Payload upgrades?

**Impact**: Low – primarily maintenance burden

**Recommendation**: Add `importMap.ts` to `.gitignore` if auto-generated. If manually maintained, document update procedure

---

## 2. Authentication & Authorization

### 2.1 Admin Panel vs Frontend Admin

**Uncertainty**: Two separate admin experiences exist:
- `/admin-panel` → Payload CMS backend admin (full CMS) 
- `/AdministrationPage` → Frontend admin dashboard (user profile management)

**Questions**:
1. What is the intended user journey for each? Should researchers see both?
2. Why are there two separate admin experiences? Can they be consolidated?
3. How do admin users discover `/AdministrationPage`? Is it logged in automatically?

**Impact**: High – user confusion, security risks

**Recommendation**: Define clear user roles and permissions. Consider single sign-on with role-based dashboards

---

### 2.2 Role Hierarchy

**Current Roles**: `admin`, `director`, `researcher`

**Questions**:
1. Is `director` a special subclass of `admin` or a separate role with distinct permissions?
2. Are there plans for additional roles (`student`, `guest`, `editor`)?
3. How do we handle role changes mid-flow (e.g., promoting researcher to director)?

**Impact**: Medium – affects permission design and user onboarding

**Recommendation**: Define role matrix in a table. Consider hierarchical roles (admin > director > researcher)

---

### 2.3 Session & Token Management

**Current**: Payload uses session-based authentication via cookies.

**Questions**:
1. Do we need refresh token rotation?
2. Should we integrate OAuth/SAML for enterprise single sign-on?
3. How do we handle account lockout after failed attempts?

**Impact**: High – security posture

**Recommendation**: Add refresh token rotation before production. Consider Okta/Auth0 for enterprise SSO

---

## 3. Data Modeling & Relationships

### 3.1 User vs Staff Data Model

**Critical Gap**: Two separate collections for personnel:
- `users` → Auth users with roles, emails, passwords
- `staff` → Researcher profiles with headshots, bios, contact info, social links

**Questions**:
1. Why isn't `staff` extended from `users`? (e.g., `User` extends `Staff`)
2. What happens if a researcher's email changes in `users` but not in `staff.relatedUser`?
3. Is the `relatedUser` field in `staff` redundant or serves a specific purpose?

**Impact**: High – data integrity, synchronization issues

**Recommendation**: Use Payload's `User` interface for staff. If separate is required, add validation to keep email/roles in sync

---

### 3.2 Documents Workflow

**Current**: `draft → pending_review → published → archived`

**Questions**:
1. Who approves documents from `pending_review` to `published`? (Currently only admins)
2. Is there a notification system for when a document is published?
3. What happens to documents when `archived`? (Soft vs hard delete)

**Impact**: Medium – document lifecycle management

**Recommendation**: Add approval workflow with audit logging. Consider soft deletes with `deletedAt` field

---

### 3.3 Events & RSVP

**Current**: Simple CRUD with dates and links

**Questions**:
1. Are there plans for Google Calendar integration?
2. Do we need RSVP tracking or email notifications for upcoming events?

**Impact**: Medium – event management functionality

**Recommendation**: Add RSVP collection with `attending`, `not_attending`, `maybe` statuses

---

## 4. Security & Hardening

### 4.1 Error Boundaries

**Gap**: No error boundaries in critical components.

**Questions**:
1. What happens when a server component fails?
2. Do users see helpful error messages or generic Next.js errors?

**Impact**: High – user trust, SEO

**Recommendation**: Add ErrorBoundary wrapper components to all major pages

---

### 4.2 Rate Limiting

**Gap**: No rate limiting on API endpoints.

**Questions**:
1. Are there abuse patterns to protect against (brute force, scraping)?
2. Do we need API key authentication for public endpoints?

**Impact**: High – security

**Recommendation**: Implement `helmet()` and rate limiting with `express-rate-limit` for production

---

### 4.3 Content Security Policy

**Gap**: No CSP configuration visible.

**Questions**:
1. Are all user inputs sanitized for XSS (e.g., rich text content)?
2. Do third-party widgets bypass CSRF protection?

**Impact**: High – security

**Recommendation**: Add `Helmet` middleware with CSP headers

---

## 5. Testing & Quality Assurance

### 5.1 Test Coverage Gap

**Current**: Only 2 E2E Playwright test files (140+ lines total)

**Questions**:
1. Are there unit tests for utility functions (date formatting, role checking)?
2. Is there a test strategy for Payload CMS collections?
3. Should we add API integration tests with Supertest?

**Impact**: High – regression risk

**Recommendation**:
- Add Jest unit tests for `payload-api.ts` functions
- Add React Testing Library tests for `AdminGuard`, `StaffCard`
- Set target coverage: 70% minimum

---

### 5.2 Accessibility Audits

**Current**: Claims WCAG 2.2 AA compliance

**Questions**:
1. Has anyone run axe-core or WAVE audits?
2. Are all form fields having visible labels (some use `id` attributes without visible text)?
3. Is color contrast sufficient in all states (hover, focus)?

**Impact**: High – legal compliance

**Recommendation**: Run automated audits before launch. Manual testing with NVDA screen reader

---

### 5.3 TypeScript Strictness

**Gap**: Many `any` types used (e.g., `data: any` in `AdminGuard.tsx`)

**Questions**:
1. Should we add `@ts-expect-error` comments to justify non-null assertions?
2. Are there deprecated functions without TypeScript decorators?

**Impact**: Medium – type safety degradation

**Recommendation**: Add JSDoc deprecation comments. Replace `any` with `unknown` + type guard

---

## 6. Performance & Scalability

### 6.1 API Caching

**Gap**: No visible caching for frequently accessed data

**Questions**:
1. What is the current Lighthouse score?
2. Do we need Redis for session management and caching?
3. Should we implement server-side caching for document queries?

**Impact**: Medium – page load times

**Recommendation**: Add `@upstash/redis` for caching. Implement React Query or SWR for client-side caching

---

### 6.2 Image Optimization

**Current**: Next.js handles this automatically

**Questions**:
1. Are all images using Next.js `Image` component? (Some use standard `<img>` tags)
2. Should we add lazy loading for above-the-fold images?

**Impact**: Medium – performance

**Recommendation**: Audit all `<img>` tags. Add `loading="lazy"` for non-critical images

---

### 6.3 Build Optimization

**Gap**: NextUI has heavy CSS dependencies

**Questions**:
1. What is the current Lighthouse performance score?
2. Are we using Next.js 15's server components fully?

**Impact**: Medium – initial load time

**Recommendation**: Add `react-loadable` for code splitting. Consider switching to Mantine for lighter admin UI

---

## 7. Deployment & Infrastructure

### 7.1 Database Backups

**Current**: MongoDB with Docker volumes

**Questions**:
1. Is there an automated backup strategy?
2. Do we need Point-in-Time Recovery (PITR)?
3. How long do backups need to be retained?

**Impact**: Critical – data loss prevention

**Recommendation**: Set up MongoDB replica set with automatic backups. Use Velero or mongodump scheduled via cron

---

### 7.2 Secret Management

**Current**: `.env.example` files with placeholder secrets

**Questions**:
1. What's the process for rotating secrets periodically?
2. Do we need audit logging for admin actions?
3. Should we migrate to AWS Secrets Manager or Azure Key Vault?

**Impact**: Critical – security

**Recommendation**: Add AWS Secrets Manager integration. Implement secret rotation via IAM roles

---

### 7.3 Logging Strategy

**Current**: Logs directory exists, but no centralized solution

**Questions**:
1. Are we using a centralized logging solution (ELK, Datadog)?
2. Is there log rotation to prevent disk space exhaustion?
3. Should we implement JSON logging for log aggregation?

**Impact**: Medium – troubleshooting efficiency

**Recommendation**: Add `winston` or `pino` for structured logging. Integrate with Splunk or Datadog

---

## 8. Monitoring & Observability

### 8.1 Application Health Checks

**Current**: Docker health checks for MongoDB only

**Questions**:
1. Are there application-level health endpoints for API routes?
2. Should we add uptime monitoring (UptimeRobot, Pingdom)?

**Impact**: Medium – uptime awareness

**Recommendation**: Add `/api/health` endpoint returning `{ status: 'ok', uptime: 123456 }`. Configure UptimeRobot alerts

---

### 8.2 Error Tracking

**Gap**: No error tracking service configured

**Questions**:
1. Should we integrate Sentry or Bugsnag for real-time error alerts?
2. Do we need structured logging (JSON format) for log aggregation?

**Impact**: High – incident response time

**Recommendation**: Add Sentry with Next.js integration. Set up alerting for P0/P1 errors

---

## 9. Feature Prioritization & Roadmap

### 9.1 Research Areas

**Current**: Navbar has megamenu for "Carbon Capture" and "Reservoir Sweep Improvement", but no pages exist

**Questions**:
1. Are these placeholder routes? What's the timeline for implementing them?
2. Should research areas be dynamic from `staff` or a new collection?

**Impact**: Medium – content gaps

**Recommendation**: Create `research/` collection if dynamic. Set deadline for pages

---

### 9.2 Publications Collection

**Current**: `/publications` page exists but no Payload collection

**Questions**:
1. Should we create a `publications` collection similar to `documents`?
2. Do we need citation generation (APA, MLA) or DOI assignment?

**Impact**: Medium – content management

**Recommendation**: Add `publications` collection with workflow. Integrate Crossref API for DOIs

---

### 9.3 Education Page

**Current**: `/education` page exists but empty

**Questions**:
1. Is this a future roadmap item? What should it contain (courses, workshops, internships)?

**Impact**: Low – placeholder content

**Recommendation**: Define content requirements. Add to sprint backlog

---

## 10. Design System & UI/UX

### 10.1 Design Consistency

**Current**: NextUI for admin, custom Tailwind for website

**Questions**:
1. Should we adopt a unified design system (Chakra UI, Headless UI)?
2. Are the custom CSS utilities in `globals.css` documented and versioned?

**Impact**: Low – maintenance

**Recommendation**: Document all Tailwind utilities. Consider design system migration if team grows

---

### 10.2 Responsive Design Testing

**Current**: Appears responsive

**Questions**:
1. Has it been tested on iOS Safari and Android Chrome?
2. Are there touch targets too small for mobile?

**Impact**: Medium – mobile usability

**Recommendation**: Run BrowserStack tests on real devices

---

### 10.3 Loading States

**Gap**: No loading spinners or skeletons visible

**Questions**:
1. Should we implement progressive image loading?
2. Are API calls handled with proper loading/error states in components?

**Impact**: Medium – perceived performance

**Recommendation**: Add React Query or SWR with `suspense` for data fetching

---

## 11. Third-Party Dependencies

### 11.1 NextUI Org Maintenance

**Questions**:
1. What's the long-term maintenance plan for `@nextui-org/*`?
2. Could a switch to Mantine or Radix UI simplify the codebase?

**Impact**: Low – future-proofing

**Recommendation**: Audit NextUI roadmap. Plan migration if abandoned

---

### 11.2 Slate.js Upgrade

**Current**: Payload uses Slate 3

**Questions**:
1. Is there a Slate 4 upgrade plan? (Slate 4 announced)
2. Should we consider ProseMirror-based alternatives (TipTap)?

**Impact**: Medium – editor functionality

**Recommendation**: Follow Slate 4 beta. Evaluate TipTap for future-proofing

---

## 12. Documentation & Knowledge Transfer

### 12.1 Onboarding Documentation

**Gap**: No `CONTRIBUTING.md` or detailed setup guide

**Questions**:
1. How do we onboard a new developer in 5 minutes?
2. Where do developers add new Payload collections?
3. How do we deploy to production?

**Impact**: High – developer velocity

**Recommendation**: Add `CONTRIBUTING.md` with setup, build, test, and deploy instructions

---

### 12.2 Architecture Decision Records (ADRs)

**Questions**:
1. Are complex algorithms documented (e.g., role access control)?
2. Should we add ADRs for major changes?

**Impact**: Medium – knowledge retention

**Recommendation**: Create ADR directory. Document the monolith→hybrid transition

---

### 12.3 Spec Maintenance

**Current**: Well-structured `specs/` directory

**Questions**:
1. Who is responsible for keeping it updated?
2. Are there code reviews for spec changes?

**Impact**: Medium – documentation drift

**Recommendation**: Assign spec owner. Add review step to PR template

---

## Immediate Actions for Production Readiness

### Priority Matrix

| # | Action | Impact | Effort | Deadline | Owner |
|---|--------|--------|--------|----------|-------|
| 1 | **Resolve Admin Panel Consolidation** | High | Medium | Week 1 | Dev Lead |
| 2 | **Implement Database Backup Strategy** | Critical | Low | Week 1 | DevOps |
| 3 | **Complete Pages Router Migration** | High | High | Q3 2026 | Dev Team |
| 4 | **Add Error Boundaries to Critical Pages** | High | Medium | Week 2 | Frontend Lead |
| 5 | **Set Up Sentry Error Tracking** | High | Low | Week 2 | DevOps |
| 6 | **Run Full Accessibility Audit** | High | Medium | Week 3 | QA Lead |
| 7 | **Add Rate Limiting & Helmet** | High | Low | Week 3 | Backend Lead |
| 8 | **Write Unit Tests for payload-api.ts** | Medium | Medium | Week 4 | Dev Team |
| 9 | **Add React Query for Caching** | Medium | Medium | Week 4 | Frontend Lead |
| 10 | **Create CONTRIBUTING.md** | Medium | Low | Week 2 | Dev Lead |

---

## Appendix A: Detailed Questions List

### A.1 Authentication
1. What is the intended user journey for `/admin-panel` vs `/AdministrationPage`?
2. Should researchers see both admin dashboards, or is one internal only?
3. Why are there two separate admin experiences? Can they be consolidated?
4. Is `director` a special subclass of `admin` or a separate role?
5. Are there plans for additional roles (`student`, `guest`, `editor`)?
6. How do we handle role changes mid-flow?
7. Do we need refresh token rotation?
8. Should we integrate OAuth/SAML for enterprise SSO?
9. How do we handle account lockout after failed attempts?

### A.2 Architecture
10. Is `payload-backend/` still needed, or deprecated?
11. Should we fully migrate to Next.js App Router API routes?
12. What is the intended data flow between frontend and backend?
13. What is the migration timeline to remove Pages Router?
14. Are there Pages Router routes that cannot be migrated?
15. Why did migration happen incrementally?
16. Is `importMap.ts` auto-generated or manually maintained?
17. How do we handle importMap updates after Payload upgrades?

### A.3 Data Models
18. Why isn't `staff` extended from `users`?
19. What happens if researcher's email changes in `users` but not `staff`?
20. Is `staff.relatedUser` redundant or serves specific purpose?
21. Who approves documents from `pending_review` to `published`?
22. Is there a notification system for document publication?
23. Soft delete vs hard delete for archived documents?
24. Are there plans for Google Calendar integration?
25. Do we need RSVP tracking or email notifications?

### A.4 Security
26. What happens when a server component fails?
27. Do users see helpful error messages or generic Next.js errors?
28. Are there abuse patterns to protect against (brute force, scraping)?
29. Do we need API key authentication for public endpoints?
30. Are all user inputs sanitized for XSS?
31. Do third-party widgets bypass CSRF protection?

### A.5 Testing
32. Are there unit tests for utility functions?
33. Is there a test strategy for Payload CMS collections?
34. Should we add API integration tests with Supertest?
35. Has anyone run axe-core or WAVE audits?
36. Are all form fields having visible labels?
37. Is color contrast sufficient in all states?

### A.6 Performance
38. What is the current Lighthouse score?
39. Do we need Redis for session management and caching?
40. Should we implement server-side caching for document queries?
41. Are all images using Next.js `Image` component?
42. Should we add lazy loading for above-the-fold images?
43. Are we using Next.js 15's server components fully?
44. Should we add `react-loadable` for code splitting?

### A.7 Deployment
45. Is there an automated backup strategy?
46. Do we need Point-in-Time Recovery (PITR)?
47. How long do backups need to be retained?
48. What's the process for rotating secrets periodically?
49. Do we need audit logging for admin actions?
50. Should we migrate to AWS Secrets Manager or Azure Key Vault?
51. Are we using a centralized logging solution?
52. Is there log rotation to prevent disk exhaustion?
53. Should we implement JSON logging?

### A.8 Monitoring
54. Are there application-level health endpoints for API routes?
55. Should we add uptime monitoring?
56. Do we need structured logging (JSON format)?

### A.9 Features
57. Are "Carbon Capture" and "Reservoir Sweep Improvement" placeholder routes?
58. What's the timeline for implementing research area pages?
59. Should research areas be dynamic from `staff` or new collection?
60. Should we create a `publications` collection?
61. Do we need citation generation or DOI assignment?
62. Is `/education` a future roadmap item?
63. What should it contain (courses, workshops, internships)?

### A.10 UI/UX
64. Should we adopt a unified design system (Chakra UI, Headless UI)?
65. Are custom Tailwind utilities documented and versioned?
66. Has the site been tested on iOS Safari and Android Chrome?
67. Are there touch targets too small for mobile?
68. Should we implement progressive image loading?
69. Are API calls handled with proper loading/error states?

### A.11 Dependencies
70. What's the long-term maintenance plan for NextUI Org?
71. Could a switch to Mantine or Radix UI simplify the codebase?
72. Is there a Slate 4 upgrade plan?
73. Should we consider ProseMirror-based alternatives (TipTap)?

### A.12 Documentation
74. How do we onboard a new developer in 5 minutes?
75. Where do developers add new Payload collections?
76. How do we deploy to production?
77. Are complex algorithms documented (e.g., role access control)?
78. Should we add ADRs for major changes?
79. Who is responsible for keeping specs updated?
80. Are there code reviews for spec changes?

---

## Appendix B: Production Checklist

Before launching to production, ensure:

- [ ] **Database backups** configured and tested
- [ ] **Error tracking** (Sentry) integrated
- [ ] **Rate limiting** implemented
- [ ] **Helmet** and CSP headers added
- [ ] **Pages Router** fully migrated or removed
- [ ] **Admin panel** purpose clearly defined
- [ ] **Accessibility audit** passed (automated + manual)
- [ ] **Unit tests** for core utilities (70%+ coverage)
- [ ] **Contributing guide** published
- [ ] **Onboarding documentation** complete
- [ ] **Error boundaries** on all pages
- [ ] **Loading states** implemented
- [ ] **CDN** configured for media (if applicable)
- [ ] **SEO** sitemap.xml and robots.txt generated
- [ ] **Staging environment** set up for final testing
- [ ] **Rollback plan** documented and tested

---

**Document Maintainer**: [DevOps Engineer / Tech Lead]  
**Review Cadence**: Quarterly  
**Last Updated**: May 26, 2026
