import React, {Component} from 'react'

import Navigation from '../navigation/navigation'

export default class About extends Component {

  componentDidMount() {
    this.mouunted = true;
  }

  componentWillUnmount() {
    this.mounted = false; 
  }

  render() {
    return (
      <div className='about-wrapper current-page'>
        <h1>About Us</h1>
        <div>Our core values are built on customer satisfaction; 
        and that is the main reason we do not offer delivery options.
        We value customer relationships and that is why we have 
        all customers come in. This idea of customer based relationships
        dates back to Nigeria, 1980. But with our younger generations coming to 
        light with the idea of expansion. The best part about doing business with us;
        Products never run out. We, the McTest faily are grateful 
        for your business and we look forward to a better and brighter future
        with you.</div>  
      </div>
    );
  }
}