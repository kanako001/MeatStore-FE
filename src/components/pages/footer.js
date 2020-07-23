import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagramSquare, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function footer(props) {
  return (
    <div className='footer-wrapper'>
      <div className="social-links">
        <div className="facebook">
        <FontAwesomeIcon style={{fontSize: '1.5em', cursor: 'pointer'}} icon={faFacebook} />
        </div>
        <div className="instagram">
          <FontAwesomeIcon style={{fontSize: '1.5em', cursor: 'pointer'}} icon={faInstagramSquare} />
        </div>
        <div className="twitter">
          <FontAwesomeIcon style={{fontSize: '1.5em', cursor: 'pointer'}} icon={faTwitter} />
        </div>
      </div>
    
    </div>
  );
}