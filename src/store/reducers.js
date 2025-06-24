
import { combineReducers } from 'redux';
import { ADD_ENTRY, DELETE_ENTRY } from './actions';

const initialState = {
  entries: [],
};

function reflectionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, { ...action.payload, id: Date.now() }],
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.payload),
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  reflections: reflectionReducer,
});