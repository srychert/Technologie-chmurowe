'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
const test = require("./routes/test");

app.use(express.json());
app.use(cors())
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

const PORT = process.env.PGPORT || 5000;
app.get('/', (req, res) => {
  res.send({
    msg: 'Hello World2'
  });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});