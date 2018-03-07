const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/errands", apiRoutes);

module.exports = router;
