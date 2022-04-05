import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/RocketsReducer';
import { missionReducer } from './missions/MissionReducer';

const reducer = combineReducers({
  rocketsReducer, missionReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
