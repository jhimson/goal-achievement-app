/* eslint-disable no-undef */
/* eslint-disable camelcase */
const db = require("..");

const createNewLesson = (data) => {
  const { id, user_id, description } = data;

  return db.query({
    text: `INSERT INTO tbl_lessons (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT) returning *`,
    values: [id, user_id, description],
  });
};

const findLessonsByUserId = (user_id) =>
  db.query({
    text: `SELECT * FROM tbl_lessons WHERE user_id = $1 ORDER BY created_at DESC`,
    values: [user_id],
  });

const destroyOneLesson = (id) =>
  db.query({
    text: `DELETE FROM tbl_lessons WHERE id = $1 returning *`,
    values: [id],
  });

const findTotalLessonsByUserId = (user_id) =>
  db.query({
    text: `SELECT COUNT(id) as total_lessons FROM tbl_lessons WHERE user_id = $1`,
    values: [user_id],
  });

module.exports = {
  createNewLesson,
  findLessonsByUserId,
  destroyOneLesson,
  findTotalLessonsByUserId,
};
