import InitialState from '../config/InitialState';

function reducer (state = InitialState.data, action = {}) {
  switch (action.type) {
    case 'SELECT_TRANSIT_MODE':
      let mode = action.type
      return Object.assign({}, state, { mode })
    case 'SELECT_VEHICLE_QUANTITY':
      // break;
    default:
      return state;

  }
}

// export default reducer;
