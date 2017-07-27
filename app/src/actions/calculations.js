export function updateBudgetAmount(choices) {
  return {
    type: 'UPDATE_BUDGET_AMOUNT',
    choices,
  };
}

export function updateCostsAmount(choices) {
  return {
    type: 'UPDATE_COSTS_AMOUNT',
    choices,
  };
}
