import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  componentDidMount () {
    this.mounted = true;

    fetch(`https://meat-store-be-ka.herokuapp.com/product/get`, { method: "GET" })
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

  handleCheckout() {
    fetch(`https://meat-store-be-ka.herokuapp.com/items/get`, {
      method: "GET"
    })
    .then(response => console.log(response))
  }

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
        <div className="checkout-btn-wrapper">
          <FontAwesomeIcon style={{fontSize: '1.5em', cursor: 'pointer', right: 0}} icon={"shopping-cart"} />
        </div>

        <div className="products-wrapper">
          {this.productsLists()}
        </div>
      </div>
    );
  }
}