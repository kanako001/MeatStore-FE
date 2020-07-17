import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

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

      </div>
    );
  }
}