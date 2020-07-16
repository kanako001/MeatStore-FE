import React, { useState } from 'react'

import Product from '../products/product'

export default function adminProductsPage(props) {
  const [fileInputState, setFileInputState] = useState('')
  const [previewSource, setPreviewSource] = useState('')
  const [state, setState] = useState({
    productName: "",
    productPrice: "",
    productDescription: ""
  })

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    previewFile(file)
  }

  const handleInputChange = (event) => {
     const { name, value} = event.target
     setState(prevState => ({
       ...prevState,
       [name]: value
     }))
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleSubmitFile = (event) => {
    event.preventDefault()
    if(!previewSource) return;
    uploadImage(previewSource)
  }

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage.data)
    try {
      await fetch('http://127.0.0.1:5000/product/add', {
        method: 'POST',
        body: JSON.stringify({
          data: base64EncodedImage,
          name: state.productName,
          price: state.productPrice,
          description: state.productDescription
        }),
        headers: {"content-type": "application/json"}
      })
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='admin-page-wrapper'>
      <form onSubmit={handleSubmitFile}>
        <input type="text" onChange={handleInputChange} name="productName" value={state.productName} placeholder="name"/>
        <input type="text" onChange={handleInputChange} name="productPrice" value={state.productPrice} placeholder="price"/>
        <input type="text" onChange={handleInputChange} name="productDescription" value={state.productDescription} placeholder="description"/>
        <input type="file" name="image" onChange={handleFileChange} value={fileInputState}/>
        <button type="submit" >Submit</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{height: '70px'}} />
      )}

      <Product />
    </div>
  );
}