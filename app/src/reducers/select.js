// import InitialState from '../config/InitialState';
// const { select } = InitialState

export default(state, action) => {
  switch (action) {
    case 'SELECT_TRANSIT_MODE':
      let mode = action.type
      // return [...state, mode]
      return state
      return Object.assign({}, state, { mode })
    // case 'SELECT_VEHICLE_QUANTITY':
      // break;
    default:
      return state;
  }
}
