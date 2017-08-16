import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import ProgressBar from '../ProgressBar'

import backArrow from '../../images/back_arrow.svg'
import forwardArrow from '../../images/forward_arrow.svg'


const CustomerPage = (props) => {
  const { choices } = props

  return (
    <div>
      <div className="Submit__review-header">
        <img src="/images/levels/envelope_full.svg" alt="Envelope Icon" />
      </div>
      <div className="Submit__body">
        <h2>Pretty exciting, right? Now, let’s hear what the community says about your transit plan.</h2>

        <blockquote>{choices.mode.quote}</blockquote>

        <blockquote>{choices.guideway.quote}</blockquote>

        <div className="Submit__review-buttons">
          <Link to="/submit/costs" className="Department__edit-button">
            <div className="flexconatiner">
              <img src={backArrow} alt="Back Arrow" className="left" style={{ padding: '6px 0 0 10px' }} />
              <span className="right" style={{ paddingRight: '20px' }}>Prev</span>
            </div>

          </Link>
          <Link to="/submit/save" className="Department__done-button">
            <span className="left" style={{ paddingLeft: '20px' }}>Next</span>
            <img src={forwardArrow} alt="Back Arrow" className="right" style={{ padding: '6px 10px 0 0' }} />
          </Link>
        </div>
        <ProgressBar x={3} y={4} />
      </div>
    </div>
  )
};

CustomerPage.propTypes = {
};

export default CustomerPage;
