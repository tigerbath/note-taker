const uuid = require("uuid");

const { read, write } = require("../../db/database");

const saveNewNote = (req, res) => {
  const newNote = { ...req.body, id: uuid.v4() };
  const data = JSON.parse(read());
  data.push(newNote);
  write(data);
  res.json(data);
};

module.exports = saveNewNote;
