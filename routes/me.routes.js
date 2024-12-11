const express = require("express");
const { me } = require("../services/me");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = express.Router();
router.route("/me").get(authenticate, me);
exports.meRouter = router;
