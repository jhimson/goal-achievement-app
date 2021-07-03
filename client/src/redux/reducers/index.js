import { combineReducers } from 'redux';

//! REDUCERS
import { userRegisterReducer, userLoginReducer } from './userReducer';
import {
  shortTermGoalCreateReducer,
  shortTermGoalsListReducer,
  shortTermGoalDeleteReducer,
  totalShortTermGoalReducer,
} from './shortTermGoalsReducer';

import {
  longTermGoalCreateReducer,
  longTermGoalsListReducer,
  longTermGoalsDeleteReducer,
  totalLongTermGoalReducer,
} from './longTermGoalsReducer';

import {
  createAchievementReducer,
  achievementsListReducer,
  removeAchievementReducer,
  totalAchievementsReducer,
} from './achievementsReducer';
//!

import {
  createImprovementReducer,
  improvementsListReducer,
  removeImprovementReducer,
  totalImprovementsReducer,
} from './improvementsReducer';

import {
  createMistakeReducer,
  mistakesListReducer,
  removeMistakeReducer,
  totalMistakesReducer,
} from './mistakesReducer';

import {
  createLessonReducer,
  lessonsListReducer,
  removeLessonReducer,
} from './lessonsReducer';

const rootReducer = combineReducers({
  userRegistered: userRegisterReducer,
  userLoggedIn: userLoginReducer,
  newShortTermGoal: shortTermGoalCreateReducer,
  shortTermGoalDeleted: shortTermGoalDeleteReducer,
  shortTermGoalsList: shortTermGoalsListReducer,
  totalShortTermGoals: totalShortTermGoalReducer,
  newLongTermGoal: longTermGoalCreateReducer,
  longTermGoalsList: longTermGoalsListReducer,
  longTermGoalDeleted: longTermGoalsDeleteReducer,
  totalLongTermGoals: totalLongTermGoalReducer,
  newAchievement: createAchievementReducer,
  achievementsList: achievementsListReducer,
  achievementDeleted: removeAchievementReducer,
  totalAchievements: totalAchievementsReducer,
  newImprovement: createImprovementReducer,
  improvementsList: improvementsListReducer,
  improvementDeleted: removeImprovementReducer,
  totalImprovements: totalImprovementsReducer,
  newMistake: createMistakeReducer,
  mistakesList: mistakesListReducer,
  mistakeDeleted: removeMistakeReducer,
  totalMistakes: totalMistakesReducer,
  newLesson: createLessonReducer,
  lessonsList: lessonsListReducer,
  lessonDeleted: removeLessonReducer,
});

export default rootReducer;
