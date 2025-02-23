FROM node:20-alpine
 
WORKDIR /usr/deploy
 
# Copy root package.json and lockfile
# COPY package.json ./
# COPY pnpm-lock.yaml ./
# COPY pnpm-workspace.yaml ./
# COPY turbo.json ./

 
# Copy the api package.json
# COPY apps/api/package.json ./apps/api/package.json

COPY . .

# Copy the .env file
# COPY apps/api/.env ./apps/api/.env

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build
 
# Copy app source
 
EXPOSE 8080
 
CMD [ "node", "apps/api/build/index.js" ]