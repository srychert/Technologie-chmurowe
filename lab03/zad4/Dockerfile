FROM node:alpine

WORKDIR /opt/app

# Optymalizacja zamiast kopiowania wszystkiego
COPY ./package.json ./

# Odpala się tylko przy zmianie package.json
RUN npm install

COPY ./ ./

CMD node index.js