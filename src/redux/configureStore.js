import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { missionReducer } from './missions/MissionReducer';

const store = createStore(missionReducer, applyMiddleware(thunk, logger));

export default store;
