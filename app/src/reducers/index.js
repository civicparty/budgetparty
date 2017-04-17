import { combineReducers } from 'redux';

import levels from './levels';
import selections from './selections';

const rootReducer = combineReducers({
  levels,
  selections,
});

export default rootReducer;
