FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev

# to build
# docker build . -t profile-pilot

# to run
# docker run -p 3000:3000 profile-pilot