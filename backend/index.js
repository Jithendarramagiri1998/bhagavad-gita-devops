const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data/gita.json");

app.use(cors());

app.get("/chapters", (req, res) => {
  res.json(data.chapters);
});

app.get("/chapter/:id", (req, res) => {
  const chapter = data.chapters.find(c => c.id === parseInt(req.params.id));
  if (!chapter) return res.status(404).send("Chapter not found");
  res.json(chapter);
});

const port = 5000;
app.listen(port, () => console.log(`Backend running on port ${port}`));

