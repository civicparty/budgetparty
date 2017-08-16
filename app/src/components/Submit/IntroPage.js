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
        <p>You built a <b>{market.title}</b> route using <b>{mode.title}s</b> on a <b>{guideway.title}</b>.</p>
        <p>
          Your {mode.title}s run on this schedule:
          <ul>
            { serviceTimesArray.map((time) => {
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

      <h3 className="Submit__title">Your Project Estimated Costs</h3>
      <div className="Submit__summary">
        <ul>

        <li>
          Vehicle Costs: &nbsp;
          <FormattedNumber
            value={vehicleCost || 0}
            style="currency" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
          &nbsp; for {vehicleCount} {mode.title}s
        </li>
        <li>
          Construction Costs: &nbsp;
          <FormattedNumber
            value={guidewayCost || 0}
            style="currency" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </li>
        <li>
          Maintenance Facility Costs: &nbsp;
          <FormattedNumber
            value={maintenanceCost || 0}
            style="currency" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </li>
        <li>
          Annual Operation & Maintenance Costs: &nbsp;
          <FormattedNumber
            value={operatingCost || 0}
            style="currency" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </li>
      </ul>

      <div>
        <h3>Remaining Budget</h3>
        <p className="center-text">How many years can you fund operations with you remaining budget?</p>
        <h4 className="Submit__title">
          <FormattedNumber
            value={yearOfOperationFunded || 0}
            style="decimal" //eslint-disable-line
            minimumFractionDigits={0}
            maximumFractionDigits={2}
          />
          &nbsp; years
        </h4>
      </div>

      <div>
        <h3>Ridership</h3>
        <p className="center-text">How close were you to meeting the 10,000 daily ridership demand?</p>
        <h4 className="Submit__title">
          Your daily max capacity is estimated at &nbsp;
          <FormattedNumber
            value={capacityPerDay || 0}
            style="decimal" //eslint-disable-line
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </h4>
      </div>

      </div>
      <h3 className="Submit__title">Total Estimated Cost</h3>
      <span className="Submit__desc">
        <FormattedNumber
          value={totalCosts || 0}
          style="currency" //eslint-disable-line
          currency="USD"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
      </span>
      <span className="Submit__smallcaps">
        <span>original budget: </span>
        <FormattedNumber
          value={budgetAmount || 0}
          style="currency" //eslint-disable-line
          currency="USD"
          minimumFractionDigits={0}
          maximumFractionDigits={1}
        />
      </span>
      <h3>Pretty exciting, right? Now, let’s hear what the community says about your transit plan.</h3>
      <div className="Submit__review-buttons">
        <Link to="/submit/review" className="Department__done-button">
          <span className="left" style={{ paddingLeft: '20px' }}>Next</span>
          <img src={forwardArrow} alt="Back Arrow" className="right" style={{ padding: '6px 10px 0 0' }} />
        </Link>
      </div>
      <ProgressBar x={1} y={3} />
    </div>
  )
}

export default IntroPage

IntroPage.propTypes = {
}
