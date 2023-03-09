const router = require("express").Router();
const db = require("../models");
//const validate = require("validate.js");

router.get("/", (req, res) => {
  db.product.findAll().then((result) => {
    /* res.send("Get product"); */
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  db.product.findAll().then((result) => {
    /* res.send("Get product"); */
    res.send(result);
  });
});



router.post("/", (req, res) => {
  const product = req.body;
  db.product.create(product).then((result) => {
    res.send(result);
  });
});

router.post("/:id/addToCart", (req, res) => {
  const product = req.body;
  db.product.create(product).then((result) => {
    res.send(result);
  });
});

router.post("/:id/addRaiting", (req, res) => {
  const product = req.body;
  db.product.create(product).then((result) => {
    res.send(result);
  });
});

router.put("/", (req, res) => {
  const product = req.body;
 
  const id = product.id;
    
        db.product
        .update(product, {
            where: {id: product.id }
        })
        .then((result) => {
            res.send(result);
        });
    });


router.delete("/", (req, res) => {
  db.product.destroy({where: {id: req.body.id }}).then((result) => {
    res.json(`Product raderades`);
  });
});

module.exports = router;
