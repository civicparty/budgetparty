import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';

import Navigation from '../Navigation'
import IntroPage from './IntroPage'
import ReviewPage from './ReviewPage'
import SavePage from './SavePage'

class Submit extends Component {
  render() {
    const { calculations } = this.props;

    return (
      <div>
        <Navigation showBack showTotalFunds />

        <div className="Submit">
          <Switch>
            <Route path="/submit" className="intro" exact
              render={() => <IntroPage calculations={calculations} />}
            />
            <Route path="/submit/review" exact
              render={() => <ReviewPage />}
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
}
