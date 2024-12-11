const Lesson = require("../../models/lesson.model");

exports.deleteLesson = async (req, res) => {
  try {
    if (!req.body._id) {
      return res
        .status(400)
        .json({ message: "Lesson ID is required", status: false });
    }

    const deletedLesson = await Lesson.findByIdAndDelete(req.body._id);

    if (!deletedLesson) {
      return res
        .status(404)
        .json({ message: "Lesson not found", status: false });
    }

    res.status(200).json({
      message: "Lesson deleted successfully",
      status: true,
      deletedLesson,
    });
  } catch (error) {
    console.error("Error deleting lesson:", error.message);
    res.status(500).json({
      message: "Error deleting lesson",
      error: error.message,
      status: false,
    });
  }
};
