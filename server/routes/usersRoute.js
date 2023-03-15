const router = require("express").Router();
const db = require("../models");
//const validate = require("validate.js");
const productServices = require("../services/productServices");

const constraints = {
  email: {
    length: {
      minimum: 4,
      maximum: 200,
      tooShort: "^E-postadressen måste vara minst %{count} tecken lång.",
      tooLong: "^E-postadressen får inte vara längre än %{count} tecken lång.",
    },
    email: {
      message: "^E-postadressen är i ett felaktigt format.",
    },
  }, //här slutar email
  f_name: {
    length: {
      minimum: 2,
      maximum: 50,
      tooShort: "^Förnamnet måste vara minst %{count} tecken lång.",
      tooLong: "^Användarnamnet får inte vara längre än %{count} tecken lång.",
    },
  },
  l_name: {
    length: {
      minimum: 2,
      maximum: 150,
      tooShort: "^Användarnamnet måste vara minst %{count} tecken lång.",
      tooLong: "^Användarnamnet får inte vara längre än %{count} tecken lång.",
    },
  },
};

//check  get all users
router.get("/", (req, res) => {
  productServices.getAllUsers().then((result) => {
    res.status(result.status).json(result.data);
  });
});
/* 
router.get("/", (req, res) => {
  db.user.findAll().then((result) => {

    res.send(result);
  });
}); */

/* router.get("/cart/", (req, res) => {
  db.user.findAll().then((result) => {
    res.send("Get users");
    res.send(result);
  });
});
 */

//check  get carts som tillhör en user
router.get("/:id/carts", (req, res) => {
  const  id= req.params.id;

  productServices.getByUser(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

//check  get en viss users via id
router.get("/:id", (req, res)=>{
  const id = req.params.id;
  productServices.getByUserID(id).then((result) => {
    console.log("test av id via services");
    res.status(result.status).json(result.data);
  });
});

//check
router.post("/", (req, res) => {
  const user = req.body;
  db.user.create(user).then((result) => {
    res.send(result);
  });
});

//check
/* router.delete("/", (req, res) => {
  db.user.destroy({ where: { id: req.body.id } }).then((result) => {
    res.json(`user raderades`);
  });
}); */
router.put("/:id", (req, res)=>{
  const id = req.params.id;
  const user = req.body
  productServices.updateUser(id, user).then((result) => {
    res.status(result.status).json(result.data);
  });

});


router.delete("/:id", (req, res)=>{
  const id = req.params.id;
  productServices.destroyUser(id).then((result) => {
    res.status(result.status).json(result.data);
  });

});
module.exports = router;
