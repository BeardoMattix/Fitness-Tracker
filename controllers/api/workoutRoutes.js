const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    const workouts = await db.Workout.find({});
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async ({ body }, res) => {
  try {
    const newWorkout = await db.Workout.create(body);
    res.status(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});
