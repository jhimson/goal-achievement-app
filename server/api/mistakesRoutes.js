const express = require("express");

const Router = express.Router();

const {
  addNewMistake,
  getAllMistakesByUserId,
  deleteOneMistake,
  getTotalMistakes,
} = require("../controllers/mistakesController");

Router.route("/").post(addNewMistake);
Router.route("/:user_id").get(getAllMistakesByUserId);
Router.route("/:id").delete(deleteOneMistake);
Router.route("/total/:user_id").get(getTotalMistakes);

module.exports = Router;
