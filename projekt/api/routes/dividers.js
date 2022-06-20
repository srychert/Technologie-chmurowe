const express = require("express");
const router = express.Router({ mergeParams: true });
const redisClient = require("../config/redisClient");

const Divider = require("../models/Divider");

router.get("/", async (req, res) => {
  try {
    const results = await Divider.find({})
    res.send(results);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

router.post("/", async (req, res) => {
  const number = Math.abs(req.body.number);
  try {
    const result = await redisClient.get(number)
    if (result !== null) {
      const dividers = JSON.parse(result);
      const obj = {
        number: number,
        dividers: dividers,
        info: "from cache"
      }
      res.json(obj);
      return
    }
  } catch (err) {
    res.send(err)
  }


  try {
    async function findDividers(n) {
      let dividers = []

      const end = n / 2 + 1
      for (let i = 1; i < end; i++) {
        if (n % i === 0) {
          dividers.push(i)
        }
      }
      if (n > 1) {
        dividers.push(n)
      }

      return dividers
    }

    const dividers = await findDividers(number)

    redisClient.set(number, JSON.stringify(dividers))
      .then(r => console.log(r))
      .catch(err => console.err(err))

    const result = await Divider.findOneAndUpdate({
      number: number,
    }, {
      number: number,
      dividers: dividers,
    }, { new: true, upsert: true })

    res.send(result)
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

module.exports = router;