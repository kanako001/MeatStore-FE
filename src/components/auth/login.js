// import React from 'react'

// export default function Login(props) {

//   const errorMessage = {
//     "none": "",
//     "blank field": "Please fill in all fields.",
//     "fetch error": "An error occured. Please try again later.",
//     "not verified": "Incorrect username or password."
//   }

//   return (
//     <form onSubmit={props.handleLogin} className='login-wrapper'>
//         {errorMessage[props.errorText]}
//       <div className="email-wrapper">
//         <input 
//           autoComplete="off"
//           type="text"
//           placeholder="email@example.com"
//           name="usernameInput"
//           value={props.usernameInput}
//           onChange={props.handleChange}
//         />
//       </div>

//       <div className="password-wrapper">
//         <input 
//           autoComplete="off"
//           type="password"
//           placeholder="enter your password"
//           name="userPassword"
//           value={props.userPassword}
//           onChange={props.handleChange}
//         />
//       </div>

//       <div className="button-wrapper">
//         <button onClick={props.handleClick}>Login</button>
//       </div>

//       <div className="auth-sentence">
//         <h4 onClick={props.handleAuthMethodChange}>{props.authMethodFooterSentence}</h4>
//       </div>

//     </form>
//   );
// }