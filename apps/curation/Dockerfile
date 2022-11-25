FROM node:19-alpine

WORKDIR /opt/app

ADD . /opt/app

RUN ls
RUN ls ..
RUN ls ../..

RUN apk update
RUN apk install pnpm

RUN pnpm -r install
RUN pnpm -r run build

EXPOSE 3000

WORKDIR /opt/app/apps/curation

CMD [ "pnpm", "start" ]



