const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.productImg.findAll().then((result) => {
    /* res.send("Get product"); */
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const productImg = req.body;
  db.productImg.create(productImg).then((result) => {
    res.send(result);
  });
});


module.exports = router;