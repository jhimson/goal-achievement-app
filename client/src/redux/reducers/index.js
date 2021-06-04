import { combineReducers } from 'redux';

//! REDUCERS
import { userRegisterReducer, userLoginReducer } from './userReducer';
import { shortTermGoalReducer, shortTermGoalsListReducer } from './goalReducer';
//!

const rootReducer = combineReducers({
  userRegistered: userRegisterReducer,
  userLoggedIn: userLoginReducer,
  newShortTermGoal: shortTermGoalReducer,
  shortTermGoalsList: shortTermGoalsListReducer,
});

export default rootReducer;
