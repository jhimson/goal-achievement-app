import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middleware = [thunk];

const userLoggedInInfoStoredFromStorage = localStorage.getItem(
  'userLoggedInInfo'
)
  ? JSON.parse(localStorage.getItem('userLoggedInInfo'))
  : { message: null, token: null };

const initialState = {
  userRegistered: { userRegisteredInfo: { message: null }, error: null },
  userLoggedIn: {
    userLoggedInInfo: userLoggedInInfoStoredFromStorage,
    error: null,
  },
  newShortTermGoal: { error: null, success: false, goal: {} },
  shortTermGoalDeleted: { error: null, goal: {} },
  shortTermGoalsList: { error: null, goals: { data: [] } },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
