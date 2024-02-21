import React from 'react'
import { newCollectionBanner } from '../assets'
import { Link } from 'react-router-dom'

const NewCollection = () => {
  return (
    <div className='bg-[#eec6c6] relative'>
      <img src={newCollectionBanner} alt="New Collection Banner" className="h-[80vh] w-screen overflow-hidden object-cover" />
      <Link to="products">
          <button className="absolute bottom-16 right-96 flex items-center gap-3 my-16 mx-auto px-4 py-2 text-lg font-semibold border-2 border-black cursor-pointer hover:bg-white bg-transparent">
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
    </div>
    
  )
}

export default NewCollection