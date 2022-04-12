'use strict';

const express = require('express');

const app = express();
const test = require("./routes/test");

app.use(express.json());
app.use("/test", test);

const client = require("./config/redisClient");

client.on("error", (err) => {
  console.error("Error connecting to Redis", err);
});
client.on("connect", () => {
  console.log(`Connected to Redis.`);
  const port = process.env.REDIS_PORT || 6379;
  app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
  });
});

const PORT = process.env.PGPORT;
app.get('/', (req, res) => {
  res.send({
    msg: 'Hello World'
  });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});