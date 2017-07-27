import _ from 'underscore'

function choices(state = [], action = {}) {
  switch (action.type) {
    case 'SELECT_MARKET_TYPE':
      const marketState = { market: action.marketChoice }
      return Object.assign({}, state, marketState)

    case 'SELECT_MODE_TYPE':
      const modeId = Number(action.modeId)
      return Object.assign({}, state, { modeId: { id: modeId, text: action.selectText} })
    case 'SELECT_GUIDEWAY_TYPE':
      const guidewayId = Number(action.guidewayId)
      return Object.assign({}, state, { guidewayId: { id: guidewayId, text: action.selectText }  })
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
