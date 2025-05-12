FROM node:20-bullseye 

# Install only necessary dependencies (remove nginx/supervisor)
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Run Node.js directly (no Supervisor)
CMD ["npm", "run", "dev"]