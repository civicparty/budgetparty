import React, { Component } from 'react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
export default class Navigation extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">React Router + Firebase Auth</Link>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <Link to="/" className="navbar-brand">Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
            </li>
            <li>
              {this.props.isAuthed
                ? <button
                    style={{border: 'none', background: 'transparent'}}
                    onClick={this.props.handleLogout}
                    className="navbar-brand">Logout</button>
                : <span>
                    <Link to="/login" className="navbar-brand">Login</Link>
                  </span>}
            </li>
          </ul>
=======
import TotalFundAvailable from './TotalFundAvailable'
import ServiceFundsAvailable from './ServiceFundsAvailable'

import avatar from '../images/avatar.svg'
import back from '../images/back.svg'

export default class Navigation extends Component {
  render () {
    return (
      <nav className="Navigation">
        <div className="flexbox">
          {
            this.props.service &&
            <div className="Navigation__back">
              <img
                src={back}
                alt="Go Back"
                className="Navigation__user-icon"
                onClick={this.props.history.goBack}
              />
            </div>
          }
          {
            !this.props.service &&
              <Link to="/user" className="flex">
                <img src={avatar} alt="User Account" className="Navigation__user-icon"/>
              </Link>
          }
          <TotalFundAvailable />
          {
            this.props.service &&
              <ServiceFundsAvailable />
          }
>>>>>>> aed6f9fa387b43a05c150aa67b7140f066c347f7
        </div>
      </nav>
    )
  }
}
