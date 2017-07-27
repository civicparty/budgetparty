import { connect } from 'react-redux'
import Choices from '../components/Choices/Choices'

import {
  selectMarketType,
  selectModeType,
  selectGuidewayType,
  selectServiceTimes,
} from '../actions/choices'

import {
  updateBudgetAmount,
  updateCostsAmount,
} from '../actions/calculations'

const mapStateToProps = (state) => {
  return state
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSelectMarket: (newChoice) => {
      dispatch(selectMarketType(newChoice));
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
    onUpdateAmounts: (choices) => {
      dispatch(updateBudgetAmount(choices))
      dispatch(updateCostsAmount(choices))
    }
  }
}

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Choices)

export default ChoicesContainer
