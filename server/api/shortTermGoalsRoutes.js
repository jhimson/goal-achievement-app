/* eslint-disable no-unused-vars */
const express = require("express");

const Router = express.Router();

const {
  addNewShortTermGoal,
  getAllShortTermGoals,
  deleteShortTermGoal,
} = require("../controllers/shortTermGoalsController");

Router.route("/").post(addNewShortTermGoal).get(getAllShortTermGoals);

Router.route("/:id").delete(deleteShortTermGoal);

module.exports = Router;
