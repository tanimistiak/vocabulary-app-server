const admin = require("firebase-admin");
exports.updateUser = async (req, res) => {
  // console.log(req.body);
  try {
    const { uid, role } = req.body;
    console.log(uid, role);
    await admin.auth().setCustomUserClaims(uid, { role });
    // console.log(response);
    res.status(200).json({ message: "Updated", status: true });
  } catch (error) {
    console.error("Error updating user:", error.message);
    res
      .status(500)
      .json({ message: "Error updating", error: error.message, status: false });
  }
};
