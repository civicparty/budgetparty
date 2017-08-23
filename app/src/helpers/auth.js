import { database, firebaseAuth } from '../config/constants'

export function saveUser(user) {
  return database.ref(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      // created_at: new Date(),
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
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function anonymousAuth() {
  return firebaseAuth().signInAnonymously()
}
