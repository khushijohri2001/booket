import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './cards/ProductCard';

const YouMayAlsoLike = ({currentCategory, id}) => {
    const filteredProductList = useSelector((store) => store.product.filteredProductList);

  return (
    <div>
        <h1 className='text-5xl font-julius font-extrabold'>You May Also Like</h1>
        <div className='flex items-center justify-between flex-wrap'>
            {
                filteredProductList.filter((product, index) => (product.category === currentCategory  && product.id !== id)).filter((product, index) => index < 4).map(product => <ProductCard productInfo={product}/>)
            }
        </div>
    </div>
  )
}

export default YouMayAlsoLike