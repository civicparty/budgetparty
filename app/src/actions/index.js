// create payload for reducers

export function chooseMode(modeType) {
  console.log("changing thing", modeType);
  return {
    type: 'SELECT_MODE',
    modeType
  }
}
