const Vocabulary = require("../../models/vocabulary.model");

exports.updateVocabulary = async (req, res) => {
  // console.log(req.body);
  try {
    const { word, pronunciation, when, lesson } = req.body.edit;

    const updateData = req.body.edit;
    const parsedLesson = parseInt(lesson);
    const newData = { ...updateData, lesson: parsedLesson };
    if (!req.body.id) {
      return res
        .status(400)
        .json({ message: "Vocabulary ID is required", status: false });
    }

    const updatedVocabulary = await Vocabulary.findByIdAndUpdate(
      req.body.id,
      { $set: newData },
      { new: true }
    );

    // console.log("Updated Lesson:", updatedLesson);

    if (!updatedVocabulary) {
      return res
        .status(404)
        .json({ message: "Vocabulary not found", status: false });
    }

    res
      .status(200)
      .json({ message: "Updated", status: true, updatedVocabulary });
  } catch (error) {
    console.error("Error updating vocabulary:", error.message);
    res
      .status(500)
      .json({ message: "Error updating", error: error.message, status: false });
  }
};
