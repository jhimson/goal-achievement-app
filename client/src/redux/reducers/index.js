import { combineReducers } from 'redux';

//! REDUCERS
import { userRegisterReducer, userLoginReducer } from './userReducer';
//!

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

export default rootReducer;
