const express = require("express");

const Router = express.Router();

const {
  addNewLongTermGoal,
  fetchShortTermGoalsById,
  deleteOneLongTermGoal,
  getTotalLongTermGoals,
} = require("../controllers/longTermGoalsController");

Router.route("/").post(addNewLongTermGoal);
Router.route("/:user_id").get(fetchShortTermGoalsById);
Router.route("/:id").delete(deleteOneLongTermGoal);
Router.route("/total/:user_id").get(getTotalLongTermGoals);

module.exports = Router;
