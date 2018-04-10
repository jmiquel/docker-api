FROM node:carbon

LABEL author='Joan Miquel'

ENV NODE_ENV=development
ENV PORT=3000

# Bundle app source
WORKDIR /usr/src
COPY . /usr/src

RUN npm install

EXPOSE $PORT

CMD ["npm", "start"]