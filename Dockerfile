FROM mhart/alpine-node:14 AS builder

WORKDIR /app
COPY . .

ENV GENERATE_SOURCEMAP false

RUN yarn run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .