const express = require("express");
const { authenticate, authorize } = require("../middlewares/authenticate.middleware");
const { addLesson } = require("../services/admin/addLesson");
const router = express.Router();
router.route("/add-lesson").post(authenticate, authorize('admin'), addLesson);
exports.adminRouter = router;
