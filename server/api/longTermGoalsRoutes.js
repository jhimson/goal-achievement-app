const express = require("express");

const Router = express.Router();

const {
  addNewLongTermGoal,
  fetchShortTermGoalsById,
} = require("../controllers/longTermGoalsController");

Router.route("/").post(addNewLongTermGoal);
Router.route("/:user_id").get(fetchShortTermGoalsById);

module.exports = Router;
