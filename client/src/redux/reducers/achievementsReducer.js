import { achievementConstants } from '../types';

const {
  CREATE_ACHIEVEMENT_REQUEST,
  CREATE_ACHIEVEMENT_SUCCESS,
  CREATE_ACHIEVEMENT_FAIL,
} = achievementConstants;

export const createAchievementReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_ACHIEVEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case CREATE_ACHIEVEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        achievement: payload,
      };

    case CREATE_ACHIEVEMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
