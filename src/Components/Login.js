import React, { useState, useContext } from 'react';
import axios from 'axios';
import authCon from '../store/authCon';

function Login() {
  const authCtx = useContext(authCon);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(true);

const bod = {
    username, password
}
//   function handleUsernameChange(event) {
//     setUsername(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

  function handleSubmit(event) {
    event.preventDefault();
  

  axios.post(register ? `/register` : `login`, bod)
  .then(({ data }) => {
    console.log("auth confrimed", data);
    authCtx.login(data.token, data.exp, data.userId);
  })
  .catch((error) => {
    setPassword("");
    setUsername("");
  })
}

  return (
    <main>
    <h1>Sign in or Create an Account!</h1>
    <form className= "login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input placeholder='username' 
        type="text" value={username} 
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"/>
      </label>
      <br />
      <label>
        Password:
        <input type="password"
        className="login-input" 
        placeholder='password'
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      
      <button onClick={register ? "Sign Up" : "Login"} className="login-btn">Login</button>
      <button onClick={() => setRegister(!register)} className='login-btn'>Sign Up</button>
    </form>
    </main>
  );
}
//may to to change button parts more

export default Login;