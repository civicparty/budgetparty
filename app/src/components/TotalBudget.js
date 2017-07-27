import React from 'react'
import { FormattedNumber } from 'react-intl'
import PropTypes from 'prop-types';

const TotalBudget = (props) => {
  const { amount } = props

  return (
    <div className="TotalFundsAvailable">
      <h4 className="TotalFundsAvailable__header">
        Total Funds
      </h4>
      <h4 className="TotalFundsAvailable__dollars">
        <FormattedNumber
          value={amount}
          style="currency" //eslint-disable-line
          currency="USD"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
        {' billon'}
      </h4>
    </div>
  )
}

export default TotalBudget

TotalBudget.propTypes = {
  amount: PropTypes.number.isRequired,
};
