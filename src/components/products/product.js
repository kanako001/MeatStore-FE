import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      cart: [],
      itemMessage: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleChange(event) {
    [event.target.name] = event.target.value;
  }

  handleIncrease() {
    let currentVal = this.state.amount
    currentVal = currentVal + 1
    this.setState({
      amount: currentVal,
      itemMessage: ""
    }) 
  }

  handleDecrease() {
    let currentVal = this.state.amount
    currentVal = currentVal - 1
    if(this.state.amount <= 0) {
      this.setState({
        amount: 0,
        itemMessage: ""
      })
    }
    else {
      this.setState({
        amount: currentVal,
        itemMessage: ""
      })
    }

  }
  
  handleAddToCart(){
    if(Number(this.state.amount) <= 0) {
      this.setState({
        itemMessage: "Can't add 0 item to cart!"
      })
    }else {

      const { id, product_name, product_price, product_description, data } = this.props.item
      this.state.cart.push(this.state.amount, product_name, product_price, id)
      this.setState({
              itemMessage: "Item Added Successfully"
            })
      fetch(`http://127.0.0.1:5000/item/add`, {
        method: 'POST',
        body: JSON.stringify( 
        {cart: this.state.cart}
        ),
        headers: {"content-type": "application/json"}
      })
      .then(response => response.json())
      .then(data => {
        if(data === "Item added successfully") {
          this.setState({
            itemMessage: "Item Added Successfully"
          })
        }
      })
      .catch(error => console.log(error))
    }
  }
 
  render() {
    const { id, product_name, product_price, product_description, data } = this.props.item

    return (
      <div className='product-wrapper'>
        <div className="img-wrapper">
          <img src={data} alt="image" style={{width: '100%'}}/>
        </div>
        <div className="product-name-wrapper">
          <h3>{product_name}</h3>
        </div>
        <div className="product-price-wrapper">
          <h1>${product_price}.99</h1> 
        </div>
        <div className="product-description-wrapper">
          <h4>{product_description}</h4>
        </div>

        <div className="cart-buttons">
          <p>{this.state.itemMessage}</p>
          <div className="cart-functionalities">
            <button onClick={this.handleDecrease}>-</button>
            <input onChange={this.handleChange} value={this.state.amount} min="1" />
            <button onClick={this.handleIncrease}>+</button>
          </div>
          <div className="add-to-cart-btn">
            <button type="submit" onClick={this.handleAddToCart}>Add to Cart</button>
          </div>
        </div>

      </div>
    );
  }
}