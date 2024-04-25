const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");
const User = require("../models/User");
const sendRequestToGemini = require("../gemini");

// Create a new chat message
router.post("/", async (req, res) => {
  try {
    const { email, message } = req.body;

    const requestData = {
      contents: [{ parts: [{ text: message }] }],
    };

    const textContent = await sendRequestToGemini(requestData);

    const chatMessage = new Chat({
      email,
      message,
      response: textContent,
    });

    await chatMessage.save();

    return res.status(201).json({ message: "Chat message created successfully", chatMessage });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create chat message", error: error.message });
  }
});

// Get all chat messages for a specific user email
router.get("/", async (req, res) => {
  try {
    const email = req.query.email;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const chats = await Chat.find({ email });

    return res.status(200).json({ chats });
  } catch (error) {
    return res.status(500).json({ message: "Failed to retrieve chat messages", error: error.message });
  }
});

module.exports = router;
