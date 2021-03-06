import { achievementConstants } from '../types';

const {
  CREATE_ACHIEVEMENT_REQUEST,
  CREATE_ACHIEVEMENT_SUCCESS,
  CREATE_ACHIEVEMENT_FAIL,
  GET_ACHIEVEMENTS_REQUEST,
  GET_ACHIEVEMENTS_SUCCESS,
  GET_ACHIEVEMENTS_FAIL,
  REMOVE_ACHIEVEMENT_REQUEST,
  REMOVE_ACHIEVEMENT_SUCCESS,
  REMOVE_ACHIEVEMENT_FAIL,
  GET_TOTAL_ACHIEVEMENTS_REQUEST,
  GET_TOTAL_ACHIEVEMENTS_SUCCESS,
  GET_TOTAL_ACHIEVEMENTS_FAIL,
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

export const achievementsListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ACHIEVEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        achievements: payload,
      };

    case GET_ACHIEVEMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const removeAchievementReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case REMOVE_ACHIEVEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case REMOVE_ACHIEVEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        achievement: payload,
      };

    case REMOVE_ACHIEVEMENT_FAIL:
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

export const totalAchievementsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TOTAL_ACHIEVEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TOTAL_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        total: payload,
      };

    case GET_TOTAL_ACHIEVEMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
