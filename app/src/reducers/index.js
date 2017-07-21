import { combineReducers } from 'redux';

import levels from './levels';
import select from './select';

const rootReducer = combineReducers({
  levels,
  // select
});

export default rootReducer;
