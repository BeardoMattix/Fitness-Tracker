// Importing mongoose.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Model for creating a new workout, with the associated fields.
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
          trim: true,
        },
        distance: {
          type: Number,
        },
        duration: {
          type: Number,
          trim: true,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
