import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './cards/ProductCard';
import { useNavigate } from 'react-router';

const YouMayAlsoLike = ({currentCategory, id}) => {
    const filteredProductList = useSelector((store) => store.product.filteredProductList);
    const navigate = useNavigate();


  return (
    <div>
        <h1 className='text-5xl font-julius font-extrabold'>You May Also Like</h1>
        <div className='flex items-center gap-10 flex-wrap'>
            {
                filteredProductList.filter((product) => (product.category === currentCategory  && product.id !== id)).filter((product, index) => index < 4).map(product => (
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