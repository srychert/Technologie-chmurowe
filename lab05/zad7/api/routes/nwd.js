const express = require("express");
const client = require('../config/psqlClient');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
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
        return res.send(insertedNWD);
    } catch {
        res.sendStatus(400)
    }

})

module.exports = router;