const admin = require("firebase-admin");
exports.login = async (req, res, next) => {
  const { idToken } = req.body;
  console.log(idToken);
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const user = await admin.auth().getUser(decodedToken.uid);

    const role = user.customClaims?.role || "user";
    const authToken = idToken;

    res.cookie("auth_token", authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({ message: "Login successful", role });
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
};
