const router = require("express").Router();
const db = require("../../models");

// Gets all the workout information from the db ans send a response.
router.get("/", async (req, res) => {
  try {
    const workouts = await db.Workout.find({});
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new workout in the database.
router.post("/", async ({ body }, res) => {
  try {
    const newWorkout = await db.Workout.create(body);
    res.status(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Updates a workout with information from the user input and adds it to the db.
router.put("/:id", async ({ params, body }, res) => {
  try {
    const updatedWorkout = await db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercise: body } },
      { new: true }
    );
    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});
// This app uses Chart.js. This routes gets all the exercises associated with a workout and shows the information as a chart on the front end.
router.get("/range", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
