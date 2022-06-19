const express = require("express");
const router = express.Router({ mergeParams: true });

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
  try {
    const { number } = req.body;

    function findDividers(n) {
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

    const result = await Divider.create({
      number: number,
      dividers: findDividers(number),
    })
    res.send(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

module.exports = router;