import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch, faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


import Auth from './auth/auth'
import Home from './pages/home'

library.add(fab, faSearch, faBars, faSignOutAlt)

export default class App extends Component {

  constructor(props) {
    super(props)
        
    this.state = {
      loginStatus: "NOT_LOGGED_IN"
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
