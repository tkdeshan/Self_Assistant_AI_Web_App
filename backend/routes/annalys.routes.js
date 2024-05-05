const express = require("express");
const router = express.Router();
const Annalys = require("../models/Annalys");

// POST route to add data
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    const newAnnalys = new Annalys({
      email,
      testAnnalys: [],
      careerAnnalys: [],
    });

    await newAnnalys.save();

    return res.status(201).json({ message: "Annalys doc create successfully", data: newAnnalys });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create", error: error.message });
  }
});

// PUT route to update test annalys
router.put("/", async (req, res) => {
  try {
    const { email, newTestSummary, newCareerSummary } = req.body;

    let updatedAnnalys = {};

    if (newTestSummary) {
      updatedAnnalys = await Annalys.findOneAndUpdate(
        { email },
        { testAnnalys: newTestSummary },
        { new: true }
      );
    }

    if (newCareerSummary) {
      updatedAnnalys = await Annalys.findOneAndUpdate(
        { email },
        { careerAnnalys: newCareerSummary },
        { new: true }
      );
    }

    if (!updatedAnnalys) {
      return res.status(404).json({ message: "Document not found" });
    }

    return res.status(200).json(updatedAnnalys);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update document", error: error.message });
  }
});

// DELETE route to delete a document
router.delete("/", async (req, res) => {
  try {
    const { email } = req.body;

    const deletedAnnalys = await Annalys.findOneAndDelete({ email });

    if (!deletedAnnalys) {
      return res.status(404).json({ message: "Document not found" });
    }

    return res.status(200).json({ message: "Document deleted successfully", data: deletedAnnalys });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete document", error: error.message });
  }
});

// GET route to find a single document
router.get("/", async (req, res) => {
  try {
    const { email } = req.query;

    const annalys = await Annalys.findOne({ email });

    if (!annalys) {
      return res.status(404).json({ message: "Document not found" });
    }

    return res.status(200).json(annalys);
  } catch (error) {
    return res.status(500).json({ message: "Failed to retrieve document", error: error.message });
  }
});

module.exports = router;
