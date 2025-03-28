FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g serve  # Installation de serve
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["serve", "-s", "build", "-l", "3001"]