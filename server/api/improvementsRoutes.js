const express = require("express");

const Router = express.Router();
const {
  addNewImprovement,
  getAllImprovementsByUserId,
  deleteOneImprovement,
  getTotalImprovements,
} = require("../controllers/improvementsController");

Router.route("/").post(addNewImprovement);
Router.route("/:user_id").get(getAllImprovementsByUserId);
Router.route("/:id").delete(deleteOneImprovement);
Router.route("/total/:user_id").get(getTotalImprovements);

module.exports = Router;
