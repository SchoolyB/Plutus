
import React from "react";
import { useState } from "react";
import logo from "../assets/images/logos/plutus/png/plutus_image_text_logo.png";
import { api } from "../includes/api";


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [initialEmail, setEmail] = useState(""); //set email is a function
  const [initialPassword, setPassword] = useState(""); //setPassword is a function
  const [confirmationEmail, setConfirmEmail] = useState("");
  const [confirmationPassword, setConfirmPassword] = useState("");

  async function handleSubmit(event:React.FormEvent) { //event:any would work as well with "any" being the type
    event.preventDefault();
    try {
      const res = await api.post("signup", {
        firstName,
        lastName,
        initialEmail,
        initialPassword,
        confirmationEmail,
        confirmationPassword,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
    console.log(
      initialPassword,
      initialEmail,
      firstName,
      lastName,
      confirmationEmail,
      confirmationPassword
    );
  }

  return (
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
          height: "40em",
          marginTop: "6em",
          borderRadius: "50px",
          width: "50%",
        }}
      >
        <div>
          <img alt="Plutus logo"
            src={logo}
            style={{
              height: "6em",
              marginTop: "2em",
              filter: "brightness(0%)",
            }}
          ></img>
          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "3em",
            }}
          >
            <label htmlFor="first name">Enter your first name</label>
            <input
              required
              onChange={(event) => setFirstName(event.target.value)}
              id="name"
              placeholder="Please enter your first name"
            ></input>

            <label htmlFor="last name">Enter your last name</label>
            <input
              required
              onChange={(event) => setLastName(event.target.value)}
              id="name"
              placeholder="Please enter your last name"
            ></input>

            <label
              htmlFor="email"
              style={{
                color: "red",
              }}
            >
              Enter an email
            </label>
            <input
              required
              pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
              onChange={(event) => setEmail(event.target.value)}
              id="initialEmail"
              placeholder="please enter your email"
            ></input>
            <label
              htmlFor="confirmEmail"
              style={{
                color: "red",
              }}
            >
              Confirm Email
            </label>
            <input
              required
              pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
              onChange={(event) => setConfirmEmail(event.target.value)}
              id="confirmEmail"
              placeholder="please confirm your email"
            ></input>

            <label
              htmlFor="email"
              style={{
                color: "red",
              }}
            >
              Enter a password
            </label>
            <input
              required
              pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$"
              onChange={(event) => setPassword(event.target.value)}
              id="initialPassword"
              placeholder="Please enter a password"
            ></input>
            <label
              htmlFor="confirmEmail"
              style={{
                color: "red",
              }}
            >
              Confirm password
            </label>
            <input
              required
              pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$"
              onChange={(event) => setConfirmPassword(event.target.value)}
              id="confirmPassword"
              placeholder="Please confirm your password"
            ></input>
            <button type="submit">Submit</button>
            <p
              style={{
                color: "red",
              }}
            >
              Already a member? <a href="login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
