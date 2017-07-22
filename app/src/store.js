import { createStore } from 'redux';

import levels from './data/levels';
import selections from './data/selections';
import rootReducer from './reducers/index';

const defaultState = {
  levels,
  selections,
}

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
