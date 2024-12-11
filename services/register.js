const admin = require("firebase-admin");
exports.register = async (req, res, next) => {
  const { email, password, name, photoURL } = req.body;
  //   console.log(email);
  //   console.log(photoURL);
  try {
    const userRecord = await admin
      .auth()
      .createUser({ email, password, displayName: name, photoURL });
    const userRole = "user";
    // console.log(userRecord);
    await admin.auth().setCustomUserClaims(userRecord.uid, { role: userRole });

    res
      .status(201)
      .json({ message: "User registered successfully", role: userRole });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};
