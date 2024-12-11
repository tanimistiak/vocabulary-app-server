const express = require("express");
const { register } = require("../services/register.js");
const router = express.Router();
router.route("/register").post(register);
exports.registerRouter = router;
