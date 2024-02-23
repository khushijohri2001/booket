import React from 'react'
import ProductCard from './ProductCard'

const BestSellerCard = ({productInfo}) => {
  return (
    <div className='hover:bg-white'>
        <ProductCard productInfo={productInfo} />
    </div>
  )
}

export default BestSellerCard