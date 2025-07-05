# Step 1: Build the Vite React app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve via NGINX with custom dev config
FROM nginx:stable-alpine

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default config with dev config
COPY nginx.dev.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
