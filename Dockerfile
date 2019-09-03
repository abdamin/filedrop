FROM node:alpine
MAINTAINER Abdullah Amin

COPY . ./
RUN npm install && npm run build

ENV NODE_ENV production
EXPOSE 80
CMD node ./dist/index.js
