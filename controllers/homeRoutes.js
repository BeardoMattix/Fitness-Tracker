// Imports the express router and the path the router uses.
const router = require("express").Router();
const path = require("path");

// These routes allow the router to connect to the html pages for the root index, the exercise page, and the stats page.
router.get("/", ({ res }) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/exercise", ({ res }) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", ({ res }) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
