import { createStore } from 'redux';
import rootReducer from './reducers/index';

const serviceTimeDefaultState = {
  serviceTimes: {
    hasDefaultValues: true,
    1: {
      id: 1,
      frequencyId: 0,
      hours: 30,
      title: 'Every 15 min',
      hoursPerWeekday: 6,
      frequencyValue: 15,
    },
    2: {
      id: 2,
      frequencyId: 0,
      hours: 50,
      title: 'No Service',
      hoursPerWeekday: 10,
      frequencyValue: null,
    },
    3: {
      id: 3,
      frequencyId: 0,
      hours: 28,
      title: 'No Service',
      frequencyValue: null,
    },
    4: {
      id: 4,
      frequencyId: 0,
      hours: 12,
      title: 'No Service',
      frequencyValue: null,
    },
  },
};

const defaultState = {
  choices: serviceTimeDefaultState,
}

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
