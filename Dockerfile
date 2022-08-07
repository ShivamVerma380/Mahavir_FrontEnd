<<<<<<< HEAD
FROM mhart/alpine-node:16 AS builder
=======
FROM mhart/alpine-node:14 AS builder
>>>>>>> 92e602dc2072f34ed33dc856269ece62f6d3bc20

WORKDIR /app
COPY . .

ENV GENERATE_SOURCEMAP false

RUN yarn run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]

