const Lesson = require("../../models/lesson.model");

exports.addLesson = async (req, res, next) => {
  //   console.log("i am add lesson");
  try {
    const { lessonNumber, lessonName } = req.body;
    const newLesson = new Lesson({ lessonNumber, lessonName });
    await newLesson.save();
    res
      .status(201)
      .json({ message: "Lesson created successfully", lesson: newLesson });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating lesson", error: error.message });
  }
};
