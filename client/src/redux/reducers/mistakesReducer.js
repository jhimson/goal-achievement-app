/* eslint-disable camelcase */
import { mistakesConstants } from '../types';

const {
  CREATE_MISTAKE_REQUEST,
  CREATE_MISTAKE_SUCCESS,
  CREATE_MISTAKE_FAIL,
  GET_MISTAKES_REQUEST,
  GET_MISTAKES_SUCCESS,
  GET_MISTAKES_FAIL,
} = mistakesConstants;

export const createMistakeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_MISTAKE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case CREATE_MISTAKE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        mistake: payload,
      };

    case CREATE_MISTAKE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const mistakesListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MISTAKES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_MISTAKES_SUCCESS:
      return {
        ...state,
        loading: false,
        mistakes: payload,
      };

    case GET_MISTAKES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
