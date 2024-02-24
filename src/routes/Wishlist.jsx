import React from 'react'
import { useSelector } from 'react-redux'
import { EmptyList, WishlistWithItems } from '../components'

const Wishlist = () => {
  const wishList = useSelector(store => store.wishlist.wishList)
  return (
    <div className="bg-[#eec6c6] py-16 px-8 w-screen ">
    {wishList.length === 0 ? (
      <EmptyList label="Wishlist"/>
    ) : (
      <WishlistWithItems />
    )}
  </div>
  )
}

export default Wishlist