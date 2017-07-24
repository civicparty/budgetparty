function choices(state = [], action = {}) {
  switch (action.type) {
    case 'SELECT_MARKET_TYPE':
      const marketId = Number(action.marketId)
      return Object.assign({}, state, { marketId: marketId })
    case 'SELECT_MODE_TYPE':
      const modeId = Number(action.modeId)
      return Object.assign({}, state, { modeId: modeId })
    case 'SELECT_GUIDEWAY_TYPE':
      const guidewayId = Number(action.guidewayId)
      return Object.assign({}, state, { guidewayId: guidewayId })
    case 'SELECT_SERVICE_TIMES':
      const { serviceTimes } = action;
      return Object.assign({}, state, { serviceTimes: serviceTimes })
    default:
      return state;
  }
}

export default choices;
