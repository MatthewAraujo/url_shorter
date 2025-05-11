FROM node:22.8.0-slim

RUN apt update && \
    apt install -y openssl procps curl && \
    npm install -g pnpm@latest @nestjs/cli@10.4.8

WORKDIR /home/node/app

COPY --chown=node:node package.json pnpm-lock.yaml .env ./

RUN pnpm install --frozen-lockfile

COPY --chown=node:node . .

RUN pnpm prisma generate

RUN pnpm build

USER node

CMD ["pnpm", "start:prod"]

