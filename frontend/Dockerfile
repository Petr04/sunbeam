FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# CMD npm run build && NODE_ENV=production npm start
# CMD npm run build && npm run dev
CMD unset NODE_ENV ; npm run build && yarn dev ; sleep 3600
