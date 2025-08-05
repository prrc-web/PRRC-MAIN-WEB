FROM ubuntu:24.04

WORKDIR /app

# Install system dependencies for native modules
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy package files first for better caching
COPY package*.json ./
COPY *.config.js ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy application files
COPY . .

# Build the application
ENV CI=false
RUN npm run build

CMD ["npm", "run", "dev"]