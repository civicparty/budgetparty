import { connect } from 'react-redux'
import Choices from '../components/Choices/Choices'

import {
  selectMarketType,
  selectModeType,
  selectGuidewayType,
  selectServiceTimes,
} from '../actions/choices'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectMarket: (marketId) => {
      dispatch(selectMarketType(marketId))
    },
    onSelectMode: (modeId) => {
      dispatch(selectModeType(modeId))
    },
    onSelectGuideway: (guidewayId) => {
      dispatch(selectGuidewayType(guidewayId))
    },
    onSelectTimes: (serviceTimes) => {
      dispatch(selectServiceTimes(serviceTimes))
    },
  }
}

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Choices)

export default ChoicesContainer
