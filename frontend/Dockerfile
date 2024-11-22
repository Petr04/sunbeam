FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

CMD unset NODE_ENV ; npm run build && npm start
