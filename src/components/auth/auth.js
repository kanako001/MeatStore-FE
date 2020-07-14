import React, { Component } from 'react';
import axios from 'axios';

import Login from './login'
import Signup from './signup'


export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authMethodFooterSentence: "Don't have an Account? Sign up.",
      authMethod: "login",
      userEmailInput: "",
      userPassword: "",
      userPasswordConfirm: "",
      errorText: "",
      endpoints: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup .bind(this)
    this.handleAuthMethodChange = this.handleAuthMethodChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleClick(event) {
    event.precventDefault();
    console.log(state)
  }

  handleSignup(event) {
    event.precventDefault();
    if (this.state.userEmailInput === "" || this.state.userPassword === "" || this.state.userPasswordConfirm === "") {
      this.setState({
        errorText: "blank field"
      })
    }
    else if (this.state.userPassword != this.state.userPasswordConfirm) {
      this.setState({
        errorText: "non-uniform passwords"
      })
    }
    else {
      return axios.post(`http://127.0.0.1:5000/user/verification`,{
        client: {
          email: this.state.userEmailInput,
          password: this.state.userPassword
        }
      }, {withCredentials: true})
      .then(response => response.json())
      .then(data => console.log(data))
    }
  }

  handleLogin(event) {
    event.precventDefault();

    if (this.state.userEmailInput === "" || this.state.userPassword) {
      this.setState({
        errorText: "blank field"
      })
    }
    return axios.post(`http://127.0.0.1:5000/user/verification`, {
      client: {
        email: this.state.userEmailInput,
        password: this.state.userPassword
      }
    }, {withCredentials: true})
    .then(response => response.json())
    .then(data => console.log(data))
  }

  handleSubmit(event) {
    event.precventDefault();
    
  }

  handleAuthMethodChange(){
    this.state.authMethod === 'login' ? this.setState({
      authMethod: 'signup',
      authMethodFooterSentence: 'Already have an account? Log in.'
    })
    :
    this.setState({
      authMethod: 'login',
      authMethodFooterSentence: "Don't have an Account? Sign up"
    })
  
}

  render() {
    return (

      <div className='auth-wrapper'>
      {this.state.authMethod === 'login' ?
        <div> 
          <Login 
          handleChange={this.handleChange}
          // handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
          handleLogin={this.handleLogin}
          />
        </div>
        :
        <div>
          <Signup 
          handleChange={this.handleChange}
          // handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
          handleSignup={this.handleSignup}
          />
        </div>
        }
        <h4 onClick={this.handleAuthMethodChange}>{this.state.authMethodFooterSentence}</h4>
      </div>
    );
  }
}