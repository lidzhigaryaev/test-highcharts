FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn -E

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["http-server", "dist"]
