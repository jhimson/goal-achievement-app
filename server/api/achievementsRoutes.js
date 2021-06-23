const express = require("express");

const Router = express.Router();

const {
  addNewAchievement,
  getAllAchievementsByUserId,
  deleteOneAchievement,
  getTotalAchievements,
} = require("../controllers/achievementsController");

Router.route("/").post(addNewAchievement);
Router.route("/:user_id").get(getAllAchievementsByUserId);
Router.route("/:id").delete(deleteOneAchievement);
Router.route("/total/:user_id").get(getTotalAchievements);

module.exports = Router;
