import React, {Component} from 'react'

import ProductContainer from '../products/product-container'

export default class Home extends Component {
  render () {
    return (
      <div className='home-wrapper '> 
        <ProductContainer/>
      </div>
    );
  }
}