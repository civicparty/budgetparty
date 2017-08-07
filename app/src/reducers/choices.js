import _ from 'underscore'

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
      const serviceTimesState = state.serviceTimes || [];
      const exisiting = serviceTimesState && serviceTimesState.find((item) => {
        return item.serviceTime.id === serviceId
      });

      if (exisiting) {
        exisiting.frequency = action.frequencyChoice
      } else {
        serviceTimesState.push({
          serviceTime: action.serviceTime,
          frequency: action.frequencyChoice,
        })
      }

      const newState = { serviceTimes: serviceTimesState };
      return Object.assign({}, state, newState)
    default:
      return state;
  }
}

export default choices;
