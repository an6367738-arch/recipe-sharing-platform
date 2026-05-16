const express = require("express");
const router = express.Router();

const Recipe = require("../models/Recipe");


// GET all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// POST create recipe
router.post("/", async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE recipe
router.delete("/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);

    res.json({ message: "Recipe Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// UPDATE recipe
router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
