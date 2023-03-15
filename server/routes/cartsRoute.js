const router = require("express").Router();
const db = require("../models");
const productServices = require('../services/productServices');
//const validate = require("validate.js");

/* router.get("/", (req, res) => {
  db.cart.findAll().then((result) => {
    res.send("Get product");
    res.send(result);
  });
}); */
/* 
router.get('/', (req, res) => {
  const id = req.params.id;

  productServices.getByUser(id).then((result) => {
    res.status(result.status).json(result.data);
  });
}); */

router.get("/:id", (req, res)=>{
  const id = req.params.id;
  productServices.getById(id).then((result) => {
    
    res.status(result.status).json(result.data);
  });
});


router.post("/", (req, res) => {
  const cart = req.body;
  db.cart.create(cart).then((result) => {
    res.send(result);
  });
});

//check
/* router.put("/", (req, res) => {
  const cart = req.body;
  const id = cart.id;
  db.cart
    .update(cart, {
      where: { id: cart.id },
    })
    .then((result) => {
      res.send(result);
    });
}); */

router.put("/:id", (req, res)=>{
  const id = req.params.id;
  const cart = req.body
  productServices.updateCart(id, cart).then((result) => {
    res.status(result.status).json(result.data);
  });

});



//check
router.delete("/", (req, res) => {
  db.cart.destroy({ where: { id: req.body.id } }).then((result) => {
    res.json(`cart raderades`);
  });
});

module.exports = router;
