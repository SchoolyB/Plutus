import axios from "axios";
import { useState } from "react";
import logo from "../assets/images/logos/png/logo-no-background.png";

const Login = () => {
  const [email, setEmail] = useState(""); //set email is a function
  const [password, setPassword] = useState(""); //setPassword is a function

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:4040/login", {
        password,
        email,
      });
      console.log(res.data);
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
          <img
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
