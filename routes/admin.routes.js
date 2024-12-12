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
const { getAllVocabulary } = require("../services/admin/getAllVocabulary");
const { updateVocabulary } = require("../services/admin/updateVocabulary");
const { deleteVocabulary } = require("../services/admin/deleteVocabulary");
const router = express.Router();
router.route("/add-lesson").post(authenticate, authorize("admin"), addLesson);
router
  .route("/update-lesson")
  .put(authenticate, authorize("admin"), updateLesson);
router
  .route("/delete-lesson")
  .post(authenticate, authorize("admin"), deleteLesson);
router
  .route("/add-vocabulary")
  .post(authenticate, authorize("admin"), addVocabulary);
router
  .route("/get-vocabulary")
  .get(authenticate, authorize("admin"), getVocabulary);
router
  .route("/get-all-vocabulary")
  .get(authenticate, authorize("admin"), getAllVocabulary);
router
  .route("/update-vocabulary")
  .put(authenticate, authorize("admin"), updateVocabulary);
router
  .route("/delete-vocabulary")
  .post(authenticate, authorize("admin"), deleteVocabulary);
exports.adminRouter = router;
