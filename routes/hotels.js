const express = require("express");
const hotels = require("../data");
const slugify=require('slugify')
const router = express.Router();

router.get("/hotels", (req, res) => {
  return res.status(200).json(hotels);
});

router.get("/hotels/:slug", (req, res) => {
  const param = slugify(req.params.slug,{lower:true});
  const hotel = hotels.find((hotel) => hotel.slug === param);
  return res.status(200).json(hotel);
});


module.exports = router;
