import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';

import Navigation from '../Navigation'
import IntroPage from './IntroPage'
import CostsPage from './CostsPage'
import CustomersPage from './CustomersPage'
import SavePage from './SavePage'

class Submit extends Component {
  render() {
    const { user, calculations } = this.props;

    return (
      <div>
        <Navigation showUser showBudget user={user} amounts={calculations} />

        <div className="Submit">
          <Switch>
            <Route path="/submit" className="intro" exact
              render={() => <IntroPage {...this.props} />}
            />
            <Route path="/submit/costs" exact
              render={() => <CostsPage {...this.props} />}
            />
            <Route path="/submit/customers" exact
              render={() => <CustomersPage {...this.props} />}
            />
            <Route path="/submit/save" exact
              render={() => <SavePage {...this.props} />}
            />
          </Switch>
        </div>

      </div>
    )
  }

}

export default Submit

Submit.propTypes = {
  funds: PropTypes.shape({
    sumOfServiceSpending: PropTypes.number.isRequired,
    servicesSumPercentChange: PropTypes.number.isRequired,
  }).isRequired,
  services: PropTypes.arrayOf(
    PropTypes.object,
  ),
}
