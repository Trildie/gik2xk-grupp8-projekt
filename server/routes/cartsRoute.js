const router = require("express").Router();
const db = require("../models");
const productServices = require('../services/productServices');

router.get("/:id", (req, res)=>{
  const id = req.params.id;
  productServices.getById(id).then((result) => {
    
    res.status(result.status).json(result.data);
  });
});



router.post('/', (req, res) => {
  const cart = req.body;
  productServices.create(cart).then((result) => {
    res.status(result.status).json(result.data);
  });
});
//check
router.put("/", (req, res) => {
  const cart = req.body;
  const id = cart.id;
  db.cart
    .update(cart, {
      where: { id: cart.id },
    })
    .then((result) => {
       res.status(result.status).res.send(result);
    });
});




//Skicka vidare cartID  och cart dvs den NYA cart vi har 1! produkt i för att sparas in i en existerande cart...
router.put("/:id", (req, res)=>{
  const id = req.params.id;
  const cart = req.body
  productServices.updateCart(id, cart).then((result) => {
    res.json(result.data);
  });

});



//check
router.delete("/:id", (req, res) => {
  const id=req.params.id
  db.cart.destroy({ where: { id} }).then((result) => {
    res.json(`cart raderades`);
  });
});

module.exports = router;
