import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import logo from "../../../static/assets/images/logo/newDarkLogo.png"

import Auth from '../auth/auth'


export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  handleClick() {
    <Redirect to="/" />
  }

  

  render() {
    return (
      <div className='navigation-wrapper'>
        <NavLink to="/" className="nav-link-wrapper">
          <img src={logo} alt="image" style={{ width: '200px', height: '200px'}}/>
        </NavLink>

        <div className="links-wrapper">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/about" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="icon-wrapper">
          {/* <div className="auxiliary-menu">
            <FontAwesomeIcon icon="bars"  style={{display: 'none'}}/>
          </div> */}
          
          <div className="searchbar-wrapper">
            <input type="search" name="search" id="search-bar" placeholder="Type to search" />
          </div>

          <div className="search-btn-wrapper">
            <FontAwesomeIcon style={{fontSize: '2em', cursor: 'pointer'}} icon="search" />
          </div>
        </div>

      </div>
    );
  }
}