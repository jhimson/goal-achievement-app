/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewShortTermGoal,
  findShortTermGoalsByUserId,
  destroyOneShortTermGoal,
  findTotalShortTermGoalsByUserId,
  updateShortTermGoalIsComplete,
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
const getShortTermGoals = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { rows } = await findShortTermGoalsByUserId(user_id);

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

// ? @Description    Fetch total short term goals
// ? @Route          GET /api/v1/short-term-goals/total/:user_id
// ? @Access         Private/User
const getTotalShortTermGoals = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const { rows } = await findTotalShortTermGoalsByUserId(user_id);

  if (rows) {
    res.status(200).json({ data: rows });
  } else {
    res.status(500);
    throw new Error("Failed to fetch total short term goals");
  }
});

// ? @Description    UPDATE Short term goal is_complete field
// ? @Route          PUT /api/v1/short-term-goals/is_complete/:id
// ? @Access         Private/User
const editShortTermGoalIsComplete = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { is_complete } = req.body;
  console.log("aw", req.body);
  const { rows } = await updateShortTermGoalIsComplete(id, is_complete);

  if (rows) {
    res.status(200).json({ data: rows });
  } else {
    res.status(500);
    throw new Error("Failed to update is complete field");
  }
});

module.exports = {
  addNewShortTermGoal,
  getShortTermGoals,
  deleteShortTermGoal,
  getTotalShortTermGoals,
  editShortTermGoalIsComplete,
};
