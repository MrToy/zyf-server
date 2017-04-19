FROM node:slim
WORKDIR /usr/app
ADD . .
RUN npm install --production
CMD npm start
