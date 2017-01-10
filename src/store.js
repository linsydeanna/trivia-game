import { createStore } from 'redux';
import rootReducer from './reducers/index';
import game from './data.js';

const defaultState = {
  game
};

const store = createStore(rootReducer, defaultState);

export default store;
