import { useState } from "react";
import React from "react";
import logo from "../assets/images/logos/plutus/png/plutus_image_text_logo.png";
import { api } from "../includes/api";

const Login = () => {
  const [email, setEmail] = useState(""); //set email is a function
  const [password, setPassword] = useState(""); //setPassword is a function
  const [error, setError] = useState("");
  
  async function handleSubmit(event:React.FormEvent) {
    event.preventDefault();
    try {
      const res = await api.post("login", {
        password,
        email,
      }, {withCredentials: true}).catch(err => { 
        setError(err.response.data.message)
        console.log(err.response)
      });
      if (res) {
        console.log(res.data)
      }
    } catch (error) {
      console.error(error);
    }
    console.log(password, email);
  }


  return (
    //this div is the overall container
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          height: "28em",
          marginTop: "10em",
          borderRadius: "50px",
          width: "50%",
        }}
      >
        <div id="loginLogoPage">
          {error}
          <img alt="Plutus Logo"
            src={logo}
            style={{
              height: "10em",
              marginTop: "2em",
              filter: "brightness(0%)",
            }}
          ></img>
        </div>
        <form onSubmit={handleSubmit}>
          <label>email</label>
          <input
            onChange={(event) => setEmail(event.target.value)} //when the input value changes set email to current value of the input field changes
            placeholder="email"
          ></input>

          <label>password</label>
          <input
            onChange={(event) => setPassword(event.target.value)} //when the input value changes set email to current value of the input field changes
            placeholder="password"
          ></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
