const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the tallest sky scrapers in the world!",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    address: "20 W 34th St., New York, NY 10001, United States",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid; // => {pid: "p1"}
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  res.json({ place });
});

module.exports = router;
