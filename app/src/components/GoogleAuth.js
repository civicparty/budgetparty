import React, { Component } from 'react'
import firebase from 'firebase'
<<<<<<< HEAD
import { firebaseAuth, googleAuthProvider } from '../config/constants'
=======
import { googleAuthProvider } from '../config/constants'
>>>>>>> aed6f9fa387b43a05c150aa67b7140f066c347f7
import googleLogo from '../images/auth_service_google.svg'



export default class GoogleAuth extends Component {

  authenticate() {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(() => {
        this.authHandler();
      });
  }

  authHandler(err, authData) {
    console.log(authData)
  }

  render() {
    return (
      <div className="text-center">
        <p>or</p>
        <button className="btn google-auth-button" onClick={() => { this.authenticate() }} >
          <img src={googleLogo} alt="Google"/>
          Login with Google
        </button>
      </div>
    )
  }
}
