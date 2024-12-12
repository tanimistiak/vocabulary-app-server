const admin = require("firebase-admin");
exports.getUsers = async (req, res, next) => {
  try {
    const allUsers = [];
    const listUsers = await admin.auth().listUsers();
    // console.log(listUsers);
    listUsers.users.forEach((userRecord) => {
      allUsers.push({
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        role: userRecord.customClaims?.role || "user", // Default role
      });
    });
    res.json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
