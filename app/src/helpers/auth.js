import { database, firebaseAuth } from '../config/constants'

export function saveUser(user) {
  const date = new Date()
  return database.ref(`users/${user.uid}/info`)
    .update({
      email: user.email,
      uid: user.uid,
      lastLogin: date,
    })
    .then(() => user)
}

export function auth(email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout() {
  return firebaseAuth().signOut()
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
    .then(user => saveUser(user))
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function anonymousAuth() {
  return firebaseAuth().signInAnonymously()
}
