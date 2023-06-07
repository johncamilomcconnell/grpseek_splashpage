FROM node:16.13
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
RUN npm run build
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
