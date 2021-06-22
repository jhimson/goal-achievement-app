/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewAchievements,
  fetchAllAchievementsByUserId,
  destroyOneAchievement,
} = require("../db/models/achievementsModel");

// ? @Description    Insert new achievement
// ? @Route          POST /api/v1/achievements
// ? @Access         Private/User
const addNewAchievement = asyncHandler(async (req, res) => {
  const { rows } = await createNewAchievements(req.body);
  if (rows) {
    res
      .status(201)
      .json({ Message: `Successfully inserted a new achievement`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to create new achievement`);
  }
});
// ? @Description    Fetch all achievements by user_id
// ? @Route          GET /api/v1/achievements
// ? @Access         Private/User
const getAllAchievementsByUserId = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const { rows } = await fetchAllAchievementsByUserId(user_id);

  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully fetch achievements`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to fetch achievements`);
  }
});

// ? @Description    Delete one achievement
// ? @Route          GET /api/v1/achievements
// ? @Access         Private/User
const deleteOneAchievement = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { rows } = await destroyOneAchievement(id);

  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully deleted achievement`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to delete an achievement`);
  }
});

module.exports = {
  addNewAchievement,
  getAllAchievementsByUserId,
  deleteOneAchievement,
};
