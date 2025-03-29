# Use Node.js LTS (Long Term Support) as base image
FROM node:20-slim

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@9.12.3

ENV PNPM_HOME=/app/.pnpm
RUN mkdir -p $PNPM_HOME
ENV PATH="$PNPM_HOME:$PATH"
ENV PNPM_STORE_DIR=/app/.pnpm-store

# Copy package files first for better caching
# COPY package.json pnpm-lock.yaml ./

# Copy source code
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the application
RUN pnpm build:api

# Expose the port
EXPOSE 4005

# Set environment variables
ENV NODE_ENV=prod

# run the api
CMD ["pnpm", "run:api"]
