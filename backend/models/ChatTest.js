const mongoose = require("mongoose");

const chatTestSchema = new mongoose.Schema({
  email: {
    type: String,
    ref: "User",
    required: true,
  },
  message: [
    {
      type: String,
      required: true,
    },
  ],
  response: [
    {
      type: String,
      required: true,
    },
  ],
  annalys: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ChatTest = mongoose.model("ChatTest", chatTestSchema);

module.exports = ChatTest;
