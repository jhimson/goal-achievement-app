/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewMistake,
  findMistakesByUserId,
  destroyOneMistake,
} = require("../db/models/mistakesModel");

// ? @Description    Insert new mistake
// ? @Route          POST /api/v1/mistakes
// ? @Access         Private/User
const addNewMistake = asyncHandler(async (req, res) => {
  const { rows } = await createNewMistake(req.body);

  if (rows) {
    res.status(201).json({ Message: `Successfully inserted a new mistake` });
  } else {
    res.status(500);
    throw new Error(`Failed to insert a new mistake`);
  }
});

// ? @Description    Fetch all mistakes
// ? @Route          GET /api/v1/mistakes
// ? @Access         Private/User
const getAllMistakesByUserId = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { rows } = await findMistakesByUserId(user_id);
  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully fetched mistakes`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to fetch mistakes`);
  }
});

// ? @Description    Delete one mistake
// ? @Route          DELETE /api/v1/mistakes
// ? @Access         Private/User
const deleteOneImprovement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { rows } = await destroyOneMistake(id);
  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully deleted mistake`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to delete an mistake`);
  }
});
module.exports = {
  addNewMistake,
  getAllMistakesByUserId,
  deleteOneImprovement,
};
