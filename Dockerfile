FROM node:14.0.0-stretch AS builder

WORKDIR /quote_banwire_front/app/
ADD . .
RUN npm install && npm run build


FROM nginx:1.17.10
WORKDIR /usr/share/nginx/html
COPY --from=builder /quote_banwire_front/app/config/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /quote_banwire_front/app/build/ .