import React, { Component } from 'react'

import Product from './product'
import Navigation from '../navigation/navigation'

export default class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: "",
      price: "",
      description: "",
      image: ""
    }
  }

  componentDidMount () {
    console.log("here")
    fetch(`http://127.0.0.1:5000/product/get`, { method: "GET" })
    .then(response => response.json())
     .then(data => this.setState({ 
       data: data
     }))

    .catch(error => console.log(error))
    console.log("here again")
  }

  productsLists() {
    return this.state.data.map(item => {
      return <Product 
      key={item.id} item={item}
      />
    })
  }

  render() {
    return (
      <div className='product-container-wrapper'>
        <Navigation />
        {this.productsLists()}
      </div>
    );
  }
}