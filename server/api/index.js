const express = require("express");

const Router = express.Router();

const userRoutes = require("./userRoutes");

Router.use("/users", userRoutes);

module.exports = Router;
