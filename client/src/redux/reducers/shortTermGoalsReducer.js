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
  GET_TOTAL_SHORT_TERM_GOALS_REQUEST,
  GET_TOTAL_SHORT_TERM_GOALS_SUCCESS,
  GET_TOTAL_SHORT_TERM_GOALS_FAIL,
  SET_SHORT_TERM_GOALS_TO_COMPLETE_REQUEST,
  SET_SHORT_TERM_GOALS_TO_COMPLETE_SUCCESS,
  SET_SHORT_TERM_GOALS_TO_COMPLETE_FAIL,
} = shortTermGoalsConstants;

export const shortTermGoalCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_SHORT_TERM_GOAL_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
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
        success: false,
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
        success: false,
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
        success: false,
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

export const totalShortTermGoalReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TOTAL_SHORT_TERM_GOALS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case GET_TOTAL_SHORT_TERM_GOALS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        total: payload,
      };

    case GET_TOTAL_SHORT_TERM_GOALS_FAIL:
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

export const shortTermGoalSetToCompleteReducer = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case SET_SHORT_TERM_GOALS_TO_COMPLETE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case SET_SHORT_TERM_GOALS_TO_COMPLETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        shortTermGoal: payload,
      };

    case SET_SHORT_TERM_GOALS_TO_COMPLETE_FAIL:
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
