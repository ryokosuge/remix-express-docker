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

FROM base as dev-node-server

ENV PORT="8081"

WORKDIR /app

COPY --from=deps /app/package.json /app/package.json
COPY --from=deps /app/package-lock.json /app/package-lock.json
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/server.js /app/server.js

CMD ["npm", "run", "dev:node"]

FROM base as dev-remix

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

COPY . .

CMD ["npm", "run", "dev:remix"]
