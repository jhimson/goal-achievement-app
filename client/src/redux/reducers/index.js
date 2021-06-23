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
} from './achievementsReducer';
//!

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
});

export default rootReducer;
