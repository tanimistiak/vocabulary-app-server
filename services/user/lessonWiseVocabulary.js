const Vocabulary = require("../../models/vocabulary.model");

exports.lessonWiseVocabulary = async (req, res) => {
  const { lessonNumber } = req.params;

  try {
    const allVocabulary = await Vocabulary.find();

    const filteredVocabulary = allVocabulary.filter(
      (item) => parseInt(lessonNumber) === item.lesson
    );
    // console.log(filteredVocabulary);
    res.status(201).json({
      message: "vocabulary found",
      lesson: filteredVocabulary,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error finding vocabulary", error: error.message });
  }
};
