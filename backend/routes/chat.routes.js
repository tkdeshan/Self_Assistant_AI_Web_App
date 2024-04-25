const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");
const sendRequestToGemini = require("../gemini");

// Create a new chat message
router.post("/", async (req, res) => {
  try {
    const { userId, message } = req.body;

    const requestData = {
      contents: [{ parts: [{ text: message }] }],
    };

    const textContent = await sendRequestToGemini(requestData);

    const chatMessage = new Chat({
      userId,
      message,
      response: textContent,
    });

    await chatMessage.save();

    res.status(201).json({ message: "Chat message created successfully", chatMessage });
  } catch (error) {
    res.status(500).json({ message: "Failed to create chat message", error: error.message });
  }
});

// Get all chat messages for a specific user ID
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const chats = await Chat.find({ userId });

    res.status(200).json({ chats });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve chat messages", error: error.message });
  }
});

module.exports = router;
