FROM node:20

WORKDIR /app
COPY . .

RUN yarn install --immutable
RUN yarn build

CMD yarn start