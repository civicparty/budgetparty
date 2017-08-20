import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tabs from './Tabs'
import AuthForm from './AuthForm'
import GoogleAuth from './GoogleAuth'
import projectconnect from '../images/projectconnect.png'
import capmetro from '../images/capmetro.png'
import glasshouse from '../images/glasshousepolicy.png'

import { auth, login, anonymousAuth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    errorText: error.message,
  }
}

function setLoginErrorMsg(error) {
  return {
    errorText: error,
  }
}

export default class Home extends Component {

  state = {
    activeTab: 0,
    errorText: null,
  }

  getAuthForm = () => {
    return this.state.activeTab === 0
      ?
        <AuthForm actionHandler={this.handleRegister}
          buttonText={'Create Account'}
          errorText={this.state.errorText} />
      :
        <AuthForm actionHandler={this.handleLogin}
          buttonText={'Sign in'}
          errorText={this.state.errorText} />
  }

  changeTab = (tab) => {
    this.setState({
      activeTab: tab.id,
    });
  }

  skipLogin = (e) => {
    anonymousAuth()
      .catch((error) => {
        this.setState(setLoginErrorMsg('Skip login is not supported as of now.'))
        console.log(error)
      })
  }

  handleRegister = (email, pwd) => {
    auth(email, pwd)
      .catch(e => this.setState(setErrorMsg(e)))
  }

  handleLogin = (email, pwd) => {
    login(email, pwd)
      .catch((error) => {
        this.setState(setLoginErrorMsg('Invalid username/password.'))
        console.log(error)
      })
  }

  tabList = [
    { id: 0, text: 'Sign Up' },
    { id: 1, text: 'Log in' },
  ]

  render() {
    return (
      <div className="home">
        <div className="flexcontainer">
          <div className="flex">
            <img src={projectconnect} alt="Project Connect Logo" className="flex partnerLogo" />
          </div>
          <div className="flex">
            <img src={capmetro} alt="Cap Metro Logo" className=" partnerLogo" />
          </div>
          <div className="flex">
            <img src={glasshouse} alt="Glasshouse Policy Logo" className="flex partnerLogo" />
          </div>
        </div>

        <h1 className="landingHeader">Project Connect <br /> Budget Party</h1>

        <div className="auth-form-wrapper">
          <Tabs
            tabList={this.tabList}
            activeTab={this.state.activeTab}
            changeTab={this.changeTab}
          />
          <div className="auth-form col-sm-6 col-sm-offset-3">
            { this.getAuthForm() }
            <GoogleAuth />
          </div>

        </div>
        <Link onClick={this.skipLogin} to="/dashboard" className="auth-form__skip">Skip Login</Link>
      </div>
    )
  }
}
