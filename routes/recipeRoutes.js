const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      title: "Paneer Recipe",
      category: "Dinner"
    },
    {
      title: "Pasta",
      category: "Lunch"
    }
  ]);
});

router.get("/:id", (req, res) => {
  res.json({
    title: "Paneer Recipe",
    description: "Delicious recipe"
  });
});

module.exports = router;