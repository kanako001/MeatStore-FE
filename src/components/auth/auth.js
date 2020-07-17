import React, { Component } from 'react';
import Cookies from 'js-cookie'

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
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup .bind(this)
    this.handleAuthMethodChange = this.handleAuthMethodChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }


  handleSignup(event) {
    event.preventDefault()

    if (this.state.userEmailInput === "" || this.state.userPassword === "" || this.state.userPasswordConfirm === "") {
        this.setState({ errorText: "blank field" })
    }
    else if (this.state.userPassword !== this.state.userPasswordConfirm) {
        this.setState({ errorText: "mismatched passwords" })
    }
    else {
        fetch("http://127.0.0.1:5000/user/create", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.userEmailInput,
                password: this.state.userPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data === "Email exists already") {
                this.setState({ errorText: "email exists already" })
            }
            else {
                this.setState({ errorText: "none" })
            }
        })
        .catch(error => {
            console.log(error)
            this.setState({ errorText: "fetch error" })
        })
    }
  }

  handleLogin(event) {
    event.preventDefault()

    if (this.state.userEmailInput === "" || this.state.userPassword === "") {
        this.setState({ errorText: "blank field" })
    }
    else {
        fetch("http://127.0.0.1:5000/user/verification", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.userEmailInput,
                password: this.state.userPassword
            })
        })
        .then(response => {
          response.json()
        })
        .then(data => {
          console.log(data)
            if (data === "User not verified") {
                this.setState({ errorText: "not verified" })
                this.props.history.push("/")
            }
             else {
                 Cookies.set("email", this.state.userEmailInput)
                 this.props.history.push("/product")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   (Cookies.get("username"))
             }
            console.log(data)
         })
        .catch(error => {
            console.log(error)
            this.setState({ errorText: "fetch error" })
         })
    }
  }

  handleAuthMethodChange(){
    this.state.authMethod === 'login' ? this.setState({
      authMethod: 'signup',
      authMethodFooterSentence: 'Already have an account? Log in.',
      userEmailInput: "",
      userPassword: "",
      userPasswordConfirm: "",
      errorText: "",
    })
    :
    this.setState({
      authMethod: 'login',
      authMethodFooterSentence: "Don't have an Account? Sign up",
      userEmailInput: "",
      userPassword: "",
      userPasswordConfirm: "",
      errorText: "",
    })
  
}

  render() {
    return (

      <div className='auth-wrapper'>
      {this.state.authMethod === 'login' ?
          <Login 
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          userEmailInput={this.state.userEmailInput}
          userPassword={this.state.userPassword}
          errorText={this.state.errorText}
          />
        :
          <Signup 
          handleChange={this.handleChange}
          handleSignup={this.handleSignup}
          userEmailInput={this.state.userEmailInput}
          userPassword={this.state.userPassword}
          userPasswordConfirm={this.state.userPasswordConfirm}
          errorText={this.state.errorText}
          />
        }
        <h4 onClick={this.handleAuthMethodChange}>{this.state.authMethodFooterSentence}</h4>
      </div>
    );
  }
}