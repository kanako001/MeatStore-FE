import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    const { id, product_name, product_price, product_description, data } = this.props.item
    return (
      <div className='product-wrapper'>

        
        <h1>{product_name}</h1>
        <h1>{product_price}</h1>
        <h1>{product_description}</h1>
        <img src={data} alt="image"/>
      </div>
    );
  }
}