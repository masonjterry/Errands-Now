const router = require("express").Router();
const errandRoutes = require("./errandRoutes");
const userRoutes = require("./userRoutes");
const runnerRoutes = require("./runnerRoutes");

router.use("/errands", errandRoutes);

router.use("/user", userRoutes);

router.use("/runner", runnerRoutes);

module.exports = router;
