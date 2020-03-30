FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json config.js index.js LICENSE parse.js README.md ./
RUN npm ci --only=production
ENTRYPOINT [ "node", "." ]
