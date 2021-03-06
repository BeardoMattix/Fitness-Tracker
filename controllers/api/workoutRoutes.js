const router = require("express").Router();
const db = require("../../models");

// Gets all the workout information from the db and send a response.
router.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await db.Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new workout in the database.
router.post("/api/workouts", async ({ body }, res) => {
  try {
    const newWorkout = await db.Workout.create(body);
    res.status(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Updates or Adds a workout with information from the user input and adds it to the db.
router.put("/api/workouts/:id", async (req, res) => {
  console.log(req.params);
  try {
    const updatedWorkout = await db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    );
    res.json(updatedWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});
// This app uses Chart.js. This route gets all the exercises associated with a workout and shows the information as a chart on the front end.
router.get("/api/workouts/range", async ({ res }) => {
  try {
    const workouts = await db.Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
