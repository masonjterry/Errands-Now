const router = require("express").Router();
const errandController = require("../../controllers/errandController");

router.route("/")
  .get(errandController.listErrands)
  .post(errandController.createErrand);
