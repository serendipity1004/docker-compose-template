FROM node:10-alpine

# work directory
WORKDIR /usr/app

# Copy dependencies first for effective caching
COPY package*.json ./

RUN apk add --no-cache --virtual .build-deps alpine-sdk python \
 && npm install -g nodemon \
 && npm install \
 && npm rebuild bcrypt --build-from-source \
 && apk del .build-deps

COPY . .

CMD ["npm", "run", "start"]