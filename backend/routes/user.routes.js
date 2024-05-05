const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Annalys = require("../models/Annalys");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ code: 13001, message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    const newAnnalys = new Annalys({
      email,
      testAnnalys: [],
      careerAnnalys: [],
    });

    await newAnnalys.save();

    if (!res) {
      return res.status(400).json({ code: 14012, message: "Annalys doc create successfully" });
    }

    return res.status(201).json({ code: 14001, message: "User registered successfully" });
  } catch (error) {
    return res.status(400).json({
      code: 13002,
      message: "Failed to register user",
      error: error.message,
    });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ code: 13003, message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ code: 13004, message: "Password does not match" });
    }

    return res.status(200).json({ code: 14002, message: "Login successful" });
  } catch (error) {
    return res.status(400).json({ code: 13005, message: "Failed to login", error: error.message });
  }
});

// Get user by email
router.get("/getuserbyemail", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ code: 13003, message: "User not found" });
    }

    return res.status(200).json({ code: 14003, message: "User found", user });
  } catch (error) {
    return res
      .status(400)
      .json({ code: 13006, message: "Failed to get user by email", error: error.message });
  }
});

// Update user information
router.put("/update/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ code: 13003, message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    await user.save();

    return res.status(200).json({ code: 14004, message: "User updated successfully" });
  } catch (error) {
    return res.status(400).json({
      code: 13007,
      message: "Failed to update user",
      error: error.message,
    });
  }
});

module.exports = router;
