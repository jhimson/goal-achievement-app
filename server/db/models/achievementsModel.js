/* eslint-disable camelcase */
const db = require("..");

const createNewAchievements = (data) => {
  const { id, user_id, description } = data;

  return db.query({
    text: `INSERT INTO tbl_achievements (id, user_id, description, created_at) VALUES ($1, $2, $3, DEFAULT) returning *`,
    values: [id, user_id, description],
  });
};

const fetchAllAchievementsByUserId = (user_id) =>
  db.query({
    text: `SELECT * FROM tbl_achievements WHERE user_id = $1 ORDER BY created_at DESC`,
    values: [user_id],
  });

const destroyOneAchievement = (id) =>
  db.query({
    text: `DELETE FROM tbl_achievements WHERE id = $1 returning *`,
    values: [id],
  });

const findTotalAchievementsByUserId = (user_id) =>
  db.query({
    text: `SELECT COUNT(id) as total_achievements FROM tbl_achievements WHERE user_id = $1`,
    values: [user_id],
  });

module.exports = {
  createNewAchievements,
  fetchAllAchievementsByUserId,
  destroyOneAchievement,
  findTotalAchievementsByUserId,
};
