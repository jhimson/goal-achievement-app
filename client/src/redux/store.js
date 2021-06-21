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
  shortTermGoalDeleted: { error: null, goal: {}, success: false },
  shortTermGoalsList: { error: null, goals: { data: [] } },
  totalShortTermGoals: { error: null, success: false, total: null },
  newLongTermGoal: { error: null, success: false, goal: {} },
  longTermGoalsList: { error: null, success: false, goals: [] },
  longTermGoalDeleted: { error: null, goal: {}, success: false },
  totalLongTermGoals: { error: null, success: false, total: null },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
