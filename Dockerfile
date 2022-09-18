FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG DEFAULT_PORT=8300

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD ["npm", "start"]
