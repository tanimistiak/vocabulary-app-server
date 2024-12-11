const express = require("express");
const { login } = require("../services/login");
const router = express.Router();
router.route("/login").post(login);
exports.loginRouter = router;
