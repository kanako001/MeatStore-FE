import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import {faSearch, faBars, faShoppingCart, faPhone, faAt } from '@fortawesome/free-solid-svg-icons'


import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './pages/footer'
import Nomatch from './pages/no-match'
import Navigation from './navigation/navigation'
import Receipt from './helpers/receipt'

library.add(fab, faSearch, faBars, faShoppingCart, faFacebook, faTwitter, faInstagramSquare, faPhone, faAt)

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/receipt" component={Receipt} />
              <Route  component={Nomatch} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
