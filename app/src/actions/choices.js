export function selectMarketType(marketId, selectText) {
  return {
    type: 'SELECT_MARKET_TYPE',
    marketId,
    selectText,
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

export function selectServiceTimes(serviceTimes, selectText) {
  return {
    type: 'SELECT_SERVICE_TIMES',
    serviceTimes,
    selectText,
  };
}
