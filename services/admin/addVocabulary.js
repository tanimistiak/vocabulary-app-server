const Vocabulary = require("../../models/vocabulary.model");

exports.addVocabulary = async (req, res, next) => {
  try {
    const { word, pronunciation, when, lesson, adminEmail } = req.body;
    const newVocabulary = new Vocabulary({
      word,
      pronunciation,
      when,
      lesson,
      adminEmail,
    });
    await newVocabulary.save();
    res.status(201).json({
      message: "Vocabulary created successfully",
      vocabulary: newVocabulary,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating vocabulary", error: error.message });
  }
};
