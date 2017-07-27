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
    onSelectMarket: (marketId, text) => {
      dispatch(selectMarketType(marketId, text))
    },
    onSelectMode: (modeId, text) => {
      dispatch(selectModeType(modeId, text))
    },
    onSelectGuideway: (guidewayId, text) => {
      dispatch(selectGuidewayType(guidewayId, text))
    },
    onSelectTimes: (serviceTimes, text, isChecked) => {
      dispatch(selectServiceTimes(serviceTimes, text, isChecked))
    },
  }
}

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Choices)

export default ChoicesContainer
