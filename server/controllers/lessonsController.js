/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const asyncHandler = require("express-async-handler");

const {
  createNewLesson,
  findLessonsByUserId,
  destroyOneLesson,
  findTotalLessonsByUserId,
} = require("../db/models/lessonsModel");

// ? @Description    Insert new lesson
// ? @Route          POST /api/v1/lessons
// ? @Access         Private/User
const addNewLesson = asyncHandler(async (req, res) => {
  const { rows } = await createNewLesson(req.body);

  if (rows) {
    res
      .status(201)
      .json({ Message: `Successfully inserted new lesson`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to insert new lesson`);
  }
});

// ? @Description    Fetch all lessons
// ? @Route          GET /api/v1/lessons/:user_id
// ? @Access         Private/User
const getAllLessonsByUserId = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const { rows } = await findLessonsByUserId(user_id);

  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully fetched all lessons`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to fetch lessons`);
  }
});

// ? @Description    Delete one lessons
// ? @Route          DELETE /api/v1/lessons/:id
// ? @Access         Private/User
const deleteOneLesson = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { rows } = await destroyOneLesson(id);

  if (rows) {
    res
      .status(200)
      .json({ Message: `Successfully deleted lesson`, data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to delete lesson`);
  }
});

// ? @Description    Fetch total numbers of lessons
// ? @Route          GET /api/v1/lessons/total/:user_id
// ? @Access         Private/User
const getTotalLessons = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { rows } = await findTotalLessonsByUserId(user_id);
  if (rows) {
    res.status(200).json({ data: rows });
  } else {
    res.status(500);
    throw new Error(`Failed to fetch total numbers of lessons`);
  }
});

module.exports = {
  addNewLesson,
  getAllLessonsByUserId,
  deleteOneLesson,
  getTotalLessons,
};
