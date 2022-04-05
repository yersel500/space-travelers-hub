import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { missionReducer } from './missions/MissionReducer';

const store = createStore(missionReducer, applyMiddleware(thunk));

export default store;
