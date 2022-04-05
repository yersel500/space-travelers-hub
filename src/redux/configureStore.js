import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/RocketsReducer';

const reducer = combineReducers({
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
