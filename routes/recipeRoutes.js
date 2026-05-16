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

router.post("/:id/favorite", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    recipe.favorites.push(req.body.userId);

    await recipe.save();

    res.json({
      message: "Recipe added to favorites",
      recipe,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/:id/rate", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    recipe.ratings.push({
      user: req.body.userId,
      value: req.body.value,
    });

    await recipe.save();

    const total =
      recipe.ratings.reduce((sum, r) => sum + r.value, 0);

    const average =
      total / recipe.ratings.length;

    res.json({
      message: "Rating added",
      averageRating: average,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});