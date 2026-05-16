const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  res.send("Register API Working");
});

router.post("/login", async (req, res) => {
  res.send("Login API Working");
});

module.exports = router;