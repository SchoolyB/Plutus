import React from 'react'
import logo from "../assets/images/logos/png/logo-no-background.png"
// import {createClient} from "@supabase/supabase-js"

// require("dotenv").config()

// const supabaseUrl = "https://qjewggjldzecwlimkaro.supabase.co";
// const supabasekey = process.evv.SUPA_BASE;
// const supabase = createClient(supabaseUrl, supabasekey);


// let { data, error } = await supabase.auth.signUp({
//   email: 'someone@email.com',
//   password: '1234'
// })


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
          <input id="initialEmail" placeholder='please enter your email'></input>
            <label htmlFor="confirmEmail" style={{
              color: "red"
            }}>Confirm Email
            </label>
            <input id="confirmEmail" placeholder='please confirm your email'></input>
              
            <label htmlFor="email" style={{
              color: "red"
            }}>Enter a password
            </label>
          <input  id="initialPassword" placeholder='please enter a password'></input>
            <label htmlFor="confirmEmail" style={{
              color: "red"
            }}>Confirm password
            </label>
            <input  id="confirmPassword" placeholder='please confirm your password'></input>
            <button type='submit'>Submit</button>
            <p style={{
            color: "red"
          }}>Already a member? <a href="login">Login</a></p>
          </form>

        </div>
      </div>

    </div>
  )
}
