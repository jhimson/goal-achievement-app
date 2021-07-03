/* eslint-disable camelcase */
import Axios from 'axios';

import { lessonsConstants } from '../types';

const { uuid } = require('uuidv4');

const {
  CREATE_LESSON_REQUEST,
  CREATE_LESSON_SUCCESS,
  CREATE_LESSON_FAIL,
  GET_LESSONS_REQUEST,
  GET_LESSONS_SUCCESS,
  GET_LESSONS_FAIL,
  REMOVE_LESSON_REQUEST,
  REMOVE_LESSON_SUCCESS,
  REMOVE_LESSON_FAIL,
  GET_TOTAL_LESSONS_REQUEST,
  GET_TOTAL_LESSONS_SUCCESS,
  GET_TOTAL_LESSONS_FAIL,
} = lessonsConstants;

export const insertNewLesson = ({ user_id, description }) => async (
  dispatch
) => {
  const id = uuid();
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: CREATE_LESSON_REQUEST });

    const { data } = await Axios.post(
      `${process.env.REACT_APP_HOST}/api/v1/lessons`,
      {
        id,
        user_id,
        description,
      },
      config
    );

    dispatch({ type: CREATE_LESSON_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_LESSON_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getAllLessons = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: GET_LESSONS_REQUEST });
    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/lessons/${user_id}`,
      config
    );
    dispatch({ type: GET_LESSONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_LESSONS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const deleteLesson = (id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: REMOVE_LESSON_REQUEST });

    const { data } = await Axios.delete(
      `${process.env.REACT_APP_HOST}/api/v1/lessons/${id}`,
      config
    );
    dispatch({ type: REMOVE_LESSON_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_LESSON_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getTotalLessons = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: GET_TOTAL_LESSONS_REQUEST });
    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/lessons/total/${user_id}`,
      config
    );
    dispatch({ type: GET_TOTAL_LESSONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOTAL_LESSONS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};
