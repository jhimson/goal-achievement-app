import { goalConstants } from '../types';

const {
  ADD_SHORT_TERM_GOAL_REQUEST,
  ADD_SHORT_TERM_GOAL_SUCCESS,
  ADD_SHORT_TERM_GOAL_FAIL,
} = goalConstants;

export const shortTermGoalReducer = (state = {}, { type, payload }) => {
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
