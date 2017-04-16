// create payload for reducers

export function selectTransitMode(modeType) {
  console.log("selectTransitMode", modeType);
  return {
    type: 'SELECT_TRANSIT_MODE',
    modeType
  }
}

export function selectVehicleQuantity(quantity) {
  console.log("selectVehicleQuantity", quantity);
  return {
    type: 'SELECT_VEHICLE_QUANTITY',
    quantity
  }
}
