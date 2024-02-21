import React from 'react'
import { newCollectionBanner } from '../assets'
import { PrimaryButton } from './Buttons'

const NewCollection = () => {
  return (
    <div className='bg-[#eec6c6] relative'>
      <img src={newCollectionBanner} alt="New Collection Banner" className="h-[80vh] w-screen overflow-hidden object-cover" />
     <div className='absolute bottom-28 right-96 '>
      <PrimaryButton path="products" label="Shop Now" />
     </div>
    </div>
    
  )
}

export default NewCollection