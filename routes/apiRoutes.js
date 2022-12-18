const fs = require("fs");
const path = require("path");
// const db = require("../db/db.json");
const router = require("express").Router();

// npm package that allows for unique ids to be created
const uniqid = require("uniqid");

router.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});
router.post("./api.notes", (req, res) => {
  let db = fs.readFile("db/db.json");
  db = json.parse(db);
  res.json(db);
  let newNote = {
    id: uniqid(),
    title: req.body.title,
    text: req.body.text,
  };
  // pushing created note to be written in the db.json file
  db.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json(db);
});
router.delete("/api/notes/:id", (req, res) => {
  let db = JSON.parse(fs.readFile("db/db.json"));
  // removing note with id
  let deleteNotes = db.filer((item) => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync("db/db.json", json.stringify(deleteNotes));
  res.json(deleteNotes);
});

module.exports = router;