const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


// const redisClient = require("./config/redisClient");

// redisClient.on("error", (err) => {
//   console.error("Error connecting to Redis", err);
// });
// redisClient.on("connect", () => {
//   console.log(`Connected to Redis.`);
// });


const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

