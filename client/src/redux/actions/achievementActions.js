/* eslint-disable camelcase */
import Axios from 'axios';
import { achievementConstants } from '../types';

const { uuid } = require('uuidv4');

const {
  CREATE_ACHIEVEMENT_REQUEST,
  CREATE_ACHIEVEMENT_SUCCESS,
  CREATE_ACHIEVEMENT_FAIL,
  GET_ACHIEVEMENTS_REQUEST,
  GET_ACHIEVEMENTS_SUCCESS,
  GET_ACHIEVEMENTS_FAIL,
  REMOVE_ACHIEVEMENT_REQUEST,
  REMOVE_ACHIEVEMENT_SUCCESS,
  REMOVE_ACHIEVEMENT_FAIL,
  GET_TOTAL_ACHIEVEMENTS_REQUEST,
  GET_TOTAL_ACHIEVEMENTS_SUCCESS,
  GET_TOTAL_ACHIEVEMENTS_FAIL,
} = achievementConstants;

export const insertNewAchievement = ({ user_id, description }) => async (
  dispatch
) => {
  const id = uuid();
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: CREATE_ACHIEVEMENT_REQUEST });

    const { data } = await Axios.post(
      `${process.env.REACT_APP_HOST}/api/v1/achievements`,
      { id, user_id, description },
      config
    );

    dispatch({ type: CREATE_ACHIEVEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ACHIEVEMENT_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getAllAchievements = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: GET_ACHIEVEMENTS_REQUEST });
    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/achievements/${user_id}`,
      config
    );
    dispatch({ type: GET_ACHIEVEMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ACHIEVEMENTS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const deleteAchievement = (id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    dispatch({ type: REMOVE_ACHIEVEMENT_REQUEST });
    const { data } = await Axios.delete(
      `${process.env.REACT_APP_HOST}/api/v1/achievements/${id}`,
      config
    );
    dispatch({ type: REMOVE_ACHIEVEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_ACHIEVEMENT_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getTotalAchievements = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: GET_TOTAL_ACHIEVEMENTS_REQUEST });
    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/achievements/total/${user_id}`,
      config
    );
    dispatch({ type: GET_TOTAL_ACHIEVEMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOTAL_ACHIEVEMENTS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};
