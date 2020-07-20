import React, { useEffect } from 'react'

import ProductContainer from '../products/product-container'
import AdminProductsPage from '../adminControls/adminProductsPage';

export default function home(props) {
  return (
    <div className='home-wrapper'> 
      <AdminProductsPage />
      <ProductContainer handleLogout={props.handleLogout}/>
    </div>
  );
}