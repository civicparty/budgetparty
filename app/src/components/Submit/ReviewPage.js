import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import ProgressBar from '../ProgressBar'

import backArrow from '../../images/back_arrow.svg'
import forwardArrow from '../../images/forward_arrow.svg'


const ReviewPage = (props) => {
  const { services } = props

  return (
    <div>
      <div className="Submit__review-header">
        <img src="/images/levels/envelope_full.svg" alt="Envelope Icon" />
      </div>
      <div className="Submit__body">
        <h3>Customer Narratives to go here</h3>
        {/* <h4 className="Submit__review-subtitle">You opted to...</h4>

        <p className="Submit__review-service-list">
          overview of choices here
        </p> */}

        {/* <Link to="/dashboard" className="Submit__revise-link">Revise Project</Link> */}
        <div className="Submit__review-buttons">
          <Link to="/submit" className="Department__edit-button">
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
        <ProgressBar x={2} y={3} />
      </div>
    </div>
  )
};

ReviewPage.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ReviewPage;
