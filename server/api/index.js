const express = require("express");

const Router = express.Router();

const userRoutes = require("./userRoutes");
const shortTermGoalRoutes = require("./shortTermGoalsRoutes");

Router.use("/users", userRoutes);
Router.use("/short-term-goals", shortTermGoalRoutes);

module.exports = Router;
