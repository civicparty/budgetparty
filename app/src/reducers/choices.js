import _ from 'underscore'
import { rootReducer } from './index'

function choices(state = [], action = {}) {
  switch (action.type) {
    case 'SELECT_MARKET_TYPE':
      const marketState = { market: action.marketChoice }
      return Object.assign({}, state, marketState)

    case 'SELECT_MODE_TYPE':
      const modeState = { mode: action.modeChoice }
      return Object.assign({}, state, modeState)

    case 'SELECT_GUIDEWAY_TYPE':
      const guidewayState = { guideway: action.guidewayChoice }
      return Object.assign({}, state, guidewayState)

    case 'SELECT_SERVICE_TIMES':
      const serviceId = Number(action.serviceTime.id);
      const serviceTimesState = state.serviceTimes || {};

      serviceTimesState[serviceId] = {
        id: serviceId,
        title: action.serviceTime.title,
        hours: action.serviceTime.operatingHoursPerWeek,
        hoursPerWeekday: action.serviceTime.operatingHoursPerWeekday || 0,
        frequencyId: action.frequencyChoice.id,
        frequencyValue: action.frequencyChoice.value || 0,
        quote: action.frequencyChoice.quote,
      }

      serviceTimesState.hasDefaultValues = false

      const newState = { serviceTimes: serviceTimesState };
      return Object.assign({}, state, newState)
    case 'CONFIRM_SERVICE_TIMES':
      state.serviceTimes.hasDefaultValues = false
      return state
    case 'USER_RESTART':
      state = undefined;
      return rootReducer(state, action)
    default:
      return state;
  }
}

export default choices;
