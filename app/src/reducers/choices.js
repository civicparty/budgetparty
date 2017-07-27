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
      const serviceId = Number(action.serviceId);
      const updated = _.clone(state)

      if (updated.serviceTimes) {
        let itemExists = updated.serviceTimes.find((item) => item.id === serviceId )

        if (itemExists) {
          itemExists.checked = action.isChecked
        } else {
          updated.serviceTimes.push({
            id: serviceId,
            text: action.selectText,
            checked: action.isChecked,
          })
        }
      } else {
        updated.serviceTimes = [{
          id: serviceId,
          text: action.selectText,
          checked: action.isChecked,
        }]
      }
      const newState = {...state, serviceTimes: updated.serviceTimes };
      return newState
    default:
      return state;
  }
}

export default choices;
