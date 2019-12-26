FROM node:10

WORKDIR /usr/src/app

# COPY package*.json ./

COPY package.json yarn.lock ./

# COPY tsconfig.json ./
# COPY dist/app.js ./

# RUN yarn install
RUN yarn

#RUN yarn build
COPY . .
RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]