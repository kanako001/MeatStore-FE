// import React from 'react'

// export default function Signup(props) {

//   const errorMessage = {
//     "none": "",
//     "blank field": "Please fill in all fields.",
//     "mismatched passwords": "Passwords do not match. Please try again.",
//     "fetch error": "An error occured. Please try again later.",
//     "username taken": "Username already exists. Please try another one."
// }

//   return (
//     <form onSubmit={props.handleSignup} className='signup-wrapper'>
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
//       <div className="password-confirmation-wrapper">
//         <input 
//           autoComplete="off"
//           type="password"
//           placeholder="confirm your password"
//           name="userPasswordConfirm"
//           value={props.userPasswordConfirm}
//           onChange={props.handleChange}
//         />
//       </div>

//       <div className="button-wrapper">
//         <button>Signup</button>
//       </div>

//       <div className="auth-sentence">
//         <h4 onClick={props.handleAuthMethodChange}>{props.authMethodFooterSentence}</h4>
//       </div>
//     </form>
//   );
// }