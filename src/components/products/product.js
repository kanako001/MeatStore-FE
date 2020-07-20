import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      cart: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleIncrease = this.handleIncrease.bind(this)
  }

  handleChange(event) {
    [event.target.name] = event.target.value
  }

  handleIncrease() {
    this.setState({
      amount: this.state.amount + 1
    }) 
  }

  handleDecrease() {
    this.setState({
      amount: this.state.amount - 1
    }) 
  }

  addToCart() {
    for(let i = 0; i < this.state.amount; i++) {
      cart.push(this.props.item.product_name)
    }
  }

  render() {
    const { id, product_name, product_price, product_description, data } = this.props.item
    return (
      <div className='product-wrapper'>

        <h1>{product_name}</h1>
        <h1>{product_price}</h1>
        <h1>{product_description}</h1>
        <img src={data} alt="image" style={{width: '80px'}}/>
        <input onChange={this.handleChange} type="number" name="" min="1" />
        <button type="submit" onClick={this.handleClick}>Add to Cart</button>
      </div>
    );
  }
}