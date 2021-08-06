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
    loading: false,
  },
  newShortTermGoal: { error: null, success: false, goal: {} },
  shortTermGoalDeleted: { error: null, goal: {}, success: false },
  shortTermGoalsList: { error: null, goals: { data: [] } },
  totalShortTermGoals: { error: null, success: false, total: null },
  newLongTermGoal: { error: null, success: false, goal: {} },
  longTermGoalsList: { error: null, success: false, goals: [] },
  longTermGoalDeleted: { error: null, goal: {}, success: false },
  totalLongTermGoals: { error: null, success: false, total: null },
  newAchievement: { error: null, success: false, achievement: null },
  achievementsList: { error: null, achievements: [] },
  achievementDeleted: { error: null, success: false, achievement: {} },
  totalAchievements: { error: null, total: null },
  newImprovement: { error: null, success: false, improvement: {} },
  improvementsList: { error: null, improvements: [] },
  improvementDeleted: { error: null, success: false, improvement: {} },
  totalImprovements: { error: null, total: null },
  newMistake: { error: null, success: false, mistake: {} },
  mistakesList: { error: null, mistakes: [] },
  mistakeDeleted: { error: null, success: false, mistake: {} },
  totalMistakes: { error: null, total: null },
  newLesson: { error: null, success: false, lesson: {} },
  lessonsList: { error: null, lessons: [] },
  lessonDeleted: { error: null, success: false, lesson: {} },
  totalLessons: { error: null, total: null },
  shortTermGoalCompleted: { error: null, shortTermGoal: {}, success: false },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
