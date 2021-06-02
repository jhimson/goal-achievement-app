import { combineReducers } from 'redux';

//! REDUCERS
import { userRegisterReducer, userLoginReducer } from './userReducer';
//!

const rootReducer = combineReducers({
  userRegistered: userRegisterReducer,
  userLoggedIn: userLoginReducer,
});

export default rootReducer;
