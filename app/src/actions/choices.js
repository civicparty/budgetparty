export function selectMarketType(marketChoice) {
  return {
    type: 'SELECT_MARKET_TYPE',
    marketChoice,
  };
}

export function selectModeType(modeId, selectText) {
  return {
    type: 'SELECT_MODE_TYPE',
    modeId,
    selectText,
  };
}

export function selectGuidewayType(guidewayId, selectText) {
  return {
    type: 'SELECT_GUIDEWAY_TYPE',
    guidewayId,
    selectText,
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
