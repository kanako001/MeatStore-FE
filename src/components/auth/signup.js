import React from 'react'

export default function Signup(props) {
  return (
    <form onSubmit={props.hanledSignup} className='login-wrapper'>
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

        <input 
          type="password"
          placeholder="confirm your password"
          name="userPassword"
          value={props.userPasswordConfirm}
          onChange={props.handleChange}
        />
        <button onClick={props.handleClick}>Signup</button>
      </div>
    </form>
  );
}