const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  ingredients: {
    type: [String],
    required: true,
  },

  instructions: {
    type: String,
    required: true,
  },

  category: {
    type: String,
  },

  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: [String],
  category: String,

  // Ye NEW add karo
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      value: Number,
    },
  ],
});

module.exports = mongoose.model("Recipe", recipeSchema);