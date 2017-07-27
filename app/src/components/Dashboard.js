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
      calculations,
      user,
    } = this.props

    const {
      market,
      mode,
      guideway,
      serviceTimes,
    } = choices

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
        <Navigation showUser showBudget user={user} amounts={calculations} />

        <div className="Dashboard__body">{
          partyLevels.map( (level) => {
            const routeSelected = level.index === 1 && market && market.id;
            const modeSelected = level.index === 2 && mode && mode.id;
            const guidewaySelected = level.index === 3 && guideway && guideway.id;
            const servicesSelected = level.index === 4 && serviceTimes > 0;
            const skipLevelPage = routeSelected || modeSelected || guidewaySelected || servicesSelected;

            const link = level.title === "Welcome" ? `/intro/1` :
                         skipLevelPage ? `/level/${level.index}/choices`:
                         `/level/${level.index}`;

            return (
              <Link to={link} key={level.index}>
                <PartyLevel {...level} {...choices} />
              </Link>
            )
          })
        }</div>

      </div>
    )
  }
}

Dashboard.propTypes = {
};
