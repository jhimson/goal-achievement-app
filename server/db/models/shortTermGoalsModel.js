/* eslint-disable camelcase */
const db = require("..");

const createNewShortTermGoal = (data) => {
  const { id, user_id, description } = data;
  return db.query({
    text: `INSERT INTO tbl_short_term_goals (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT) returning *`,
    values: [id, user_id, description],
  });
};

module.exports = { createNewShortTermGoal };
