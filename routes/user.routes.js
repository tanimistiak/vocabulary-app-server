const express = require("express");
const {
  authenticate,
  authorize,
} = require("../middlewares/authenticate.middleware");
const { getLessons } = require("../services/user/getLessons");
const {
  lessonWiseVocabulary,
} = require("../services/user/lessonWiseVocabulary");
const router = express.Router();
router.route("/get-lessons").get(authenticate, authorize("user"), getLessons);
router
  .route("/get-lessons/:lessonNumber")
  .get(authenticate, authorize("user"), lessonWiseVocabulary);
exports.userRouter = router;
