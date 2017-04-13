import firebase from 'firebase'

const config = {
<<<<<<< HEAD
  apiKey: "AIzaSyDnT7O9yt45FGCNMyi_8G8ndYs2_mqqw1I",
  authDomain: "capmetro-a4e1f.firebaseapp.com",
  databaseURL: "https://capmetro-a4e1f.firebaseio.com",
  storageBucket: "capmetro-a4e1f.appspot.com",
  messagingSenderId: "615069100604"
=======
  apiKey: "AIzaSyDVYXW7KD054GkOAzHb597yrEZMMxz0aDM",
  authDomain: "budget-party.firebaseapp.com",
  databaseURL: "https://budget-party.firebaseio.com",
  storageBucket: "budget-party.appspot.com",
  messagingSenderId: "784889150023"
>>>>>>> aed6f9fa387b43a05c150aa67b7140f066c347f7
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
