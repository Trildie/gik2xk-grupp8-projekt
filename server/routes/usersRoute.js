const router = require("express").Router();
const db = require("../models");
//const validate = require("validate.js");

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

router.get("/", (req, res) => {
  db.user.findAll().then((result) => {
    /* res.send("Get users"); */
    res.send(result);
  });
});

router.get("/cart/", (req, res) => {
  db.user.findAll().then((result) => {
    /* res.send("Get users"); */
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  db.user.create(user).then((result) => {
    res.send(result);
  });
});


router.delete("/", (req, res) => {
  db.user.destroy({where: {id: req.body.id }}).then((result) => {
    res.json(`user raderades`);
  });
});

module.exports = router;
