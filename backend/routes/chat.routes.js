const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");
const User = require("../models/User");
const sendRequestToGemini = require("../gemini");
const { messageTest } = require("../constants");

// Create a new chat message
router.post("/", async (req, res) => {
  try {
    const { email, message, response } = req.body;

    const requestData = {
      contents: [
        {
          parts: [
            {
              text: messageTest.promptGnerateInitialQuestion,
            },
          ],
        },
      ],
    };

    const textContent = await sendRequestToGemini(requestData);

    message.push(textContent);

    const chatMessage = new Chat({
      email,
      message,
      response,
    });

    await chatMessage.save();

    return res.status(201).json({ message: "Chat message created successfully", chatMessage });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create chat message", error: error.message });
  }
});

// Update an existing chat message
router.put("/", async (req, res) => {
  try {
    const { email, message, response } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let prompt = "";
    const numQuestion = parseInt(response[0].split(",")[1].trim());

    if (numQuestion >= message.length) {
      for (let i = 0; i < Math.max(message.length, response.length); i++) {
        if (message[i]) {
          if (i === 0) {
            continue;
          }
          prompt += `${message[i]}\n`;
        }
      }
      prompt += `${messageTest.promptGnerateNextQuestion}`;
    } else {
      for (let i = 0; i < Math.max(message.length, response.length); i++) {
        if (message[i]) {
          if (i === 0) {
            continue;
          }
          prompt += `${message[i]}\n`;
        }

        if (response[i]) {
          prompt += `${response[i]}\n`;
        }
      }
      prompt += `${messageTest.promptAnalysis}`;
    }

    const requestData = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const textContent = await sendRequestToGemini(requestData);
    message.push(textContent);

    const updatedChat = await Chat.findOneAndUpdate({ email }, { message, response }, { new: true });

    return res.status(200).json({ message: "Chat message updated successfully", updatedChat });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update chat message", error: error.message });
  }
});

// Get chat messages for a specific user email
router.get("/", async (req, res) => {
  try {
    const email = req.query.email;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const chat = await Chat.findOne({ email });

    return res.status(200).json(chat);
  } catch (error) {
    return res.status(500).json({ message: "Failed to retrieve chat messages", error: error.message });
  }
});

module.exports = router;
