FROM node:16-bullseye-slim as base

FROM base as deps

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm i

FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN npm run build

FROM base

ENV PORT="8081"

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public

COPY . .

CMD ["npm", "run", "start"]
