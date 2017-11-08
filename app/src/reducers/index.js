import { combineReducers } from 'redux';
import choices from './choices';
import calculations from './calculations';

const rootReducer = combineReducers({
  choices,
  calculations,
});


const resetReducer = (state, action) => {
  if (action.type === 'USER_RESTART') {
    state = undefined;
  }

  return rootReducer(state, action);
}

export { rootReducer, resetReducer };
