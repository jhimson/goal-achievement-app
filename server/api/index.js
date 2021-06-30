const express = require("express");

const Router = express.Router();

const userRoutes = require("./userRoutes");
const shortTermGoalRoutes = require("./shortTermGoalsRoutes");
const longTermGoalsRoutes = require("./longTermGoalsRoutes");
const achievementsRoutes = require("./achievementsRoutes");
const improvementsRoutes = require("./improvementsRoutes");
const mistakesRoutes = require("./mistakesRoutes");

Router.use("/users", userRoutes);
Router.use("/short-term-goals", shortTermGoalRoutes);
Router.use("/long-term-goals", longTermGoalsRoutes);
Router.use("/achievements", achievementsRoutes);
Router.use("/improvements", improvementsRoutes);
Router.use("/mistakes", mistakesRoutes);

module.exports = Router;
