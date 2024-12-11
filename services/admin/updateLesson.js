const Lesson = require("../../models/lesson.model");

exports.updateLesson = async (req, res) => {
  console.log(req.body);

  try {
    const updateData = {};
    if (req.body.lessonName) {
      updateData.lessonName = req.body.lessonName;
    }
    if (req.body.lessonNumber) {
      updateData.lessonNumber = req.body.lessonNumber;
    }

    if (!req.body._id) {
      return res
        .status(400)
        .json({ message: "Lesson ID is required", status: false });
    }

    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.body._id,
      { $set: updateData },
      { new: true }
    );

    console.log("Updated Lesson:", updatedLesson);

    if (!updatedLesson) {
      return res
        .status(404)
        .json({ message: "Lesson not found", status: false });
    }

    res.status(200).json({ message: "Updated", status: true, updatedLesson });
  } catch (error) {
    console.error("Error updating lesson:", error.message);
    res
      .status(500)
      .json({ message: "Error updating", error: error.message, status: false });
  }
};
