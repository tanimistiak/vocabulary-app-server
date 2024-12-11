const Lesson = require("../../models/lesson.model");
const Vocabulary = require("../../models/vocabulary.model");

exports.getVocabulary = async (req, res, next) => {
  try {
    const finalArray = [];
    const allVocabulary = await Vocabulary.find();
    const lessons = await Lesson.find();
    for (const lesson of lessons) {
      const filteredVocabulary = allVocabulary.filter(
        (item) => lesson.lessonNumber === item.lesson
      );
      const newFormedLession = {
        ...lesson,
        vocabularyLength: filteredVocabulary.length,
      };
      finalArray.push(newFormedLession);
    }
    res.status(201).json({
      message: "Vocabulary found",
      lesson: finalArray,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating vocabulary", error: error.message });
  }
};
