FROM node:16-alpine3.14

WORKDIR /src

COPY package.json /src/

COPY . .

RUN npm install 
RUN npm run build
RUN npm i serve -g



ENV PORT 4200

EXPOSE ${PORT}

CMD npm run serve
