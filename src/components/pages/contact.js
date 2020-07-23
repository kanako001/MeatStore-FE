import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import firstImage from '../../../static/assets/images/itemImages/live/sheep2.jpg'
import secondImage from '../../../static/assets/images/itemImages/live/goat.jpg'

export default class Contact extends Component {

  componentDidMount() {
    this.mouunted = true;
  }

  componentWillUnmount() {
    this.mounted = false; 
  }

  render(){
    return (
      <div className='contact-wrapper current-page'>
        <h1>Contact Us</h1>
  
        <div className="contact-content-wrapper">
          <div className="phone-wrapper">
            <FontAwesomeIcon icon={"phone"} /> (123) 456-7898
          </div>
          <div className="email-wrapper">
            <FontAwesomeIcon icon={"at"} /> anakoacres@gmail.com
          </div>
        </div>

        <div className="image-wrapper">
          <div className="first-image">
            <img src={firstImage} style={{width: '350px', borderRadius: '5px'}} alt="first image"/>
          </div>
          <div className="second-image">
            <img src={secondImage}  style={{width: '350px', height: '350px', borderRadius: '5px' }} alt="first image"/>
          </div>
        </div>
      </div>

    );
  }
}
