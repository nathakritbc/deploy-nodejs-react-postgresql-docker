FROM node:16-alpine3.15


ENV NODE_ENV=production
ENV PORT=9090

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE $PORT
ENTRYPOINT ["npm", "start"]