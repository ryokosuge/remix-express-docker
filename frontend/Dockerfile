FROM node:16-bullseye-slim as base

# deps
FROM base as deps

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm i

FROM base as production-deps

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm i --production

FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN npm run build

FROM base as node-server-base

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/server/index.js /app/index.js

FROM node-server-base as production-node-server

ENV PORT=8081
ENV NODE_ENV=production

CMD ["node", "/app/index.js"]

FROM node-server-base as dev-node-server

ENV PORT=8081
ENV NODE_ENV=development

RUN npm i -g nodemon

CMD ["nodemon", "/app/index.js", "--watch", "/app/index.js"]

FROM build as watch-dev

WORKDIR /app

CMD ["npm", "run", "watch"]
