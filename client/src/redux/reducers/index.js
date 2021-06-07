import { combineReducers } from 'redux';

//! REDUCERS
import { userRegisterReducer, userLoginReducer } from './userReducer';
import {
  shortTermGoalCreateReducer,
  shortTermGoalsListReducer,
  shortTermGoalDeleteReducer,
} from './goalReducer';
//!

const rootReducer = combineReducers({
  userRegistered: userRegisterReducer,
  userLoggedIn: userLoginReducer,
  newShortTermGoal: shortTermGoalCreateReducer,
  shortTermGoalDeleted: shortTermGoalDeleteReducer,
  shortTermGoalsList: shortTermGoalsListReducer,
});

export default rootReducer;
