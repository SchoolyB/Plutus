import React from 'react'
import hermes from '../assets/images/logos/hermes/png/logo-no-background.png'


//TODO: import email entered on sign up from users and add literal to paragraph tag below
export default function checkEmail() {
  return (
    <>
      <div id='checkEmailContainer'>
        <div id='hermesBox'>
          <img src={hermes} alt='The Hermes Messenger Service logo'/>
          <h1>Please verify your email</h1>
          <p>We've sent a link to *@email.com*. Please click <a href=''>here </a>
            if you did not receive a link. Click <a href=''>here </a> if you want to change the email</p>      
        </div>
    </div>
    </>
  )
}
