import React, { useState, useContext } from "react";
import axios from "axios";
import authCon from "../store/authCon";

function Login() {
  const authCtx = useContext(authCon);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);

  //   function handleUsernameChange(event) {
  //     setUsername(event.target.value);
  //   }

  //   function handlePasswordChange(event) {
  //     setPassword(event.target.value);
  //   }

  function handleSubmit(event) {
  
    event.preventDefault();

    const bod = {
      username,
      password,
    };

    const baseUrl = "http://localhost:4000"
    axios
      .post(register ? `${baseUrl}/register` : `${baseUrl}/login`, bod)
      .then(({ data }) => {
        console.log("auth confrimed", data);
        authCtx.login(data.token, data.exp, data.userId);
      })
      .catch((error) => {
        setPassword("");
        setUsername("");
      });
  }

  return (
    <main className="main-con">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in or Create an Account!</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />

        <button className="planet-btn" id="login-btn"
        onClick={() => setRegister(!register)}>
          {/* {register ? "Sign Up" : "Login"} */}
          Login
        </button>
        <button
          onClick={() => setRegister(register)}
          className="planet-btn"
          id="sign-in-btn"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}


export default Login;