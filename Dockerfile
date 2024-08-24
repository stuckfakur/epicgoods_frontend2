FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

RUN rm -rf node_modules

COPY . .

RUN npm run build

COPY .next ./.next

CMD ["npm", "run", "dev"]