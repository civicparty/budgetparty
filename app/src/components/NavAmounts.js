import React from 'react'
import { FormattedNumber } from 'react-intl'
import PropTypes from 'prop-types';

const NavAmounts = (props) => {
  const { amount, header } = props

  const numberStyle = props.numStyle ? props.numStyle : 'currency'

  const parsedAmount = (amount) => {
    if (amount < 1000000) {
      return [amount, '']
    } else if (amount <= 1000000000) {
      return [amount / 1000000, 'million']
    } else {
      return [amount / 1000000000, 'billion']
    }
  }

  return (
    <div className="TotalFundsAvailable">
      <h4 className="TotalFundsAvailable__header">
        {header}
      </h4>
      <h4 className="TotalFundsAvailable__dollars">
        <FormattedNumber
          value={parsedAmount(amount)[0]}
          style={numberStyle} //eslint-disable-line
          currency="USD"
          minimumFractionDigits={0}
          maximumFractionDigits={2}
        />
        {` ${parsedAmount(amount)[1]}`}
      </h4>
    </div>
  )
}

export default NavAmounts

NavAmounts.propTypes = {
  amount: PropTypes.number.isRequired,
  numStyle: PropTypes.string,
  header: PropTypes.string,
};
