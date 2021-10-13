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

router.get("/range", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});
