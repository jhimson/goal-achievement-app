/* eslint-disable camelcase */
import Axios from 'axios';

import { userConstants } from '../types';

const { uuid } = require('uuidv4');

const {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
  SET_ERROR_TO_NULL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} = userConstants;

export const registerNewUser = ({
  username,
  firstname,
  lastname,
  password,
}) => async (dispatch) => {
  const user_id = uuid();
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await Axios.post(
      'http://localhost:5000/api/v1/users',
      { user_id, firstname, lastname, username, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: SET_ERROR_TO_NULL, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const userLogin = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await Axios.post(
      'http://localhost:5000/api/v1/users/login',
      { username, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error.message
          ? error.response.data.error.message
          : error.message,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const resetNewUserInfo = () => async (dispatch) => {
  dispatch({ type: USER_REGISTER_RESET });
};
