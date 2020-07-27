import React from 'react'

export default function orderSuccess(props) {
  // console.log(props.currentData.length)
  if(props.currentData.length <= 0) {
    return(
      <div className='oreder-fail' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
        <h3>Can't order 0 item</h3>
      </div>
    )
  }else {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}className='order successful'>
        <h3>order Successful</h3>
      </div>
    );
  }
}