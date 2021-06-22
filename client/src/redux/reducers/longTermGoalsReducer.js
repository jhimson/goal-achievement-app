import { longTermGoalsConstants } from '../types';

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

export const longTermGoalCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_LONG_TERM_GOAL_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case ADD_LONG_TERM_GOAL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        goal: payload,
      };

    case ADD_LONG_TERM_GOAL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
      };

    default:
      return state;
  }
};

export const longTermGoalsListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LONG_TERM_GOALS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LONG_TERM_GOALS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        goals: payload,
      };

    case LONG_TERM_GOALS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const longTermGoalsDeleteReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case REMOVE_LONG_TERM_GOAL_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case REMOVE_LONG_TERM_GOAL_SUCCESS:
      return {
        ...state,
        loading: false,
        goal: payload,
        success: true,
      };

    case REMOVE_LONG_TERM_GOAL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
      };

    default:
      return state;
  }
};

export const totalLongTermGoalReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TOTAL_LONG_TERM_GOALS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case GET_TOTAL_LONG_TERM_GOALS_SUCCESS:
      return {
        ...state,
        success: true,
        total: payload,
      };

    case GET_TOTAL_LONG_TERM_GOALS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
