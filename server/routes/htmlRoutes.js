const express = require("express");

const { renderHome, renderNotes } = require("../controllers/renderHTML");

const router = express.Router();

router.get("/", renderHome);
router.get("/notes", renderNotes);

module.exports = router;
