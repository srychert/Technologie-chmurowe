const express = require('express');
const cors = require('cors');
const app = express();
const dividers = require("./routes/dividers");

app.use(express.json());
app.use(cors());
app.use("/dividers", dividers);


const redisClient = require("./config/redisClient");

redisClient.on("error", (err) => {
  console.error("Error connecting to Redis", err);
});
redisClient.on("connect", () => {
  console.log(`Connected to Redis.`);
});


const dbConnData = {
  host: process.env.MONGO_SERVICE_SERVICE_HOST || "127.0.0.1",
  port: process.env.MONGO_SERVICE_SERVICE_PORT || 27017,
  database: process.env.MONGO_DATABASE || "local",
};

const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`)
  .then((response) => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`);
  })
  .catch((error) => console.error("Error connecting to MongoDB", error));

app.get('/', async (req, res) => {
  return res.json({ msg: "hello" })
})


const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

console.log(process.env)
