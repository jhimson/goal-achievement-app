/* eslint-disable no-undef */
/* eslint-disable camelcase */
const db = require("..");

const createNewMistake = (data) => {
  const { id, user_id, description } = data;

  return db.query({
    text: `INSERT INTO tbl_mistakes (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT)`,
    values: [id, user_id, description],
  });
};

const findMistakesByUserId = (user_id) =>
  db.query({
    text: `SELECT * FROM tbl_mistakes WHERE user_id = $1`,
    values: [user_id],
  });

const destroyOneMistake = (id) =>
  db.query({
    text: `DELETE FROM tbl_mistakes WHERE id = $1 returning *`,
    values: [id],
  });

const findTotalMistakesByUserId = (user_id) =>
  db.query({
    text: `SELECT COUNT(id) as total_mistakes FROM tbl_mistakes WHERE user_id = $1`,
    values: [user_id],
  });

module.exports = {
  createNewMistake,
  findMistakesByUserId,
  destroyOneMistake,
  findTotalMistakesByUserId,
};
