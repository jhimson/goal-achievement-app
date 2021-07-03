const express = require("express");

const Router = express.Router();

const {
  addNewLesson,
  getAllLessonsByUserId,
  deleteOneLesson,
  getTotalLessons,
} = require("../controllers/lessonsController");

Router.route(`/`).post(addNewLesson);
Router.route(`/:user_id`).get(getAllLessonsByUserId);
Router.route(`/:id`).delete(deleteOneLesson);
Router.route(`/total/:user_id`).get(getTotalLessons);

module.exports = Router;
