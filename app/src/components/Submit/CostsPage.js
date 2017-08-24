import React from 'react'
import { FormattedNumber } from 'react-intl'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'underscore'

import ProgressBar from '../ProgressBar'

import backArrow from '../../images/back_arrow.svg'
import forwardArrow from '../../images/forward_arrow.svg'

const CostsPage = (props) => {
  const {
    budgetAmount,
    vehicleCost,
    vehicleCount,
    guidewayCost,
    maintenanceCost,
    operatingCost,
    capacityPerDay,
    yearsOfOperationFunded,
    totalCosts,
    operatingCostPerRiderYearly,
    peakDailyCapacity,
  } = props.calculations
  const { market, mode, guideway, serviceTimes } = props.choices
  const serviceTimesArray = Object.values(serviceTimes)

  return (
    <div className="Submit__intro-body">
      <img src={'/images/levels/envelope_full.svg'} className="Submit__img" alt="Envelope Icon" />

      <div className="margin-bottom">
        <h2 className="Submit__title">Total Estimated Cost</h2>
        <div className="Submit__desc">
          <FormattedNumber
            value={totalCosts || 0}
            style="currency" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </div>
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
      </div>

      <div className="margin-bottom">
        <h2 className="Submit__title">AM & PM Peak Capacity</h2>
        <div className="Submit__desc">
          <FormattedNumber
            value={peakDailyCapacity || 0}
            style="decimal" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </div>
        <span className="Submit__smallcaps">Target Ridership: 6,000 Riders</span>
      </div>

      <h3>Your Estimated Project Costs</h3>
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
            &nbsp; for {vehicleCount} {mode.title} vehicles
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
          <h3 className="center-text">Remaining Budget</h3>
          <p>How many years can you fund operations with your remaining budget?</p>
          <strong className="Submit__title">
            <FormattedNumber
              value={yearsOfOperationFunded || 0}
              style="decimal" //eslint-disable-line
              minimumFractionDigits={0}
              maximumFractionDigits={2}
            />
            &nbsp; years
          </strong>
        </div>

        <div>
          <div className="margin-bottom">
            <h3 className="center-text"> Daily Ridership Capacity</h3>
            <p>How close were you to meeting the 10,000 daily ridership demand?</p>
            <strong className="Submit__title">
              Your daily max capacity is estimated at &nbsp;
              <FormattedNumber
                value={capacityPerDay || 0}
                style="decimal" //eslint-disable-line
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </strong>
          </div>

          {/* <p>What is the yearly cost of the route per rider?</p>
          <strong className="Submit__title">
            Your yearly operating costs per rider is &nbsp;
            <FormattedNumber
              value={operatingCostPerRiderYearly || 0}
              style="currency" //eslint-disable-line
              currency="USD"
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </strong> */}
        </div>
      </div>

      <div className="Submit__review-buttons">
        <Link to="/submit/customers" className="Department__done-button">
          <span className="left" style={{ paddingLeft: '20px' }}>Next</span>
          <img src={forwardArrow} alt="Back Arrow" className="right" style={{ padding: '6px 10px 0 0' }} />
        </Link>
      </div>
      <ProgressBar x={2} y={4} />
    </div>
  )
}

export default CostsPage

CostsPage.propTypes = {
}
