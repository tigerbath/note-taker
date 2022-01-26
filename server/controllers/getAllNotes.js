const { read } = require("../../db/database");

const getAllNotes = (req, res) => {
  const data = JSON.parse(read());
  const notes = data.map(({ title, text, id }) => ({
    title,
    text,
    id,
  }));

  res.json(notes);
};

module.exports = getAllNotes;
