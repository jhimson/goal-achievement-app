/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const { createNewLongTermGoal } = require("../db/models/longTermGoalsModel");

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

module.exports = {
  addNewLongTermGoal,
};
