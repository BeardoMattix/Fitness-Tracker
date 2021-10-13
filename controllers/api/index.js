// Exporting the router to use the workout routes.
const router = require("express").Router();
const workoutRoutes = require("./workoutRoutes");

router.use("/workouts", workoutRoutes);

module.exports = router;
