/* eslint-disable no-unused-vars */
const express = require("express");

const Router = express.Router();

const {
  addNewShortTermGoal,
  getAllShortTermGoals,
} = require("../controllers/shortTermGoalsController");

Router.route("/").post(addNewShortTermGoal).get(getAllShortTermGoals);

module.exports = Router;
