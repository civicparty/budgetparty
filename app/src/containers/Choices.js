import { connect } from 'react-redux'
import Choices from '../components/Choices/Choices'
import { database } from '../config/constants'

import {
  selectMarketType,
  selectModeType,
  selectGuidewayType,
  selectServiceTimes,
  confirmServiceTimes,
} from '../actions/choices'

import {
  updateBudgetAmount,
  updateCostsAmount,
} from '../actions/calculations'

const persistToFirebase = (userId, choices, gameId) => {
  const { market, serviceTimes, mode, guideway } = choices

  if (!userId) return false

  const leChoices = {
    market: market || {},
    mode: mode || {},
    guideway: guideway || {},
    serviceTimes: serviceTimes || {},
    lastUpdated: new Date(),
  }

  console.log(`persisting user: ${userId} game: ${gameId} to db: `, leChoices)
  return database.app.database()
          .ref(`users/${userId}/games/${gameId}`)
          .update({ choices: leChoices })
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectMarket: (newChoice) => {
      dispatch(selectMarketType(newChoice));
    },
    onSelectMode: (newChoice) => {
      dispatch(selectModeType(newChoice))
    },
    onSelectGuideway: (newChoice) => {
      dispatch(selectGuidewayType(newChoice))
    },
    onSelectTimes: (serviceTime, frequencyChoice) => {
      dispatch(selectServiceTimes(serviceTime, frequencyChoice))
    },
    onConfirmSelectTimes: () => {
      dispatch(confirmServiceTimes())
    },
    onUpdateAmounts: (choices, userId, gameId) => {
      dispatch(updateBudgetAmount(choices))
      dispatch(updateCostsAmount(choices))
      persistToFirebase(userId, choices, gameId)
    },
  }
}

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Choices)

export default ChoicesContainer
