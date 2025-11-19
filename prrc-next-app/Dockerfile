FROM node:20-bullseye

WORKDIR /app

# Install system dependencies for native modules
RUN apt-get update && apt-get install -y build-essential python3 python3-pip && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Remove any existing node_modules and lock files to ensure clean install
RUN rm -rf node_modules package-lock.json package-lock 2.json

# Install dependencies with specific versions to avoid Tailwind v4/lightningcss issues
RUN npm install tailwindcss@^3.4.0 autoprefixer@^10.4.0 postcss@^8.4.0 --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Rebuild native modules for the current platform
RUN npm rebuild

# Copy application files
COPY . .

# Expose port
EXPOSE 3001

# Start the application in development mode
CMD ["npm", "run", "dev"]