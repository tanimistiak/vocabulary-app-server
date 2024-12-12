const express = require("express");
const { logOut } = require("../services/logout");
const router = express.Router();
router.route("/logout").post(logOut);
exports.logoutRouter = router;
