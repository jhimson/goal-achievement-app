/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");

const generateToken = (user_id) =>
  jwt.sign({ user_id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

module.exports = {
  generateToken,
};
