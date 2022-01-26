const express = require("express");

const deleteNote = require("../controllers/deleteNote");
const getAllNotes = require("../controllers/getAllNotes");
const saveNewNote = require("../controllers/saveNewNote");

const router = express.Router();

router.get("/notes", getAllNotes);
router.post("/notes", saveNewNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;
