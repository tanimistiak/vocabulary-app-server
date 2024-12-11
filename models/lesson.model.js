const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
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

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
