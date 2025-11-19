# PRRC Next.js Application

## Project Overview

This is a Next.js web application for the Petroleum Recovery Research Center (PRRC), a division of New Mexico Tech. The application serves as a public-facing website for the research center, providing information about their research activities, staff, publications, education programs, and administrative details. 

The project is built with:
- **Next.js 15** - React-based framework for server-side rendering and static site generation
- **PayloadCMS** - A headless CMS for content management
- **Tailwind CSS** - Utility-first CSS framework for styling
- **MongoDB** - Database for storing content and user data
- **Docker** - Containerization for deployment

## Architecture

The application follows a traditional Next.js file-based routing structure with pages in the `src/pages` directory. It uses a component-based architecture with layouts and UI components organized in the `components` directory. The application includes both static content and dynamic CMS-managed content through PayloadCMS.

Key directories:
- `src/pages` - Next.js routes and page components
- `components` - Reusable UI components organized by functionality
- `components/layouts` - Page layout components
- `components/dashboard` - Shared UI components (Navbar, Footer, etc.)
- `public` - Static assets (images, documents)

## Building and Running

### Prerequisites
- Node.js (version 20.x)
- MongoDB (for development) or MongoDB Atlas (for production)
- Docker and Docker Compose (for containerized deployment)

### Development Environment

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file based on the provided `.env` with your specific configuration.

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3001` (as configured in the environment variables).

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Run in production**:
   ```bash
   npm start
   ```

### Docker Deployment

The application includes Docker configuration for containerized deployment:

1. **Build and run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```
   The application will be available through the Nginx reverse proxy at `http://localhost:8080`.

2. **Manual Docker build**:
   ```bash
   docker build -t prrc-next-app .
   docker run -p 3001:3001 prrc-next-app
   ```

## Development Conventions

### Code Style
- Uses Prettier for code formatting (configured in `.prettierrc`)
- Follows standard React/Next.js patterns
- Uses Tailwind CSS for styling with utility classes
- Component names follow PascalCase
- File names use PascalCase for React components and camelCase for other modules

### Folder Structure
- Pages are organized under `src/pages` following Next.js conventions
- Components are organized by functionality in the `components` directory
- Layout components are separated from UI components
- Navigation and layout components are reusable across pages

### CMS Integration
- PayloadCMS is integrated for content management
- Configuration is in `next.config.mjs` 
- Collections include user authentication system
- MongoDB is used as the database backend

### Environment Variables
- `MONGODB_URI` - Connection string for MongoDB database
- `PAYLOAD_PUBLIC_SERVER_URL` - Public URL for the server
- `NEXT_PUBLIC_SERVER_URL` - Next.js public server URL

## Application Features

The website contains several main sections:
- **Homepage** - Main landing page with PRRC objectives and news
- **Administration** - Administrative information about the center
- **Staff** - Information about PRRC personnel
- **Education** - Educational programs and resources
- **Publications** - Research publications and documents
- **Research** - Current research projects and focus areas
- **Safety** - Safety protocols and information

The application showcases research areas like:
- Enhanced oil recovery
- CCUS (Carbon Capture, Utilization and Storage)
- Geothermal energy
- Advanced materials
- Petrophysics
- Reservoir characterization

## Deployment

The application is designed to be deployed in a Docker container with Nginx as a reverse proxy. The Dockerfile creates an optimized production build, and the docker-compose.yml orchestrates both the Next.js application and Nginx service.

## Configuration

The application uses Next.js configuration with special handling for PayloadCMS:
- Server components are configured to work with external packages
- MongoDB adapter is configured for database connectivity
- Authentication is enabled for the users collection