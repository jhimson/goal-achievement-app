const express = require("express");

const Router = express.Router();

const {
  addNewLongTermGoal,
  fetchShortTermGoalsById,
  deleteOneLongTermGoal,
} = require("../controllers/longTermGoalsController");

Router.route("/").post(addNewLongTermGoal);
Router.route("/:user_id").get(fetchShortTermGoalsById);
Router.route("/:id").delete(deleteOneLongTermGoal);

module.exports = Router;
