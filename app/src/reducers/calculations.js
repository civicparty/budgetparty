// import _ from 'underscore'
import modeChoices from '../config/modeChoices'


function calculations(state = [], action = {}) {
  switch (action.type) {
    case 'UPDATE_BUDGET_AMOUNT':
      const amount = action.choices.market && action.choices.market.budget

      return Object.assign({}, state, { budgetAmount: amount })
    case 'UPDATE_COSTS_AMOUNT':
      console.log('UPDATE_COSTS_AMOUNT', action)
      const { market, mode, guideway, serviceTimes } = action.choices

      let routeDistance = (market && market.distance) || 1
      let capacityPerVehicle = (mode && mode.capacityPerVehicle) || 1
      let capitalCostPerMile = (guideway && guideway.capitalCostPerMile) || 1
      let maintenanceCosts = (guideway && guideway.maintenanceCosts) || 1

      // TODO, get theses numbers dynamically
      const _vehicleCount = 5     // Need a default value for each mode type
      const _costPerHour = 10
      const _revenueMiles = 100

      const vehicleCost = mode ? _vehicleCount * mode.capitalCostPerVehicle : 0
      const guidewayCost = market && guideway ? market && market.distance * guideway.capitalCostPerMile : 0
      const maintenanceCost = guideway ? guideway.maintenanceCosts : 0
      const serviceTimeWeeklySum = serviceTimes ? serviceTimes.reduce((item) => console.log(item.operatingHoursPerWeek)) : 0
      const revenueHours = serviceTimeWeeklySum * 52
      const revenueMiles = _revenueMiles
      const operatingCost = revenueHours * _costPerHour || 0
      const capacity = _vehicleCount * capacityPerVehicle

      const newCalculations = {
        vehicleCost: vehicleCost,
        guidewayCost: guidewayCost,
        maintenanceCost: maintenanceCost,
        operatingCost: operatingCost,
        totalCosts: vehicleCost + guidewayCost + maintenanceCost + operatingCost,
      }

      return Object.assign({}, state, newCalculations)
    default:
      return state;
  }
}

export default calculations;
