/* eslint-disable camelcase */
import Axios from 'axios';

import { longTermGoalsConstants } from '../types';

const { uuid } = require('uuidv4');

const {
  ADD_LONG_TERM_GOAL_REQUEST,
  ADD_LONG_TERM_GOAL_SUCCESS,
  ADD_LONG_TERM_GOAL_FAIL,
  REMOVE_LONG_TERM_GOAL_REQUEST,
  REMOVE_LONG_TERM_GOAL_SUCCESS,
  REMOVE_LONG_TERM_GOAL_FAIL,
  LONG_TERM_GOALS_LIST_REQUEST,
  LONG_TERM_GOALS_LIST_SUCCESS,
  LONG_TERM_GOALS_LIST_FAIL,
  GET_TOTAL_LONG_TERM_GOALS_REQUEST,
  GET_TOTAL_LONG_TERM_GOALS_SUCCESS,
  GET_TOTAL_LONG_TERM_GOALS_FAIL,
} = longTermGoalsConstants;

export const addNewLongTermGoal = ({ user_id, description }) => async (
  dispatch
) => {
  const id = uuid();
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch({ type: ADD_LONG_TERM_GOAL_REQUEST });

    const { data } = await Axios.post(
      `${process.env.REACT_APP_HOST}/api/v1/long-term-goals`,
      { id, user_id, description },
      config
    );
    dispatch({ type: ADD_LONG_TERM_GOAL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_LONG_TERM_GOAL_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getLongTermGoals = (user_id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch({ type: LONG_TERM_GOALS_LIST_REQUEST });
    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/long-term-goals/${user_id}`,
      config
    );
    dispatch({ type: LONG_TERM_GOALS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LONG_TERM_GOALS_LIST_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const deleteLongTermGoal = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch({ type: REMOVE_LONG_TERM_GOAL_REQUEST });

    const { data } = await Axios.delete(
      `${process.env.REACT_APP_HOST}/api/v1/long-term-goals/${id}`,
      config
    );
    dispatch({ type: REMOVE_LONG_TERM_GOAL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_LONG_TERM_GOAL_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getTotalLongTermGoals = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: GET_TOTAL_LONG_TERM_GOALS_REQUEST });
    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/long-term-goals/total/${user_id}`,
      config
    );
    dispatch({ type: GET_TOTAL_LONG_TERM_GOALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOTAL_LONG_TERM_GOALS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};
