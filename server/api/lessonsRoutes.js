const express = require("express");

const Router = express.Router();

const {
  addNewLesson,
  getAllLessonsByUserId,
  deleteOneLesson,
} = require("../controllers/lessonsController");

Router.route(`/`).post(addNewLesson);
Router.route(`/:user_id`).get(getAllLessonsByUserId);
Router.route(`/:id`).delete(deleteOneLesson);

module.exports = Router;
