FROM ubuntu:18.04

WORKDIR /usr/app

RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install -y nodejs

COPY ./package*.json ./
RUN npm install
COPY ./ ./

CMD ["node", "index.js"]
