const express = require("express");

const Router = express.Router();

const userRoutes = require("./userRoutes");
const shortTermGoalRoutes = require("./shortTermGoalsRoutes");
const longTermGoalsRoutes = require("./longTermGoalsRoutes");

Router.use("/users", userRoutes);
Router.use("/short-term-goals", shortTermGoalRoutes);
Router.use("/long-term-goals", longTermGoalsRoutes);

module.exports = Router;
