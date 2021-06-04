/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewShortTermGoal,
  fetchShortTermGoals,
} = require("../db/models/shortTermGoalsModel");

// ? @Description    Insert new short term goal
// ? @Route          POST /api/v1/short-term-goals
// ? @Access         Private/User
const addNewShortTermGoal = asyncHandler(async (req, res) => {
  const { rows } = await createNewShortTermGoal(req.body);

  if (rows) {
    res.status(201).json(rows);
  } else {
    res.status(500);
    throw new Error("Failed to insert new short term goal");
  }
});

// ? @Description    Fetch all short term goals
// ? @Route          GET /api/v1/short-term-goals
// ? @Access         Private/User
const getAllShortTermGoals = asyncHandler(async (req, res) => {
  const { rows } = await fetchShortTermGoals();

  if (rows) {
    res
      .status(200)
      .json({ message: `Successfully fetch short term goals`, data: rows });
  } else {
    res.status(500);
    throw new Error("Failed to fetch short term goals");
  }
});

module.exports = {
  addNewShortTermGoal,
  getAllShortTermGoals,
};
