const router = require("express").Router();
const db = require("../models");
//const validate = require("validate.js");

/* router.get("/", (req, res) => {
  db.cart.findAll().then((result) => {
    res.send("Get product");
    res.send(result);
  });
}); */

/* router.get('/:id/posts', (req, res) => {
  const id = req.params.id;

  postService.getByAuthor(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});
 */
router.post("/", (req, res) => {
  const cart = req.body;
  db.cart.create(cart).then((result) => {
    res.send(result);
  });
});

router.put("/", (req, res) => {
  const cart = req.body;

  const id = cart.id;

  db.cart
    .update(cart, {
      where: { id: cart.id },
    })
    .then((result) => {
      res.send(result);
    });
});

router.delete("/", (req, res) => {
  db.cart.destroy({ where: { id: req.body.id } }).then((result) => {
    res.json(`cart raderades`);
  });
});

module.exports = router;
