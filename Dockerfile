# Use Node.js LTS (Long Term Support) as base image
FROM node:20-slim

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
# COPY package.json pnpm-lock.yaml* ./
# COPY packages/api/package.json ./packages/api/

# Copy source code
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile


# Build the application
RUN pnpm build:api

# Expose the port your API runs on (4005 as seen in compose.local.yaml)
EXPOSE 4005

# Set environment variables
ENV NODE_ENV=production

# Start the API server
# CMD ["bash"]
# CMD ["pnpm", "start"]