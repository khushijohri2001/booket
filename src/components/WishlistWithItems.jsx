import React from 'react'
import { useSelector } from 'react-redux';
import { SecondaryButton } from './Buttons';
import WishlistCard from './cards/WishlistCard';

const WishlistWithItems = () => {
    const { wishList } = useSelector((store) => store.wishlist);

    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-16">
          <h1 className="font-playfairDisplay font-extrabold text-6xl">
            My Wishlist
          </h1>
          <SecondaryButton path="/products" label="Continue Shopping" center />
        </div>
  
        <div className="flex flex-col border-y border-gray-50 w-full mb-10">
          {wishList.map((wishlistItem) => (
            <WishlistCard wishlistItem={wishlistItem} key={wishlistItem.id} />
          ))}
        </div>
  
      </div>
    );
}

export default WishlistWithItems