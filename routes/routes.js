const router = require("express").Router();
const uuid = require("uuid");

let songs = [
  { id: uuid.v4(), name: "Dil to pagal hai", year: 2005 },
  {
    id: uuid.v4(),
    name: "Dilbaro",
    title: 2018,
  },
  {
    id: uuid.v4(),
    name: "Sakhi by shankar mahadevan",
    year: 2020,
  },
];

router.get("/api/v1/getallsongs", (req, res) => {
  res.json(songs);
});

router.get("/api/v1/song/:id", (req, res) => {
  let song = songs.find((song) => song.id === req.params.id);
  if (song) {
    res.json(song);
  } else {
    res.json({ msg: "no song found" });
  }
});

router.post("/api/v1/addsong", (req, res) => {
  const { name, year } = req.body;
  songs.push({ id: uuid.v4(), name, year });
  res.json({ msg: "song added" });
});

router.delete("/api/v1/delete/:id", (req, res) => {
  songs = songs.filter((song) => song.id !== req.params.id);
  res.json(songs);
});

module.exports = router;
