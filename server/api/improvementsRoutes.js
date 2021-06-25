const express = require("express");

const Router = express.Router();
const {
  addNewImprovement,
  getAllImprovementsByUserId,
  deleteOneImprovement,
} = require("../controllers/improvementsController");

Router.route("/").post(addNewImprovement);
Router.route("/:user_id").get(getAllImprovementsByUserId);
Router.route("/:id").delete(deleteOneImprovement);

module.exports = Router;
