/* eslint-disable camelcase */
import Axios from 'axios';

import { shortTermGoalsConstants } from '../types';

const { uuid } = require('uuidv4');
// https://goals-achievement.herokuapp.com/
// ${process.env.REACT_APP_HOST}/

const {
  ADD_SHORT_TERM_GOAL_REQUEST,
  ADD_SHORT_TERM_GOAL_SUCCESS,
  ADD_SHORT_TERM_GOAL_FAIL,
  REMOVE_SHORT_TERM_GOAL_REQUEST,
  REMOVE_SHORT_TERM_GOAL_SUCCESS,
  REMOVE_SHORT_TERM_GOAL_FAIL,
  SHORT_TERM_GOALS_LIST_REQUEST,
  SHORT_TERM_GOALS_LIST_SUCCESS,
  SHORT_TERM_GOALS_LIST_FAIL,
  GET_TOTAL_SHORT_TERM_GOALS_REQUEST,
  GET_TOTAL_SHORT_TERM_GOALS_SUCCESS,
  GET_TOTAL_SHORT_TERM_GOALS_FAIL,
} = shortTermGoalsConstants;

export const addNewShortTermGoal = ({ user_id, description }) => async (
  dispatch
) => {
  const id = uuid();
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    dispatch({ type: ADD_SHORT_TERM_GOAL_REQUEST });
    const { data } = await Axios.post(
      `${process.env.REACT_APP_HOST}/api/v1/short-term-goals`,
      { id, user_id, description },
      config
    );
    dispatch({ type: ADD_SHORT_TERM_GOAL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_SHORT_TERM_GOAL_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const deleteShortTermGoal = (id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    dispatch({ type: REMOVE_SHORT_TERM_GOAL_REQUEST });
    const { data } = await Axios.delete(
      `${process.env.REACT_APP_HOST}/api/v1/short-term-goals/${id}`,
      config
    );
    dispatch({ type: REMOVE_SHORT_TERM_GOAL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_SHORT_TERM_GOAL_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getShortTermGoals = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    dispatch({ type: SHORT_TERM_GOALS_LIST_REQUEST });
    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/short-term-goals/${user_id}`,
      config
    );
    dispatch({ type: SHORT_TERM_GOALS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SHORT_TERM_GOALS_LIST_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getTotalShortTermGoals = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    dispatch({ type: GET_TOTAL_SHORT_TERM_GOALS_REQUEST });

    const { data } = await Axios.get(
      `${process.env.REACT_APP_HOST}/api/v1/short-term-goals/total/${user_id}`,
      config
    );
    dispatch({ type: GET_TOTAL_SHORT_TERM_GOALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOTAL_SHORT_TERM_GOALS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};
