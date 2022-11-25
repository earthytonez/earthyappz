FROM node:19-alpine

WORKDIR /opt/app

ADD . /opt/app

RUN ls
RUN ls ..
RUN ls ../..

RUN apk update
RUN apk add curl

RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

RUN pnpm -r install
RUN pnpm -r run build

EXPOSE 3000

WORKDIR /opt/app/apps/earthymaw

CMD [ "pnpm", "start" ]