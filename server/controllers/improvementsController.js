/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewImprovement,
  findImprovementsByUserId,
  destroyOneImprovement,
  findTotalImprovementsByUserId,
} = require("../db/models/improvementsModel");

// ? @Description    Insert new improvement
// ? @Route          POST /api/v1/improvements
// ? @Access         Private/User
const addNewImprovement = asyncHandler(async (req, res) => {
  const { rows } = await createNewImprovement(req.body);
  if (rows) {
    res
      .status(201)
      .json({ Message: `Successfully insert a new improvement`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to insert a new improvement`);
  }
});

// ? @Description    Fetch all improvements
// ? @Route          POST /api/v1/improvements
// ? @Access         Private/User
const getAllImprovementsByUserId = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { rows } = await findImprovementsByUserId(user_id);
  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully fetched improvements`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to fetch improvements`);
  }
});

// ? @Description    Delete one improvements
// ? @Route          POST /api/v1/improvements
// ? @Access         Private/User
const deleteOneImprovement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { rows } = await destroyOneImprovement(id);
  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully deleted improvement`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to delete an improvement`);
  }
});

// ? @Description    Fetch total numbers of improvements
// ? @Route          GET /api/v1/improvements/total/:user_id
// ? @Access         Private/User
const getTotalImprovements = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { rows } = await findTotalImprovementsByUserId(user_id);
  if (rows) {
    res.status(200).json({ data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to fetch total numbers of improvements`);
  }
});

module.exports = {
  addNewImprovement,
  getAllImprovementsByUserId,
  deleteOneImprovement,
  getTotalImprovements,
};
