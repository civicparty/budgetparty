// import _ from 'underscore'

function calculations(state = [], action = {}) {
  switch (action.type) {
    case 'UPDATE_BUDGET_AMOUNT':
      const amount = action.choices && action.choices.market.budgetInMillions

      return Object.assign({}, state, { budgetAmount: amount })
    case 'UPDATE_COSTS_AMOUNT':
      console.log('UPDATE_COSTS_AMOUNT', action)
      debugger
      return Object.assign({}, state, { costsAmount: 'test' })
    default:
      return state;
  }
}

export default calculations;
