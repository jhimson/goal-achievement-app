/* eslint-disable camelcase */
const db = require("..");

const createNewShortTermGoal = (data) => {
  const { id, user_id, description } = data;
  return db.query({
    text: `INSERT INTO tbl_short_term_goals (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT) returning *`,
    values: [id, user_id, description],
  });
};

const fetchShortTermGoals = () =>
  db.query(`SELECT * FROM tbl_short_term_goals`);

const destroyOneShortTermGoal = (id) =>
  db.query({
    text: `DELETE FROM tbl_short_term_goals WHERE id = $1 returning *`,
    values: [id],
  });

module.exports = {
  createNewShortTermGoal,
  fetchShortTermGoals,
  destroyOneShortTermGoal,
};
