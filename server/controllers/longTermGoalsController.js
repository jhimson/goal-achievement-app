/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewLongTermGoal,
  findLongTermGoalsByUserId,
  destroyOneShortTermGoal,
  findTotalLongTermGoalsByUserId,
} = require("../db/models/longTermGoalsModel");

// ? @Description    Insert new long term goal
// ? @Route          POST /api/v1/long-term-goals
// ? @Access         Private/User
const addNewLongTermGoal = asyncHandler(async (req, res) => {
  const { rows } = await createNewLongTermGoal(req.body);

  if (rows) {
    res.status(201).json(rows);
  } else {
    res.status(500);
    throw new Error("Failed to insert new short term goal");
  }
});

// ? @Description    Fetch long term goals by user id
// ? @Route          GET /api/v1/long-term-goals
// ? @Access         Private/User
const fetchShortTermGoalsById = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const { rows } = await findLongTermGoalsByUserId(user_id);
  if (rows) {
    res
      .status(200)
      .json({ message: `Successfully fetched long term goals`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to fetch long term goals`);
  }
});

// ? @Description    Delete one long term goal by id
// ? @Route          DEL /api/v1/long-term-goals
// ? @Access         Private/User
const deleteOneLongTermGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { rows } = await destroyOneShortTermGoal(id);
  if (rows) {
    res.status(202).json({ message: `Successfully deleted goal` });
  } else {
    res.status(500);
    throw new Error(`Failed to delete long term goal`);
  }
});

// ? @Description    Fetch total long term goal by user_id
// ? @Route          DEL /api/v1/long-term-goals/total/:user_id
// ? @Access         Private/User
const getTotalLongTermGoals = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const { rows } = await findTotalLongTermGoalsByUserId(user_id);

  if (rows) {
    res.status(200).json({ data: rows });
  } else {
    res.status(500);
    throw new Error(`failed to fetch total long term goals`);
  }
});
module.exports = {
  addNewLongTermGoal,
  fetchShortTermGoalsById,
  deleteOneLongTermGoal,
  getTotalLongTermGoals,
};
