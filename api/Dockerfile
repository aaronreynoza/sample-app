FROM node:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 3006
RUN npm ci --only=production
CMD "npm" "start"
