FROM node:19-alpine

RUN apk update
RUN apk install pnpm

RUN pnpm install
RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "start" ]



