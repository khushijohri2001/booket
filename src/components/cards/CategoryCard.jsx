import React from 'react'
import { PrimaryButton } from '../Buttons';

const CategoryCard = ({productInfo}) => {
    const { id, image, name, category } = productInfo;
  return (
    <div className="flex flex-col gap-6 h-auto font-serif p-4 rounded-sm" key={id}>
    
    <img
      src={image}
      alt={name}
      className="w-72 h-72 object-cover shadow-sm"
    />

    <h1 className='font-julius text-4xl text-center'>{category}</h1>

    <PrimaryButton center path="products" label="Shop Now" />

   
  </div>
  )
}

export default CategoryCard