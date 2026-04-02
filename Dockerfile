FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN node patch-tools.js
RUN npm run build
EXPOSE 8000
ENV NODE_ENV=production
CMD ["npm", "start"]
