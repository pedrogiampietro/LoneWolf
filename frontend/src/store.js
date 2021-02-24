import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import accountReducer from './reducers/AccountReducer';
import teamReducer from './reducers/TeamReducer';

const reducers = combineReducers({
  account: accountReducer,
  team: teamReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
