import React, { Component } from 'react';

import Auth from './auth/auth'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Auth />
      </div>
    );
  }
}
