export function selectMarketType(marketId) {
  return {
    type: 'SELECT_MARKET_TYPE',
    marketId,
  };
}

export function selectModeType(modeId) {
  return {
    type: 'SELECT_MODE_TYPE',
    modeId,
  };
}

export function selectGuidewayType(guidewayId) {
  return {
    type: 'SELECT_GUIDEWAY_TYPE',
    guidewayId,
  };
}

export function selectServiceTimes(serviceTimes) {
  return {
    type: 'SELECT_SERVICE_TIMES',
    serviceTimes,
  };
}
