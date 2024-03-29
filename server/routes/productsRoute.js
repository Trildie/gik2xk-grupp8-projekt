const router = require("express").Router();
const db = require("../models");
const productServices = require('../services/productServices');
const validate = require("validate.js");

const constraints = {
 
  
  productImg: {
    url: {
      message: '^Sökvägen är felaktig.'
    }
  }
};

//check
router.get("/", (req, res) => {
  productServices.getAllProducts().then((result) => {
    res.status(result.status).json(result.data);
  });
});

//router.get("/:id", (req, res) => {
 // db.product.findAll().then((result) => {
    /* res.send("Get product"); */
   // res.send(result);
  //});
//});

//check
router.get("/:id", (req, res) => {
  const id = req.params.id;
  productServices.getProductById(id).then((result) => {
    console.log("test av id via services");
    res.status(result.status).json(result.data);
  });
});


//check

//check skapar product
router.post("/", (req, res) => {
  const product = req.body;
  const invalidData = validate(product, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.product.create(product).then((result) => {
      res.send(result);
    });
  }
});

router.post("/:id/addToCart", (req, res) => {
  const product = req.body;
  db.product.create(product).then((result) => {
    res.send(result);
  });
});


router.post("/:id/createReview", (req, res) => {
  const prodId = req.params.id;
  const review = req.body;
  console.log("test");
  productServices.addReview(prodId, review).then((result) => {
    res.send(result);
  })
})



//check
router.put("/:id", (req, res)=>{
  const id = req.params.id;
  const product = req.body
  productServices.updateProduct(id, product).then((result) => {
    res.status(result.status).json(result.data);
  });

});


router.delete("/:id", (req, res)=>{
  const id = req.params.id;
  productServices.destroyProduct(id).then((result) => {
    res.status(result.status).json(result.data);
  });

});

module.exports = router;
