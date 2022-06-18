const Redis = require("ioredis");

const dbConnData = {
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || "172.20.0.6",
};
const client = new Redis(dbConnData);

module.exports = client;