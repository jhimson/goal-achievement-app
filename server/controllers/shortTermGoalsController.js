/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const { createNewShortTermGoal } = require("../db/models/shortTermGoalsModel");

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

module.exports = {
  addNewShortTermGoal,
};
