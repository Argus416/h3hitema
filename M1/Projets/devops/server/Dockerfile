FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 3001

CMD [ "yarn", "run", "dev"]