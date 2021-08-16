FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

CMD ["npm", "start"]