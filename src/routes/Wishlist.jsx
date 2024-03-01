import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { EmptyList, WishlistWithItems } from '../components'

const Wishlist = () => {
  const wishList = useSelector(store => store.wishlist.wishList)

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="bg-[#eec6c6] py-16 px-8 w-screen max-sm:px-4 max-py-4">
    {wishList.length === 0 ? (
      <EmptyList label="Wishlist"/>
    ) : (
      <WishlistWithItems />
    )}
  </div>
  )
}

export default Wishlist