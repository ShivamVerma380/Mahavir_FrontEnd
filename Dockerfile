FROM mhart/alpine-node:14 AS builder

WORKDIR /app
COPY . .

ENV GENERATE_SOURCEMAP false

RUN yarn run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=builder /app/build .

CMD ["nginx","-g","daemon off;"]