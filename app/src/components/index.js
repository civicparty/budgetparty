import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Intro from './Intro'
import Dashboard from './Dashboard'
import Level from './Level'
import ChoicesContainer from './ChoicesContainer'
import User from './User'
import { firebaseAuth } from '../config/constants'
import { logout } from '../helpers/auth'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: true,
    }
  }

  updateAuthState(user) {
    console.log(user);
    if (user) {
      this.setState({
        authed: true,
        loading: false,
      })
    } else {
      this.setState({
        loading: false
      })
    }
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => this.updateAuthState(user))
  }

  componentWillUnmount () {
    this.removeListener()
  }

  handleLogout() {
    console.log("LOGGED OUT")
    logout()
    this.setState({authed: false})
  }

  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <Router>
        <div className="container">
          <div className="row">
            <Switch>
              <Route path='/' exact render={() => {
                return this.state.authed
                ? <Redirect to="/intro/1" />
                : <Home />
              }} />
              <Route path='/login' isAuthed={this.state.authed} render={() => {
                return this.state.authed
                ? <Redirect to="/intro/1" />
                : <Home />
                }}
              />
              <Route path='/intro/:id' render={ props => {
                return <Intro {...props} authed={this.state.authed}
                  handleLogout={this.handleLogout.bind(this)}
                />
              }}/>
              <Route path='/dashboard' render={ props => {
                return <Dashboard isAuthed={this.state.authed}
                  handleLogout={this.handleLogout.bind(this)}
                />
              }}/>
              <Route exact path='/level/:id' render={props => {
                return <Level {...props} isAuthed={this.state.authed}
                  handleLogout={this.handleLogout.bind(this)}
                />
              }}/>
              <Route path='/level/:level_id/choices' render={ props => {
                return <ChoicesContainer {...props} isAuthed={this.state.authed}
                  handleLogout={this.handleLogout.bind(this)}
                />
              }}/>
              <Route path='/user' render={ props => {
                return <User isAuthed={this.state.authed}
                  handleLogout={this.handleLogout.bind(this)}
                />
              }}/>
              <Route render={() => <h3>Oops, you went off the tracks.</h3>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
