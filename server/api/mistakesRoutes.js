const express = require("express");

const Router = express.Router();

const {
  addNewMistake,
  getAllMistakesByUserId,
  deleteOneImprovement,
} = require("../controllers/mistakesController");

Router.route("/").post(addNewMistake);
Router.route("/:user_id").get(getAllMistakesByUserId);
Router.route("/:id").delete(deleteOneImprovement);

module.exports = Router;
