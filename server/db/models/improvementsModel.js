/* eslint-disable no-undef */
/* eslint-disable camelcase */
const db = require("..");

const createNewImprovement = (data) => {
  const { id, user_id, description } = data;

  return db.query({
    text: `INSERT INTO tbl_improvements (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT) returning *`,
    values: [id, user_id, description],
  });
};

const findImprovementsByUserId = (user_id) =>
  db.query({
    text: `SELECT * FROM tbl_improvements WHERE user_id = $1 ORDER BY created_at DESC`,
    values: [user_id],
  });

const destroyOneImprovement = (id) =>
  db.query({
    text: `DELETE FROM tbl_improvements WHERE id = $1 returning *`,
    values: [id],
  });

const findTotalImprovementsByUserId = (user_id) =>
  db.query({
    text: `SELECT COUNT(id) as total_improvements FROM tbl_improvements WHERE user_id = $1`,
    values: [user_id],
  });

module.exports = {
  createNewImprovement,
  findImprovementsByUserId,
  destroyOneImprovement,
  findTotalImprovementsByUserId,
};
