const router = require("express").Router();
const errandController = require("../../controllers/errandController");

router.route("/")
  .post(errandController.createUser);

module.exports = router;
