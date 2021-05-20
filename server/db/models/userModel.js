/* eslint-disable camelcase */
const bcrypt = require("bcryptjs");
const db = require("..");

const salt = bcrypt.genSaltSync(10);

const findUser = (username) =>
  db.query({
    text: `SELECT * FROM tbl_users WHERE username = $1`,
    values: [username],
  });

const fetchUsers = () => db.query("SELECT * FROM tbl_users");

const createNewUser = async (user) => {
  const { user_id, firstname, lastname, username, password } = user;
  const hashedPassword = bcrypt.hashSync(password, salt);

  return db.query({
    text: `INSERT INTO tbl_users (user_id, firstname, lastname, username, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5,  DEFAULT, DEFAULT) returning *`,
    values: [user_id, firstname, lastname, username, hashedPassword],
  });
};

module.exports = {
  fetchUsers,
  createNewUser,
  findUser,
};
