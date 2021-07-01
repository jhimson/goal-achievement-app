/* eslint-disable camelcase */
import Axios from 'axios';
import { mistakesConstants } from '../types';

const { uuid } = require('uuidv4');

const {
  CREATE_MISTAKE_REQUEST,
  CREATE_MISTAKE_SUCCESS,
  CREATE_MISTAKE_FAIL,
  GET_MISTAKES_REQUEST,
  GET_MISTAKES_SUCCESS,
  GET_MISTAKES_FAIL,
  REMOVE_MISTAKE_REQUEST,
  REMOVE_MISTAKE_SUCCESS,
  REMOVE_MISTAKE_FAIL,
} = mistakesConstants;

export const insertNewMistake = ({ user_id, description }) => async (
  dispatch
) => {
  const id = uuid();
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: CREATE_MISTAKE_REQUEST });

    const { data } = await Axios.post(
      `http://localhost:5000/api/v1/mistakes`,
      { id, user_id, description },
      config
    );
    dispatch({ type: CREATE_MISTAKE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_MISTAKE_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const getAllMistakes = (user_id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: GET_MISTAKES_REQUEST });
    const { data } = await Axios.get(
      `http://localhost:5000/api/v1/mistakes/${user_id}`,
      config
    );
    dispatch({ type: GET_MISTAKES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MISTAKES_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const deleteMistake = (id) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    dispatch({ type: REMOVE_MISTAKE_REQUEST });
    const { data } = await Axios.delete(
      `http://localhost:5000/api/v1/mistakes/${id}`,
      config
    );
    dispatch({ type: REMOVE_MISTAKE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_MISTAKE_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};
