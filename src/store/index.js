
// src/store/index.js

import { createStore } from 'redux';
import { rootReducer } from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('mindmirror_state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('mindmirror_state', serializedState);
  } catch (e) {
    // error
  }
};

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});