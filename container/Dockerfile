FROM node:current-alpine3.15

# Create app directory
WORKDIR /code

# Install app dependencies
COPY package.json /code

RUN npm install

# Bundle app source
COPY . /code

EXPOSE 9000
CMD ["npm", "start"]