/* eslint-disable no-unused-vars */
const express = require("express");

const Router = express.Router();

const {
  addNewShortTermGoal,
  getShortTermGoals,
  deleteShortTermGoal,
} = require("../controllers/shortTermGoalsController");

Router.route("/").post(addNewShortTermGoal);
Router.route("/:user_id").get(getShortTermGoals);

Router.route("/:id").delete(deleteShortTermGoal);

module.exports = Router;
