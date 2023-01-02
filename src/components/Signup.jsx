import React from 'react'
import logo from "../assets/images/logos/png/logo-no-background.png"



export default function Signup() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
      backgroundColor: "white",
      height: "40em",
      marginTop: "6em",
      borderRadius: "50px",
      width: "50%"   
    }}>
        <div>
      <img src={logo} style={{
        height: "6em",
        marginTop: "2em",
        filter: "brightness(0%)"
          }}></img>
          <form style={{
            marginTop: "3em"
          }}>
            <label htmlFor="email" style={{
              color: "red"
            }}>Enter an email
            </label>
          <input placeholder='please enter your email'></input>
            <label htmlFor="confirmEmail" style={{
              color: "red"
            }}>Confirm Email
            </label>
            <input placeholder='please confirm your email'></input>
              
            <label htmlFor="email" style={{
              color: "red"
            }}>Enter a password
            </label>
          <input placeholder='please enter a password'></input>
            <label htmlFor="confirmEmail" style={{
              color: "red"
            }}>Confirm password
            </label>
            <input placeholder='please confirm your password'></input>
            <button type='submit'>Submit</button>
            <p style={{
            color: "red"
          }}>Already a memeber? <a href="login">Login</a></p>
          </form>





        </div>
      </div>

    </div>
  )
}
