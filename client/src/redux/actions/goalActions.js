/* eslint-disable camelcase */
import Axios from 'axios';

import { goalConstants } from '../types';

const { uuid } = require('uuidv4');

const {
  ADD_SHORT_TERM_GOAL_REQUEST,
  ADD_SHORT_TERM_GOAL_SUCCESS,
  ADD_SHORT_TERM_GOAL_FAIL,
} = goalConstants;

export const addNewShortTermGoal = ({ user_id, description }) => async (
  dispatch
) => {
  const id = uuid();
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch({ type: ADD_SHORT_TERM_GOAL_REQUEST });

    const { data } = await Axios.post(
      'http://localhost:5000/api/v1/short-term-goals',
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
