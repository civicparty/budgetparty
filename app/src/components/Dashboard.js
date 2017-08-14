import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import partyLevels from '../config/partyLevels'


export default class Dashboard extends Component {
  render() {
    const {
      choices,
      calculations,
      user,
    } = this.props

    const {
      market,
      mode,
      guideway,
      serviceTimes,
    } = choices

    return (
      <div>
        <Navigation showUser showBudget user={user} amounts={calculations} />

        <div className="Dashboard__body">{
          partyLevels.map((level) => {
            const routeSelected = level.index === 1 && market && market.id;
            const modeSelected = level.index === 2 && mode && mode.id;
            const guidewaySelected = level.index === 3 && guideway && guideway.id;
            const servicesSelected = level.index === 4 && serviceTimes > 0;
            const skipIntroPage = routeSelected || modeSelected ||
                                  guidewaySelected || servicesSelected;

            const link = skipIntroPage ? `/level/${level.index}/choices` :
                         `/level/${level.index}`;

            return (
              <PartyLevel {...level} {...choices} link={link} key={level.index} />
            )
          })
        }</div>

      </div>
    )
  }
}

Dashboard.propTypes = {
};
