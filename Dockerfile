FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci && rm -rf ~/.npm


# Bundle app source
COPY . .

EXPOSE 6000
CMD [ "npm", "start" ]