/* eslint-disable no-unused-vars */
const express = require("express");

const Router = express.Router();

const {
  addNewShortTermGoal,
} = require("../controllers/shortTermGoalsController");

Router.route("/").post(addNewShortTermGoal);

module.exports = Router;
