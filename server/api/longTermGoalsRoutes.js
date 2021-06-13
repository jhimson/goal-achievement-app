const express = require("express");

const Router = express.Router();

const {
  addNewLongTermGoal,
} = require("../controllers/longTermGoalsController");

Router.route("/").post(addNewLongTermGoal);

module.exports = Router;
