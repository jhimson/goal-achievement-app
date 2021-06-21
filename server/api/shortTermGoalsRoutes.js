/* eslint-disable no-unused-vars */
const express = require("express");

const Router = express.Router();

const {
  addNewShortTermGoal,
  getShortTermGoals,
  deleteShortTermGoal,
  getTotalShortTermGoals,
} = require("../controllers/shortTermGoalsController");

Router.route("/").post(addNewShortTermGoal);
Router.route("/:user_id").get(getShortTermGoals);
Router.route("/:id").delete(deleteShortTermGoal);
Router.route("/total/:user_id").get(getTotalShortTermGoals);

module.exports = Router;
