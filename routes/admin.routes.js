const express = require("express");
const {
  authenticate,
  authorize,
} = require("../middlewares/authenticate.middleware");
const { addLesson } = require("../services/admin/addLesson");
const { addVocabulary } = require("../services/admin/addVocabulary");
const { getVocabulary } = require("../services/admin/getVocabulary");
const router = express.Router();
router.route("/add-lesson").post(authenticate, authorize("admin"), addLesson);
router
  .route("/add-vocabulary")
  .post(authenticate, authorize("admin"), addVocabulary);
router
  .route("/get-vocabulary")
  .get(authenticate, authorize("admin"), getVocabulary);
exports.adminRouter = router;
