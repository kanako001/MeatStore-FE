import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch, faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'


import Auth from './auth/auth'
import Home from './pages/home'
import About from './pages/about'
import Footer from './pages/footer'
import Nomatch from './pages/no-match'
import ProductContainer from './products/product-container';

library.add(fab, faSearch, faBars, faSignOutAlt)

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loginStatus: "NOT_LOGGED_IN",
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this)
  }

  checkLoginStatus() {
    let username = Cookies.get('username')
    if(this.state.loginStatus === "LOGGED_IN" && username) {
      console.log("logged in")
    } else {
      console.log("not logged in")
    }
  }

  handleLogout() {
    Cookies.remove('username')
    this.setState({
      loginStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogin() {
    this.setState({
      loginStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loginStatus: "NOT_LOGGED_IN"
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  authorizedPages() {
    return [
      <Route 
        key="home"
        path="/home"
        component={Home}
      />
    ]
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route 
              exact path="/" 
              component={Auth}
              loginStatus={this.state.loginStatus}
              handleSuccessfulLogin = {this.handleSuccessfulLogin}
              handleUnSuccessfulLogin = {this.handleUnSuccessfulLogin}
              />
              <Route exact path="/product" render={(props) => (<Home handleLogout={this.handleLogout} />)} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
