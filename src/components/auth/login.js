import React from 'react'

export default function Login(props) {

  const errorMessage = {
    "none": "",
    "blank field": "Please fill in all fields.",
    "fetch error": "An error occured. Please try again later.",
    "not verified": "Incorrect username or password."
}

  return (
    <form onSubmit={props.handleLogin} className='login-wrapper'>
      <div className="email-wrapper">
        <input 
          autoComplete="off"
          type="text"
          placeholder="email@example.com"
          name="userEmailInput"
          value={props.userEmailInput}
          onChange={props.handleChange}
        />
        <input 
          autoComplete="off"
          type="password"
          placeholder="enter your password"
          name="userPassword"
          value={props.userPassword}
          onChange={props.handleChange}
        />
        <div className="button-wrapper">
          <button onClick={props.handleClick}>Login</button>
        </div>
      </div>
    </form>
  );
}