import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import partyLevels from '../config/partyLevels.js'


export default class Dashboard extends Component {
  render () {
    const {
      choices,
      user,
    } = this.props;

    // const getServiceLink = (service) => {
    //   // The Welcome Level should go back to the Intro pages...
    //   if (service.index === 0) return '/intro/1';
    //   // The Budget Submission will also have a special link...
    //   else if (service.index + 1 >= services.length) return '/submit';
    //   // Otherwise, continue at will for the other service buckets.
    //   else return `/service/${service.index}`;
    // };
    //
    // const isLinkClickAllowed = (service) => {
    //   return service.status && service.status !== "locked";
    // }

    return (
      <div>
        <Navigation showUser user={user}
          // showTotalFunds funds={funds}
        />

        <div className="Dashboard__body">{
          partyLevels.map( (level) => {
            const routeSelected = level.index === 1 && choices.marketId;
            const modeSelected = level.index === 2 && choices.modeId;
            const guidewaySelected = level.index === 3 && choices.guidewayId;
            const servicesSelected = level.index === 4 && choices.serviceTimes > 0;
            const skipLevelPage = routeSelected || modeSelected || guidewaySelected || servicesSelected;
            
            const link = level.title === "Welcome" ? `/intro/1` :
                         skipLevelPage ? `/level/${level.index}/choices`:
                         `/level/${level.index}`;

            return (
              <Link to={link} key={level.index}>
                <PartyLevel {...level} />
              </Link>
            )
          })
        }</div>

      </div>
    )
  }
}

Dashboard.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  funds: PropTypes.shape({
    generalFund: PropTypes.number,
    servicesSum: PropTypes.number,
    generalFund2016: PropTypes.number,
  }).isRequired,
  user: PropTypes.object,
};
