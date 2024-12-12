const Vocabulary = require("../../models/vocabulary.model");

exports.getAllVocabulary = async (req, res) => {
  try {
    const allVocabulary = await Vocabulary.find();
    res.status(201).json({
      message: "Vocabulary found",
      vocabulary: allVocabulary,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting vocabulary", error: error.message });
  }
};
