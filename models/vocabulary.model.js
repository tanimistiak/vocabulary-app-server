const mongoose = require("mongoose");

const vocabularySchema = new mongoose.Schema(
  {
    lessonName: {
      type: String,
      required: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Vocabulary = mongoose.model("Vocabulary", vocabularySchema);

module.exports = Vocabulary;
