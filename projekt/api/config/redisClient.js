const Redis = require("ioredis");

const dbConnData = {
  port: process.env.REDIS_SERVICE_SERVICE_PORT || 6379,
  host: process.env.REDIS_SERVICE_SERVICE_HOST || "127.0.0.1",
};
const client = new Redis(dbConnData);

module.exports = client;