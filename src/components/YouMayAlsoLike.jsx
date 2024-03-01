import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './cards/ProductCard';
import { useNavigate } from 'react-router';

const YouMayAlsoLike = ({currentCategory, id}) => {
    const allProductList = useSelector((store) => store.product.allProductList);
    const navigate = useNavigate();



  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-julius font-extrabold max-sm:text-3xl max-sm:text-center'>You May Also Like</h1>
        <div className='flex items-center gap-10 flex-wrap max-sm:justify-center'>
            {
                allProductList.filter((product) => (product.category === currentCategory) && (product.id !== id)).filter((product, index) => index < 4).map(product => (
                  <div onClick={() => navigate('/products/'+product.id)}>
                    <ProductCard productInfo={product}/>
                  </div>
                ))
            }
        </div>
    </div>
  )
}

export default YouMayAlsoLike