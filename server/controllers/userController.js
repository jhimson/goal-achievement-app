/* eslint-disable camelcase */
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const {
  fetchUsers,
  createNewUser,
  findUser,
} = require("../db/models/userModel");
const { generateToken } = require("../utils/auth");

// ? @Description    Fetch all users
// ? @Route          GET /api/v1/users
// ? @Access         Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const { rows } = await fetchUsers();
  if (rows) {
    res.status(200).json(rows);
  } else {
    res.status(404);
    throw new Error("No users found in the database");
  }
});

// ? @Description    Add new user
// ? @Route          POST /api/v1/users
// ? @Access         Private/Admin
const registerUser = asyncHandler(async (req, res) => {
  const userExists = await findUser(req.body.username);

  if (userExists.rowCount) {
    res.status(400);
    throw new Error("Username already exists!");
  }

  const newUser = await createNewUser(req.body);

  const { rows, rowCount } = newUser;
  const { user_id, firstname, lastname, username } = rows[0];

  if (rowCount) {
    res.status(201).json({
      message: `Successfully Created a new user`,
      user_id,
      firstname,
      lastname,
      username,
      token: generateToken(user_id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong! Invalid user data");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const { rowCount, rows } = await findUser(username);
  const userData = rows[0];
  if (rowCount && bcrypt.compareSync(password, userData.password)) {
    res.json({
      user_id: userData.user_id,
      firstname: userData.firstname,
      lastname: userData.lastname,
      username: userData.username,
      token: generateToken(userData.user_id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Username/Password");
  }
});

module.exports = {
  getUsers,
  registerUser,
  authUser,
};
