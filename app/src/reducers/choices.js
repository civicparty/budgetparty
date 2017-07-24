function choices(state = [], action = {}) {
  switch (action.type) {
    case 'SELECT_MARKET_TYPE':
      const marketId = Number(action.marketId)
      return Object.assign({}, state, { marketId: marketId })
    case 'SELECT_MODE_TYPE':
      console.log('select Mode Type', state)
    case 'SELECT_MODE_TYPE':
      console.log('select Mode Type', state)
    case 'SELECT_GUIDEWAY_TYPE':
      console.log('select Guideway Type', state)
    case 'SELECT_SERVICE_TIMES':
      console.log('select Guideway Type', state)
    default:
      return state;
  }
}

export default choices;
