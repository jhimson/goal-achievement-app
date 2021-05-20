import { userConstants } from '../types';

const {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  SET_ERROR_TO_NULL,
} = userConstants;

export const userRegisterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userRegisterInfo: payload,
      };

    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: payload };

    case USER_REGISTER_RESET:
      return { ...state, loading: false, error: null, userRegisterInfo: {} };

    case SET_ERROR_TO_NULL:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, userLoginInfo: payload };

    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: payload };

    case USER_LOGOUT:
      return { ...state, userLoginInfo: { message: null, token: null } };

    default:
      return state;
  }
};
