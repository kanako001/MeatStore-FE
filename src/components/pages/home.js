import React, {Component} from 'react'

import ProductContainer from '../products/product-container'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render () {
    return (
      <div className='home-wrapper '> 
        <ProductContainer/>
      </div>
    );
  }
}