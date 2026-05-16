const express = require("express");
const router = express.Router();

const recipes = [
  {
    id: 1,
    title: "Paneer Recipe",
    category: "Dinner"
  },
  {
    id: 2,
    title: "Pasta",
    category: "Lunch"
  },
  {
    id: 3,
    title: "Burger",
    category: "Fast Food"
  }
];

// Get all recipes
router.get("/", (req, res) => {
  res.json(recipes);
});

// Search recipe
router.get("/search", (req, res) => {
  const query = req.query.name;

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredRecipes);
});

// Single recipe
router.get("/:id", (req, res) => {
  const recipe = recipes.find(r => r.id == req.params.id);

  res.json(recipe);
});

module.exports = router;