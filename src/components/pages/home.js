import React from 'react'

import ProductContainer from '../products/product-container'
import AdminProductsPage from '../adminControls/adminProductsPage';

export default function homehn(props) {
  return (
    <div className='home-wrapper'>
      <AdminProductsPage />
      <ProductContainer />
    </div>
  );
}