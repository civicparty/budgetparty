import _ from 'underscore'

function calculations(state = [], action = {}) {
  switch (action.type) {
    case 'UPDATE_BUDGET_AMOUNT':
      const amount = action.choices.market && action.choices.market.budget

      return Object.assign({}, state, { budgetAmount: amount })
    case 'UPDATE_COSTS_AMOUNT':
      const { market, mode, guideway, serviceTimes } = action.choices

    // GUIDEWAY COSTS = routeDistance * capitalCostPerMile
      const routeDistance = (market && market.distance) || 1
      console.log('routeDistance', routeDistance)
      const capitalCostPerMile = (guideway && guideway.capitalCostPerMile) ||
                                 (mode && mode.minCapitalCostPerMile) || 1
      const guidewayCost = market && mode ? routeDistance * capitalCostPerMile : 0
      console.log('$guidewayCost', guidewayCost)
    // end

    // MAINTENANCE COSTS: fixed number from guideway
      const maintenanceCost = (guideway && guideway.maintenanceCosts) ||
                              (mode && mode.minMaintenanceCosts) || 0
      console.log('$maintenanceCost', maintenanceCost)
    // end

    // VEHICLES COST & COUNT:
      const getVehicleCountByServiceTime = (serviceTimeId) => {
        if (!serviceTimes || !serviceTimes[serviceTimeId]) return 0;
        if (serviceTimes[serviceTimeId].frequencyValue === null) return 0;

        const averageSpeed = guideway && guideway.averageSpeed
        const roundTripTime = (routeDistance * 2) / averageSpeed
        const frequency = serviceTimes[serviceTimeId].frequencyValue
        const vehicleCount = Math.ceil(roundTripTime * (60 / (frequency)))
        return vehicleCount * 2 // for north and southbound
      }

      // MAX NUMBER peak hour vehicles NEEDED (Capital Cost)
      const vehicleCounts = _.mapObject(serviceTimes, (item) => {
        return getVehicleCountByServiceTime(item.id)
      })

      const vehicleCountsArray = Object.keys(vehicleCounts).map(key => vehicleCounts[key])
      const maxVehicleCount = vehicleCountsArray.length > 0 ? Math.max(...vehicleCountsArray) : 1
      console.log('maxVehicleCount', maxVehicleCount)
      const vehicleCost = mode ? maxVehicleCount * mode.capitalCostPerVehicle : 0
      console.log('$vehicleCost', vehicleCost)
    // end


    // OPERATING COSTS = annual revenue hours * costPerRevHour
      // weekly revenue hours = service hours * number of vehicles needed each service time range
      // We need to calculate revenue hours for each selected Service Time Range.
      // That means we need to calculate number of vheciles needed each service time range.
      // From there, we sum those revenu hours. to a annual value and multiply by costPerRevHour

      const weeklyOperatingHours = (times, vehicleCounts) => {
        if (!times) return 0
        const hoursObj = _.mapObject(times, (item) => {
          if (item.frequencyValue !== null) {
            return item.hours
          } else {
            return 0
          }
        })

        for (let i = 1; i < Object.keys(vehicleCounts).length + 1; i++) {
          hoursObj[i] *= vehicleCounts[i]
        }

        const hours = Object.keys(hoursObj).map(key => hoursObj[key]);
        return hours.reduce((sum, value) => sum + value)
      }

      // const revenueHours = serviceTimeWeeklySum() * 52
      const revenueHours = weeklyOperatingHours(serviceTimes, vehicleCounts) * 52
      console.log('revenueHours', revenueHours)
      const costPerRevHour = (guideway && guideway.costPerRevHour) || 1
      const operatingCost = serviceTimes ? revenueHours * costPerRevHour : 0
      console.log('operatingCost', operatingCost)
    // end


    // REMAINING BUDGET
      // Total budget - total cost = remaining budget
      const totalCosts = vehicleCost + guidewayCost + maintenanceCost + operatingCost
      const remainingBudget = (market && market.budget) - totalCosts
      // years of operation funded = remaining budget / annual o&m
      const yearOfOperationFunded = remainingBudget > 0 ? remainingBudget / operatingCost : 0
      console.log('yearOfOperationFunded', yearOfOperationFunded)
    // end

    // CAPACITY
      const capacityPerVehicle = (mode && mode.capacityPerVehicle) || 1
      console.log('capacityPerVehicle', capacityPerVehicle)

      const tripCountPerServiceTimeBlock = (serviceTimeBlock) => {
        if (serviceTimeBlock.frequencyValue === null) return 0
        // TODO: clarify how to count daily hour for capacity
        if (serviceTimeBlock.frequencyValue === null) return 0
        // trips per hour = (60 / frequency) * 2 (for roundtrip)
        const tripsPerHour = (60 / serviceTimeBlock.frequencyValue) * 2
        // trip count = hours operating per day in service time range * trips per hour /// need to calculate trip count for each service time range
        const weekdayHours = serviceTimeBlock.hoursPerWeekday ? serviceTimeBlock.hoursPerWeekday : 0
        const tripCount = tripsPerHour * weekdayHours
        return tripCount
      }

      const getTripCountsArrayByTimeBlock = (serviceTimes) => {
        if (Object.keys(serviceTimes).length < 1) return 0
        const sumOfTrips = Object.values(serviceTimes).map((timeBlock) => {
          return tripCountPerServiceTimeBlock(timeBlock)
        })

        return sumOfTrips
      }

      const tripCountSum = (serviceTimes) => {
        if (!serviceTimes) return 0
        if (Object.keys(serviceTimes).length < 1) return 0
        const tripCountsArray = getTripCountsArrayByTimeBlock(serviceTimes)
        console.log('tripCounts By Servive Time', tripCountsArray)
        return tripCountsArray.reduce((sum, value) => sum + value)
      }
      // capacity per day = tripCount * capacityPerVehicle
      const capacityPerDay = tripCountSum(serviceTimes) * capacityPerVehicle
      console.log('capacityPerDay', capacityPerDay)
    // end

      console.log('END HERE ------------')

      const newCalculations = {
        vehicleCost,
        vehicleCount: maxVehicleCount,
        guidewayCost,
        maintenanceCost,
        operatingCost,
        yearOfOperationFunded,
        capacityPerDay,
        totalCosts,
      }

      return Object.assign({}, state, newCalculations)
    default:
      return state;
  }
}

export default calculations;
