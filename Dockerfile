FROM node:18.19.1-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
