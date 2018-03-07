const router = require("express").Router();
const errandController = require("../../controllers/errandController");

router.route("/")
  .post(errandController.createRunner);

module.exports = router;
