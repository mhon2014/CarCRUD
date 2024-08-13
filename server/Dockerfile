FROM node:slim

ENV NODE_ENV development

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "/dist/index.js" ]

EXPOSE 8000