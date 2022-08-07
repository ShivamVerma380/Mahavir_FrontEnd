FROM mhart/alpine-node:16 AS builder

WORKDIR /app

COPY . .

ENV GENERATE_SOURCEMAP false

RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]
