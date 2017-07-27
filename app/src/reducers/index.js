import { combineReducers } from 'redux';
import choices from './choices';
import calculations from './calculations';

const rootReducer = combineReducers({
  choices,
  calculations,
});

export default rootReducer;
