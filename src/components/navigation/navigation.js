import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Auth from '../auth/auth'


export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
    this.testClick = this.testClick.bind(this)
  }


  testClick () {
    console.log("test")
  }

  // handleLogout()

  render() {
    return (
      <div className='navigation-wrapper'>
        <div className="auxiliary-menu">
          <FontAwesomeIcon icon="bars" />
        </div>
        
        <div className="searchbar-wrapper">
          <input type="search" name="search" id="search-bar"/>
        </div>

        <div className="search-btn-wrapper">
          <FontAwesomeIcon icon="search" />
        </div>

        <div className="log-out-btn-wrapper">
          <FontAwesomeIcon onClick={this.handleLogOut} icon="sign-out-alt" />
        </div>

      </div>
    );
  }
}