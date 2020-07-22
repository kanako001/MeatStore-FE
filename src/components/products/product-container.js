import React, { Component } from 'react'

import Product from './product'
import Loading from '../pages/loading'

export default class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: "",
      price: "",
      description: "",
      image: "",
      cartItems: [],
      isLoading: false
    }
    this.myTestFunction = this.myTestFunction.bind(this)
  }

  componentDidMount () {
    this.mounted = true;

    fetch(`http://127.0.0.1:5000/product/get`, { method: "GET" })
    .then(response => response.json())
     .then(data => {
       if(this.mounted){
         this.setState({
           data: data,
           isLoading: true
          })
        }
      })

    .catch(error => console.log(error))
  }

  componentWillUnmount() {
    this.mounted = false
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
    if(this.state.data.length < 3) {
      return(
        <Loading />
      )
    }

    return (
      <div className='product-container-wrapper'>
        <div className="products-wrapper">
          {this.productsLists()}
        </div>
        <div className="checkout-btn-wrapper">
          <button type="submit">Checkout</button>
        </div>
      </div>
    );
  }
}