const mongoose = require("mongoose");

const AnnalysSchema = new mongoose.Schema({
  email: {
    type: String,
    ref: "User",
    required: true,
  },
  testAnnalys: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      summary: {
        type: String,
        required: true,
      },
    },
  ],
  careerAnnalys: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      summary: {
        type: String,
        required: true,
      },
    },
  ],
});

const Annalys = mongoose.model("Annalys", AnnalysSchema);

module.exports = Annalys;
