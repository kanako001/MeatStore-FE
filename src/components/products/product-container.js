import React, { Component } from 'react'

import Product from './product'

export default class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className=''>
        <Product />
      </div>
    );
  }
}