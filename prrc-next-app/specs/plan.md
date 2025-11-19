# PRRC Next.js Application - Project Plan for Future Agents

## Overview

This document provides a comprehensive plan for future agents working on the PRRC Next.js application. It outlines the necessary steps, best practices, and guidelines to effectively contribute to the project's development and completion.

## Project Context

The PRRC (Petroleum Recovery Research Center) Next.js application is a public-facing website for a division of New Mexico Tech. It serves as a platform to showcase research activities, staff information, publications, educational programs, and administrative details related to petroleum recovery research.

Technology stack: Next.js 14, PayloadCMS, NextUI, Tailwind CSS, MongoDB, Docker

## Project Structure Understanding

Before implementing any changes, future agents should familiarize themselves with the project structure:

```
prrc-next-app/
├── .env (environment variables template)
├── next.config.mjs (Next.js configuration with PayloadCMS integration)
├── package.json (project dependencies and scripts)
├── src/
│   └── pages/ (Next.js routing structure)
├── components/ (React components organized by functionality)
├── public/ (static assets)
├── Dockerfile (containerization configuration)
└── docker-compose.yml (orchestration for production)
```

## Step-by-Step Implementation Guide

### Phase 1: Environment Setup and Codebase Analysis

1. **Set up the development environment**
   - Ensure Node.js 20.x is installed
   - Run `npm install` to install dependencies
   - Create `.env.local` based on the `.env` template
   - Configure MongoDB connection

2. **Analyze the existing codebase**
   - Review all files in `src/pages` to understand the current routing structure
   - Examine components in the `components` directory for reusable UI elements
   - Study the layout components in `components/layouts`
   - Understand PayloadCMS configurations in `next.config.mjs`

3. **Verify the application runs correctly**
   - Start the development server with `npm run dev`
   - If receiving "address already in use" error, either:
     - Stop the process using the port: `lsof -ti:3001 | xargs kill -9` (on macOS/Linux)
     - Or modify the package.json to use a different port: `"dev": "next dev -H 0.0.0.0 -p XXXX"`
   - Access the application at the appropriate URL (default: `http://localhost:3001`)

### Phase 2: Content Implementation and CMS Integration

1. **Content creation for required pages**
   - Implement content for Homepage with PRRC objectives and news
   - Create Administration page with administrative information
   - Build Staff page with information about PRRC personnel
   - Develop Education page with educational programs and resources
   - Design Publications page with research publications and documents
   - Construct Research page with current research projects and focus areas
   - Build Safety page with safety protocols and information

2. **PayloadCMS integration**
   - Set up appropriate collections for managing dynamic content
   - Configure user authentication system
   - Create appropriate fields for content editors
   - Establish content relationships where necessary

### Phase 3: UI/UX Enhancement and Responsiveness

1. **Consistency and styling**
   - Apply consistent styling using Tailwind CSS
   - Implement NextUI components where appropriate
   - Ensure responsive design across all pages
   - Verify cross-browser compatibility

2. **User experience improvements**
   - Implement navigation that works well on all devices
   - Add search functionality for publications and research content
   - Optimize page load times
   - Implement accessibility best practices

### Phase 4: Testing and Quality Assurance

1. **Implementation of test coverage**
   - Set up Jest and React Testing Library
   - Write unit tests for all components
   - Implement integration tests for CMS functionality
   - Conduct end-to-end tests for critical user journeys

2. **Quality checks**
   - Perform accessibility testing
   - Run performance audits
   - Check cross-browser compatibility
   - Verify SEO best practices implementation

### Phase 5: Deployment and Production Readiness

1. **Docker configuration**
   - Verify Dockerfile properly builds the Next.js application
   - Test Docker Compose setup with Nginx reverse proxy
   - Ensure environment variables are correctly handled in containers
   - Optimize Docker images for production

2. **Production environment**
   - Configure MongoDB for production use
   - Set up monitoring and logging
   - Implement security best practices
   - Document deployment procedures

## Best Practices for Future Agents

### Development Guidelines

1. **Code Style Consistency**
   - Follow the Prettier configuration in `.prettierrc`
   - Use PascalCase for React components
   - Use camelCase for functions and variables
   - Maintain consistent Tailwind CSS class usage

2. **Component Architecture**
   - Create reusable components in the `components` directory
   - Separate layout components from UI components
   - Use NextUI components for consistent design
   - Implement proper component composition patterns

3. **PayloadCMS Integration**
   - Follow established CMS collection patterns
   - Ensure proper error handling for CMS operations
   - Maintain security best practices with CMS data
   - Document any new CMS collections created

## Specific Focus Areas for Future Implementation

### Research Areas to Highlight

1. Enhanced oil recovery techniques
2. CCUS (Carbon Capture, Utilization and Storage)
3. Geothermal energy applications
4. Advanced materials for petroleum applications
5. Petrophysics and reservoir characterization
6. Any emerging research areas at PRRC

### Content Management Priorities

1. Staff profiles and contact information
2. Research publications with proper categorization
3. News and updates from the research center
4. Educational resources and materials
5. Safety protocols and documentation

## Next Steps for Immediate Action

1. Set up the development environment as described above
2. Resolve any port conflicts if needed
3. Run the existing codebase to understand current functionality
4. Review the tasks in tasks.md for specific implementation priorities
5. Implement content for missing pages as needed
6. Begin with the highest priority tasks outlined in the project requirements

### Migration Notes (from MIGRATION.md)

This repository has migrated from a monolithic Next.js+Payload setup to a two-app architecture.

Key steps for migration:

- Backup your MongoDB database with `mongodump`
- Copy and configure `.env` files in `payload-backend` and `prrc-next-app`
- Start services with `docker compose up`
- Verify admin and API endpoints

Common issues and fixes (ports, MongoDB connection, CORS, TypeScript errors) are included in the migration guide; check `prrc-next-app/specs/spec.md` under Troubleshooting for quick reference.
