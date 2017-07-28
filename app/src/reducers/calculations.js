// import _ from 'underscore'
import modeChoices from '../config/modeChoices'


function calculations(state = [], action = {}) {
  switch (action.type) {
    case 'UPDATE_BUDGET_AMOUNT':
      const amount = action.choices.market && action.choices.market.budget

      return Object.assign({}, state, { budgetAmount: amount })
    case 'UPDATE_COSTS_AMOUNT':
      const { market, mode, guideway, serviceTimes } = action.choices

      const routeDistance = (market && market.distance) || 1
      const capacityPerVehicle = (mode && mode.capacityPerVehicle) || 1
      const capitalCostPerMile = (guideway && guideway.capitalCostPerMile) || 1
      const costPerRevHour = (guideway && guideway.costPerRevHour) || 1
      const maintenanceCost = (guideway && guideway.maintenanceCosts) || 1

      // TODO, get theses numbers dynamically
      const _vehicleCount = 5     // Need a default value for each mode type
      // const _costPerHour = 10
      // const _revenueMiles = 100

      const vehicleCost = mode ? _vehicleCount * mode.capitalCostPerVehicle : 0
      const guidewayCost = market && guideway ? routeDistance * capitalCostPerMile : 0
      const serviceTimeWeeklySum = () => {
        if (serviceTimes) {
          return serviceTimes.reduce((sum, item) => {
            if (item.checked) {
              return sum + item.hours
            } else {
              return sum
            }
          }, 0)
        } else {
          return 1
        }
      }
      const revenueHours = serviceTimeWeeklySum() * 52
      const operatingCost = serviceTimes ?
        _vehicleCount * revenueHours * costPerRevHour : 0
      const capacity = _vehicleCount * capacityPerVehicle

      const newCalculations = {
        vehicleCost,
        guidewayCost,
        maintenanceCost,
        operatingCost,
        totalCosts: vehicleCost + guidewayCost + maintenanceCost + operatingCost,
      }

      return Object.assign({}, state, newCalculations)
    default:
      return state;
  }
}

export default calculations;
