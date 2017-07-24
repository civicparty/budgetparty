import { connect } from 'react-redux'
import Choices from '../components/Choices/Choices'

import { selectMarketType } from '../actions/choices'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectMarket: (marketId) => {
      dispatch(selectMarketType(marketId))
    },
  }
}

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Choices)

export default ChoicesContainer
