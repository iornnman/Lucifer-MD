FROM node:lts-buster

RUN apt update && \
  apt install  \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade  && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm i

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
