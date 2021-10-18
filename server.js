// Importing the necessary packages for the server.
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Routes
app.use(require("./controllers/homeRoutes"));
app.use(require("./controllers/api/workoutRoutes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`APP is listening on port ${PORT}`);
});
