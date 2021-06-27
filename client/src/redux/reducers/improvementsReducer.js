import { improvementsConstants } from '../types';

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

export const createImprovementReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_IMPROVEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case CREATE_IMPROVEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        improvement: payload,
      };

    case CREATE_IMPROVEMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const improvementsListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_IMPROVEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_IMPROVEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        improvements: payload,
      };
    case GET_IMPROVEMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const removeImprovementReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case REMOVE_IMPROVEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case REMOVE_IMPROVEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        improvement: payload,
      };

    case REMOVE_IMPROVEMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
