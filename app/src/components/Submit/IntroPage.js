import React from 'react'
import { FormattedNumber } from 'react-intl'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'underscore'

import ProgressBar from '../ProgressBar'

import backArrow from '../../images/back_arrow.svg'
import forwardArrow from '../../images/forward_arrow.svg'

const IntroPage = (props) => {
  const {
    budgetAmount,
    vehicleCost,
    vehicleCount,
    guidewayCost,
    maintenanceCost,
    operatingCost,
    capacityPerDay,
    yearOfOperationFunded,
    totalCosts,
  } = props.calculations
  const { market, mode, guideway, serviceTimes } = props.choices
  const serviceTimesArray = Object.values(serviceTimes)

  return (
    <div className="Submit__intro-body">
      <img src={'/images/levels/envelope_full.svg'} className="Submit__img" alt="Envelope Icon" />
      <h2>Congratulations! You did it!</h2>
      <div className="Submit__summary">
        <p>You built a <b>{market.title}</b> route using <b>{mode.title}</b> vehicles on a <b>{guideway.title}</b>.</p>
        <p>
          Your {mode.title}s run on this schedule:
          <ul>
            { serviceTimesArray.map((time) => {
              if (typeof (time) === 'boolean') return false
              if (time.frequencyValue === null) {
                return (
                  <li key={time.id}>
                    <b>No service</b> during <b>{time.title}</b>
                  </li>
                )
              } else {
                return (
                  <li key={time.id}>
                    Every <b>{time.frequencyValue} minutes</b> during <b>{time.title}</b>
                  </li>
                )
              }
            })}
          </ul>
        </p>
      </div>

      <div className="Submit__review-buttons">
        <Link to="/submit/costs" className="Department__done-button">
          <span className="left" style={{ paddingLeft: '20px' }}>Next</span>
          <img src={forwardArrow} alt="Back Arrow" className="right" style={{ padding: '6px 10px 0 0' }} />
        </Link>
      </div>

      <ProgressBar x={1} y={4} />
    </div>
  )
}

export default IntroPage

IntroPage.propTypes = {
}
