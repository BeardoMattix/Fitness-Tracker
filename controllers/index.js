// Importing the router.
const apiRoutes = require("./api");
const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
