const router = require("express").Router();
const db = require("../models");
const productServices = require('../services/productServices');
//const validate = require("validate.js");

router.get("/", (req, res) => {
  productServices.getAllProducts().then((result) => {
    /* res.send("Get product"); */
    res.status(result.status).json(result.data);
  });
});

//router.get("/:id", (req, res) => {
 // db.product.findAll().then((result) => {
    /* res.send("Get product"); */
   // res.send(result);
  //});
//});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  productServices.getProductById(id).then((result) => {
    console.log("test av id via services");
    res.status(result.status).json(result.data);
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
