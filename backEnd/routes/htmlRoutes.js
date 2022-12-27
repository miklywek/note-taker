const path = require("path");
const { route } = require("./apiRoutes");
const router = require("express").Router();
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/public/notes.html"));
});
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/public/index.html"));
});
module.exports = router;
