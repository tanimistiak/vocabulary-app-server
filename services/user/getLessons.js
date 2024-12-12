const Lesson = require("../../models/lesson.model");
exports.getLessons = async (req, res, next) => {
  try {
    const allLesson = await Lesson.find();
    res.status(201).json({
      message: "Lesson found",
      lessons: allLesson,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting lesson", error: error.message });
  }
};
