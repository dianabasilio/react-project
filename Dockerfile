FROM node:14

WORKDIR /App

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]