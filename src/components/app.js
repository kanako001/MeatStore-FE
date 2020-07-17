import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch, faBars } from '@fortawesome/free-solid-svg-icons'


import Auth from './auth/auth'
// import AdminProductsPage from './adminControls/adminProductsPage'
import Home from './pages/home'

library.add(fab, faSearch, faBars)

export default class App extends Component {
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
