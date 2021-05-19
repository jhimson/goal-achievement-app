const express = require("express");

const Router = express.Router();

const {
  getUsers,
  registerUser,
  authUser,
} = require("../controllers/userController");

Router.route("/").get(getUsers).post(registerUser);

Router.post("/login", authUser);

module.exports = Router;
