# Build stage
FROM node:20 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage - use nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose frontend port
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
