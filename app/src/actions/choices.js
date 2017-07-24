export function selectMarketType(marketId) {
  return {
    type: 'SELECT_MARKET_TYPE',
    marketId,
  };
}
