import React, { Component } from 'react'

export default class Product extends Component {
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
    // .then(data => this.setState({ 
    //   data: data,
    //   name: data[0].product_name
    // }))
    .then(data => {
      this.setState({
        data: data
      })
      data.forEach(item => {
        return(
          <h2>item.product_name</h2>
        )
      })
    })
    .catch(error => console.log(error))
    console.log("here again")
  }

  render() {
    return (
      <div className='product-wrapper'>
      </div>
    );
  }
}