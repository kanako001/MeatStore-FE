import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Receipt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      quantity: "",
      display: "flex"
    }
    this.hanleDoneClick = this.hanleDoneClick.bind(this)
  }

  componentDidMount() {
    this.props.getReceiptContent()
    console.log("yeah")
  }

  hanleDoneClick() {
    fetch("https://meat-store-be-ka.herokuapp.com/items/delete", {method: "DELETE"})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    this.setState({
      display: "none"
    })
  }
  
  render() {

    return (
      <div className='receipt-wrapper'>
          <h1>Receipt Page</h1>
          {
            Object.values(this.props.receiptData).map(value => {
              return (
                <div key={value.id} className="receipt-content" style={{display: this.state.display, alignItems: 'center', justifyContent: 'space-around'}}> 
                  <div className="quantity-wrapper">
                    <h3>Quantity</h3>
                    <p id="quantity">X{value.cart[0]}</p>
                  </div>

                  <div className="item-purchased-wrapper">
                    <h3>Item Purchased</h3>
                    <p id="name">{value.cart[1]}</p>
                  </div>
                  <div className="price-wrapper">
                    <h3>Price</h3>
                    <p id="price">${value.cart[2]}</p>
                  </div>

                </div>
                
            )})
          }
          <div className="done-button">
            <p style={{color: 'red', paddingLeft: "10px", paddingRight: "10px" }}>NOTE: ONCE YOU HIT DONE, YOU WILL NO LONGER HAVE ACCESS TO ITEMS IN YOUR CART(if you had any). <br/>
               VISIT OR CALL OUR STORE TO VERIFY YOUR ORDER.</p>
            <button style={{cursor: 'pointer'}} onClick={this.hanleDoneClick}>
              Done
            </button>
          </div>
          <Link onClick={() => window.location.reload(false)} to="/">Return to homepage</Link>
      </div>
    );
  }
}