/* eslint-disable camelcase */
const bcrypt = require("bcryptjs");
const db = require("..");

const salt = bcrypt.genSaltSync(10);

const fetchUsers = () => db.query("SELECT * FROM tbl_users");

const findEmail = (email) =>
  db.query({
    text: `SELECT * FROM tbl_users WHERE email = $1`,
    values: [email],
  });

const createNewUser = async (user) => {
  const { user_id, firstname, lastname, email, password } = user;
  const hashedPassword = bcrypt.hashSync(password, salt);

  return db.query({
    text: `INSERT INTO tbl_users (user_id, firstname, lastname, email, password, is_admin, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, DEFAULT, DEFAULT, DEFAULT) returning *`,
    values: [user_id, firstname, lastname, email, hashedPassword],
  });
};

const createNewMember = async (user_id, member_id) =>
  db.query({
    text: `INSERT INTO tbl_members (member_id, user_id, role) VALUES ($1, $2, DEFAULT)`,
    values: [member_id, user_id],
  });

const findUser = (email) =>
  db.query({
    text: `SELECT * FROM tbl_users WHERE email = $1`,
    values: [email],
  });

module.exports = {
  fetchUsers,
  findEmail,
  createNewUser,
  findUser,
  createNewMember,
};
