FROM node:10-alpine as builder

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15

COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 6000