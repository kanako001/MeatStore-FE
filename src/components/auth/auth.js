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
      usernameInput: "",
      userPassword: "",
      userPasswordConfirm: "",
      errorText: "",
      loginStatus: this.props.loginStatus
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleAuthMethodChange = this.handleAuthMethodChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value,
      errorText: "none"
    })
  }

  handleSignup(event) {
    event.preventDefault()

    if (this.state.usernameInput === "" || this.state.userPassword === "" || this.state.userPasswordConfirm === "") {
        this.setState({ errorText: "blank field" })
    }
    else if (this.state.userPassword !== this.state.userPasswordConfirm) {
        this.setState({ errorText: "mismatched passwords" })
    }
    else {
        fetch("https://meat-store-be-ka.herokuapp.com//user/create", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.usernameInput,
                password: this.state.userPassword
            })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
            if (data === "username exists already") {
                this.setState({ errorText: "username exists already" })
            }
            else if (data === "User created successfully"){
                this.setState({ 
                  errorText: "none",
                  usernameInput: "",
                  userPassword: "",
                  userPasswordConfirm: "",
                  [this.props.loginStatus]: "LOGGED_IN"
                })
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

    if (this.state.usernameInput === "" || this.state.userPassword === "") {
        this.setState({ errorText: "blank field" })
    }
    else {
        fetch("https://meat-store-be-ka.herokuapp.com//user/verification", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.usernameInput,
                password: this.state.userPassword
            })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
            if (data === "User not verified") {
                this.setState({ 
                  errorText: "not verified", 
                  usernameInput: "",
                  userPassword: ""
                })
                this.props.history.push('/')
            }
             else if(data === "User verified") {
                 Cookies.set("username", this.state.usernameInput)
                 this.setState({
                  usernameInput: "",
                  userPassword: "",
                  loginStatus: "LOGGED_IN"
                 })
                 this.props.history.push("/product")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   (Cookies.get("username"))
             }
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
      usernameInput: "",
      userPassword: "",
      userPasswordConfirm: "",
      errorText: "",
    })
    :
    this.setState({
      authMethod: 'login',
      authMethodFooterSentence: "Don't have an Account? Sign up",
      usernameInput: "",
      userPassword: "",
      userPasswordConfirm: "",
      errorText: "",
    })
  
  }

// componentDidMount() {
//   if(this.state.loginStatus === "NOT_LOGGED_IN") {
//     this.props.history.push('/')
//   }
//   else {
//     this.props.history.push("/product")
//   }
// }

//  componentDidMount() {
//   let username = Cookies.get('username')
//   if(username) {
//     this.props.history.push('/product')
//   }
//   else {
//     this.props.history.push('/')
//   }
//  }
  render() {
    return (

      <div className='auth-wrapper'>
      {this.state.authMethod === 'login' ?
          <Login 
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          usernameInput={this.state.usernameInput}
          userPassword={this.state.userPassword}
          errorText={this.state.errorText}
          handleAuthMethodChange={this.handleAuthMethodChange}
          authMethodFooterSentence={this.state.authMethodFooterSentence}
          />
        :
          <Signup 
          handleChange={this.handleChange}
          handleSignup={this.handleSignup}
          usernameInput={this.state.usernameInput}
          userPassword={this.state.userPassword}
          userPasswordConfirm={this.state.userPasswordConfirm}
          errorText={this.state.errorText}
          handleAuthMethodChange={this.handleAuthMethodChange}
          authMethodFooterSentence={this.state.authMethodFooterSentence}
          />
      }
      </div>
    );
  }
}