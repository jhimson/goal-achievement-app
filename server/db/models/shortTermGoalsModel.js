/* eslint-disable no-undef */
/* eslint-disable camelcase */
const db = require("..");

const createNewShortTermGoal = (data) => {
  const { id, user_id, description } = data;
  return db.query({
    text: `INSERT INTO tbl_short_term_goals (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT) returning *`,
    values: [id, user_id, description],
  });
};

const fetchShortTermGoalsByUserId = (user_id) =>
  db.query({
    text: `SELECT * FROM tbl_short_term_goals WHERE user_id = $1`,
    values: [user_id],
  });

const destroyOneShortTermGoal = (id) =>
  db.query({
    text: `DELETE FROM tbl_short_term_goals WHERE id = $1 returning *`,
    values: [id],
  });

const fetchTotalShortTermGoalsByUserId = (user_id) =>
  db.query({
    text: `SELECT COUNT(id) as total_short_term_goals FROM tbl_short_term_goals WHERE user_id = $1`,
    values: [user_id],
  });

module.exports = {
  createNewShortTermGoal,
  fetchShortTermGoalsByUserId,
  destroyOneShortTermGoal,
  fetchTotalShortTermGoalsByUserId,
};
