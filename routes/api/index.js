const router = require("express").Router();
const errandRoutes = require("./errandRoutes");
const userRoutes = require("./userRoutes");

router.use("/errands", errandRoutes);

router.use("/user", userRoutes);

module.exports = router;
