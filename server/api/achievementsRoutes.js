const express = require("express");

const Router = express.Router();

const {
  addNewAchievement,
  getAllAchievementsByUserId,
  deleteOneAchievement,
} = require("../controllers/achievementsController");

Router.route("/").post(addNewAchievement);
Router.route("/:user_id").get(getAllAchievementsByUserId);
Router.route("/:id").delete(deleteOneAchievement);

module.exports = Router;
