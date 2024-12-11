const admin = require("firebase-admin");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    // console.log(token);
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

const authorize = (requiredRole) => {
  return (req, res, next) => {
    if (!req.user || req.user.role !== requiredRole) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
};

module.exports = { authenticate, authorize };
