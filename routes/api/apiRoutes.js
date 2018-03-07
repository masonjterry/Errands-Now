const router = require("express").Router();
const errandController = require("../../controllers/errandController");

router.route("/")
  .get(errandController.findErrands)
  .post(errandController.createErrand);

module.exports = router;
