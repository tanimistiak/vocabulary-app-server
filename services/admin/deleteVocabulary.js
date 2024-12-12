const Vocabulary = require("../../models/vocabulary.model");

exports.deleteVocabulary = async (req, res) => {
  try {
    if (!req.body._id) {
      return res
        .status(400)
        .json({ message: "Vocabulary ID is required", status: false });
    }

    const deletedVocabulary = await Vocabulary.findByIdAndDelete(req.body._id);

    if (!deletedVocabulary) {
      return res
        .status(404)
        .json({ message: "Vocabulary not found", status: false });
    }

    res.status(200).json({
      message: "Vocabulary deleted successfully",
      status: true,
      deletedVocabulary,
    });
  } catch (error) {
    console.error("Error deleting vocabulary:", error.message);
    res.status(500).json({
      message: "Error deleting vocabulary",
      error: error.message,
      status: false,
    });
  }
};
