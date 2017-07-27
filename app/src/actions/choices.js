export function selectMarketType(marketChoice) {
  return {
    type: 'SELECT_MARKET_TYPE',
    marketChoice,
  };
}

export function selectModeType(modeChoice) {
  return {
    type: 'SELECT_MODE_TYPE',
    modeChoice,
  };
}

export function selectGuidewayType(guidewayChoice) {
  return {
    type: 'SELECT_GUIDEWAY_TYPE',
    guidewayChoice,
  };
}

export function selectServiceTimes(serviceId, selectText, isChecked) {
  return {
    type: 'SELECT_SERVICE_TIMES',
    serviceId,
    selectText,
    isChecked,
  };
}
