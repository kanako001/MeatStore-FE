import React from 'react'

export default function Login(props) {
  return (
    <form onSubmit={props.handleLogin} className='login-wrapper'>
      <div className="email-wrapper">
        <input 
          type="text"
          placeholder="email@example.com"
          name="userEmailInput"
          value={props.userEmailInput}
          onChange={props.handleChange}
        />
        <input 
          type="password"
          placeholder="enter your password"
          name="userPassword"
          value={props.userPassword}
          onChange={props.handleChange}
        />
        <button onClick={props.handleClick}>Login</button>
      </div>
    </form>
  );
}