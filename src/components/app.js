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

library.add(fab, faSearch, faBars, faSignOutAlt)

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loginStatus: "NOT_LOGGED_IN"
    }
  }

  componentDidMount() {
    let username = Cookies.get('username')
    if(username) {
      console.log("yay")
    }
    else {
      console.log("nah")
    }
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route exact path="/product" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
