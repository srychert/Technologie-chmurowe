const express = require("express");
const client = require('../config/psqlClient');
const router = express.Router({ mergeParams: true });
const redisClient = require("../config/redisClient");

router.get('/', async (req, res) => {
    key = req.query.x + req.query.y
    try {
        const result = await redisClient.get(key)
        if (result !== null) {
            obj = JSON.parse(result);
            obj["info"] = "from cache";
            res.json(obj);
            return
        }
    } catch (err) {
        res.send(err)
    }

    try {
        x = Math.abs(parseInt(req.query.x))
        y = Math.abs(parseInt(req.query.y))

        while (y != 0) {
            tmp = y
            y = x % y
            x = tmp
        }

        const insertedRows = await client.query(
            "INSERT INTO results(nwd) VALUES ($1) RETURNING *",
            [x]);

        const insertedNWD = insertedRows.rows[0];

        redisClient.set(key, JSON.stringify(insertedNWD)).then(r => console.log(r)).catch(err => console.err(err))

        return res.json(insertedNWD);
    } catch (err) {
        res.send(err)
    }

})

router.get('/results', async (req, res) => {
    const results = await client.query("SELECT * FROM results");
    return res.send(results.rows);
})

module.exports = router;