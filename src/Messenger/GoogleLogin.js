import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from './firebase';
import '../styles/Home.css'
function GoogleLogin() {

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  console.log(auth);
}
  return (
    <div>
      <p>MeetDeals</p>
      <button className='login_button' onClick={signInWithGoogle}> login with google</button>
    </div>
  )
}

export default GoogleLogin