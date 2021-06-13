/* eslint-disable no-undef */
/* eslint-disable camelcase */
const db = require("..");

const createNewLongTermGoal = (data) => {
  const { id, user_id, description } = data;

  return db.query({
    text: `INSERT INTO tbl_long_term_goals (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT) returning *`,
    values: [id, user_id, description],
  });
};

module.exports = {
  createNewLongTermGoal,
};
