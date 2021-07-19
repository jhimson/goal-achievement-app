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

const findLongTermGoalsByUserId = (user_id) =>
  db.query({
    text: `SELECT * FROM tbl_long_term_goals WHERE user_id = $1 ORDER BY created_at DESC`,
    values: [user_id],
  });

const destroyOneShortTermGoal = (id) =>
  db.query({
    text: `DELETE FROM tbl_long_term_goals WHERE id = $1 returning *`,
    values: [id],
  });

const findTotalLongTermGoalsByUserId = (user_id) =>
  db.query({
    text: `SELECT COUNT(id) as total_long_term_goals FROM tbl_long_term_goals WHERE user_id = $1`,
    values: [user_id],
  });

module.exports = {
  createNewLongTermGoal,
  findLongTermGoalsByUserId,
  destroyOneShortTermGoal,
  findTotalLongTermGoalsByUserId,
};
