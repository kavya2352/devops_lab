# FROM node:lts-alpine
#
# WORKDIR /app
#
# COPY package*.json ./
#
# RUN npm install
#
# COPY . .
#
# EXPOSE 3000
#
# CMD ["npm", "start"]


# Step 1: Build React app
FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve static files with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
