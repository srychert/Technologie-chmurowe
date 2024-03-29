const express = require('express');
const cors = require('cors');
const app = express();
const nwd = require("./routes/nwd");

app.use(express.json());
app.use(cors());
app.use("/api/nwd", nwd);

const pgClient = require('./config/psqlClient');

pgClient
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL');

        pgClient.query(`CREATE TABLE IF NOT EXISTS results (
            id serial PRIMARY KEY, nwd INT NOT NULL
            );`)
    })

const redisClient = require("./config/redisClient");

redisClient.on("error", (err) => {
    console.error("Error connecting to Redis", err);
});
redisClient.on("connect", () => {
    console.log(`Connected to Redis.`);
});


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});