import { lessonsConstants } from '../types';

const {
  CREATE_LESSON_REQUEST,
  CREATE_LESSON_SUCCESS,
  CREATE_LESSON_FAIL,
  GET_LESSONS_REQUEST,
  GET_LESSONS_SUCCESS,
  GET_LESSONS_FAIL,
  REMOVE_LESSON_REQUEST,
  REMOVE_LESSON_SUCCESS,
  REMOVE_LESSON_FAIL,
  GET_TOTAL_LESSONS_REQUEST,
  GET_TOTAL_LESSONS_SUCCESS,
  GET_TOTAL_LESSONS_FAIL,
} = lessonsConstants;

export const createLessonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_LESSON_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case CREATE_LESSON_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lesson: payload,
      };

    case CREATE_LESSON_FAIL:
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

export const lessonsListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_LESSONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_LESSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        lessons: payload,
      };

    case GET_LESSONS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const removeLessonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case REMOVE_LESSON_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case REMOVE_LESSON_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lesson: payload,
      };

    case REMOVE_LESSON_FAIL:
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
