import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Product from './product'
import Loading from '../pages/loading'
import Receipt from "../helpers/receipt"

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
      receiptData: [],
      isLoading: false,
      currentPage: "page-container"
    }
    this.myTestFunction = this.myTestFunction.bind(this)
    this.getReceiptContent = this.getReceiptContent.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
    // this.productsLists = this.productsLists.bind(this)
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

  getReceiptContent(){
    fetch('http://127.0.0.1:5000/items/get', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        receiptData: data
      })
      // console.log(data[0].cart[1])
    })
    .catch(error => console.log(error))
  }

  handleCheckout() {
    this.setState({
      currentPage: "receipt"
    })
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

    if(this.state.currentPage === "page-container") {
      return (
        <div className='product-container-wrapper'>
          <div className="checkout-btn-wrapper">
            <FontAwesomeIcon onClick={this.handleCheckout} style={{fontSize: '1.5em', cursor: 'pointer', right: 0}} icon={"shopping-cart"} />
          </div>
  
          <div className="products-wrapper">
            {this.productsLists()}
          </div>
        </div>
      );
    }
    else if (this.state.currentPage === "receipt") {
      return(
        <Receipt 
        receiptData={this.state.receiptData}
        getReceiptContent={this.getReceiptContent}
        />
      )
    }
  }
}