const express = require("express");
const router = express.Router();
const client = require("../config/redisClient");

client.set("mykey", "value").then(r => console.log(r)).catch(err => console.err(err))

router.get("/:key", async (req, res) => {
    const key = req.params.key;
    try {
        const queue = await client.get(key)
        res.json(queue);
    } catch (ex) {
        res.send(ex);
    }
});

module.exports = router;
