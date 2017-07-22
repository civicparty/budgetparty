import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import Navigation from './Navigation'
import PartyLevel from './PartyLevel'
import partyLevels from '../config/partyLevels.js'


export default class Dashboard extends Component {
  render () {
    const {
      // services,
      // funds,
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
        <Navigation
          // showUser showTotalFunds user={user} funds={funds}
        />

        <div className="Dashboard__body">{
          partyLevels.map( (level) => {
            let link = level.title === "Welcome" ? `/intro/1` : `/level/${level.index}`;

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
