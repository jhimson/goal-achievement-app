/* eslint-disable camelcase */
import Axios from 'axios';
import { improvementsConstants } from '../types';

const { uuid } = require('uuidv4');

const {
  CREATE_IMPROVEMENT_REQUEST,
  CREATE_IMPROVEMENT_SUCCESS,
  CREATE_IMPROVEMENT_FAIL,
  GET_IMPROVEMENTS_REQUEST,
  GET_IMPROVEMENTS_SUCCESS,
  GET_IMPROVEMENTS_FAIL,
  REMOVE_IMPROVEMENT_REQUEST,
  REMOVE_IMPROVEMENT_SUCCESS,
  REMOVE_IMPROVEMENT_FAIL,
  GET_TOTAL_IMPROVEMENTS_REQUEST,
  GET_TOTAL_IMPROVEMENTS_SUCCESS,
  GET_TOTAL_IMPROVEMENTS_FAIL,
} = improvementsConstants;

export const insertNewImprovement = ({ user_id, description }) => async (
  dispatch
) => {
  const id = uuid();
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: CREATE_IMPROVEMENT_REQUEST });
    const { data } = await Axios.post(
      `http://localhost:5000/api/v1/improvements`,
      {
        id,
        user_id,
        description,
      },
      config
    );
    dispatch({ type: CREATE_IMPROVEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_IMPROVEMENT_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getAllImprovements = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: GET_IMPROVEMENTS_REQUEST });
    const { data } = await Axios.get(
      `http://localhost:5000/api/v1/improvements/${user_id}`
    );
    dispatch({ type: GET_IMPROVEMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_IMPROVEMENTS_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const deleteImprovement = (id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: REMOVE_IMPROVEMENT_REQUEST });
    const { data } = await Axios.delete(
      `http://localhost:5000/api/v1/improvements/${id}`,
      config
    );
    dispatch({ type: REMOVE_IMPROVEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_IMPROVEMENT_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};
