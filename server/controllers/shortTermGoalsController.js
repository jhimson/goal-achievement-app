/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewShortTermGoal,
  fetchShortTermGoals,
  destroyOneShortTermGoal,
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

// ? @Description    Delete one short term goal
// ? @Route          DEL /api/v1/short-term-goals
// ? @Access         Private/User
const deleteShortTermGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { rows } = await destroyOneShortTermGoal(id);

  if (rows) {
    res.status(200).json({ message: `Successfully deleted goal`, data: rows });
  } else {
    res.status(500);
    throw new Error("Failed to delete short term goal");
  }
});

module.exports = {
  addNewShortTermGoal,
  getAllShortTermGoals,
  deleteShortTermGoal,
};
