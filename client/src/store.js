import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userRegisterReducer, userLoginReducer } from './reducers/userReducer';

const middleware = [thunk];

const initialState = {
  userRegister: { userRegisterInfo: { message: null }, error: null },
  userLogin: {
    userLoginInfo: { message: null, token: null, email: null },
    error: null,
  },
};

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
