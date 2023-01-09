# create base image with all packages, proper entrypoint, and directories created
FROM node:16-alpine AS packages

# install any packages we need from apt here
RUN apk add --update dumb-init curl python3 make g++

# install dependencies
FROM node:16-alpine as dependencies

WORKDIR /usr/src/app

COPY . .

RUN npm set progress=false \
    && npm config set depth 0 \
    && npm i

# prepare dev env to run for in development
FROM node:16-alpine as dev 

USER node

WORKDIR /usr/src/app

COPY --from=packages /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=dependencies --chown=node:node /usr/src/app . 

ENV NODE_ENV=development

CMD ["dumb-init", "npm", "run", "dev"]

# test 
FROM node:16-alpine as test 

COPY --from=packages /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=dependencies --chown=node:node /usr/src/app . 

ENV NODE_ENV=test

CMD ["dumb-init", "npm", "run", "test"]

# prepare dev env to run for in staging and production envs 
FROM node:16-alpine as release

USER node

WORKDIR /usr/src/app

COPY --from=packages /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=dependencies --chown=node:node /usr/src/app . 

ENV NODE_ENV=production

# prune non-prod dependencies, remove test files
RUN npm prune --production \
    && rm -rf ./test \
    && rm -rf cypress \
    && rm -f ./cypress.config.ts

RUN npm run build

# start production ready server 
CMD ["dumb-init", "npm", "run", "start"]
