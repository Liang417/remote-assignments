FROM node:current-alpine3.18

WORKDIR /Assignemnts

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","server.js"]`