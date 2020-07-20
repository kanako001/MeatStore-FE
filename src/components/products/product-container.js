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
      image: "",
      cartItems: []
    }
    this.myTestFunction = this.myTestFunction.bind(this)
  }

  componentDidMount () {
    fetch(`http://127.0.0.1:5000/product/get`, { method: "GET" })
    .then(response => response.json())
     .then(data => this.setState({ 
       data: data
     }))

    .catch(error => console.log(error))
  }

  productsLists() {
    return this.state.data.map(item => {
      return <Product 
      key={item.id} item={item}
      />
    })
  }

  // handleAddToCart() {
  //   this.state.cartItems.push(
  //     <Product />
  //   )
  // }

  myTestFunction() {
    this.props.handleLogout()
  }

  render() {
    return (
      <div className='product-container-wrapper'>
        <Navigation handleLogout={this.myTestFunction}/>
        {this.productsLists()}
      </div>
    );
  }
}