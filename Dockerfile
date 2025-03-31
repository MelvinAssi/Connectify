# Étape 1 : Construire l'application React
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Servir avec Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY certs /etc/nginx/certs
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]