const express = require('express')
const cors = require('cors')
const app = express()
const nwd = require("./routes/nwd")

app.use(cors())
app.use("/api/nwd", nwd)

const client = require('./config/psqlClient');

client
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL');

        client.query(`CREATE TABLE IF NOT EXISTS results (
            id serial PRIMARY KEY, nwd INT NOT NULL
            );`)
    })


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`API listening on port ${port}`)
})