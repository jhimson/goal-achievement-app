import { shortTermGoalsConstants } from '../types';

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
} = shortTermGoalsConstants;

export const shortTermGoalCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_SHORT_TERM_GOAL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_SHORT_TERM_GOAL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        goal: payload,
      };

    case ADD_SHORT_TERM_GOAL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const shortTermGoalDeleteReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case REMOVE_SHORT_TERM_GOAL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_SHORT_TERM_GOAL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        goal: payload,
      };

    case REMOVE_SHORT_TERM_GOAL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const shortTermGoalsListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SHORT_TERM_GOALS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SHORT_TERM_GOALS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        goals: payload,
      };

    case SHORT_TERM_GOALS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};