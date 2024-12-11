const express = require("express");
const {
  authenticate,
  authorize,
} = require("../middlewares/authenticate.middleware");
const { addLesson } = require("../services/admin/addLesson");
const { addVocabulary } = require("../services/admin/addVocabulary");
const { getVocabulary } = require("../services/admin/getVocabulary");
const { updateLesson } = require("../services/admin/updateLesson");
const { deleteLesson } = require("../services/admin/deleteLesson");
const router = express.Router();
router.route("/add-lesson").post(authenticate, authorize("admin"), addLesson);
router.route("/update-lesson").put(authenticate, authorize("admin"), updateLesson);
router.route("/delete-lesson").post(authenticate, authorize("admin"), deleteLesson);
router
  .route("/add-vocabulary")
  .post(authenticate, authorize("admin"), addVocabulary);
router
  .route("/get-vocabulary")
  .get(authenticate, authorize("admin"), getVocabulary);
exports.adminRouter = router;
