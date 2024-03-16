import React from 'react'
import { useDispatch } from 'react-redux';
import { SecondaryButton } from '../Buttons';
import { ADD_TO_CART } from '../../redux/cartSlice';
import { REMOVE_FROM_WISHLIST } from '../../redux/wishlistSlice';

const WishlistCard = ({ wishlistItem }) => {
    const {image, name, originalPrice, price } = wishlistItem;
    
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between w-full h-auto px-2 py-8 gap-2 max-sm:flex-col">
          <div className="flex items-center gap-8 font-julius max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <div>
              <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover shadow-sm"
              />
            </div>
    
            <div className="flex flex-col gap-4 max-lg:w-1/2">
              <p className="text-lg max-sm:text-base">{name}</p>
              <div className="text-md flex gap-2">
                <p>₹{price}</p>
                <p className="line-through text-zinc-700">₹{originalPrice}</p>
              </div>
            </div>
          </div>
    
          <div className="flex justify-between w-[18%] items-center max-sm:justify-normal max-sm:w-full max-sm:items-start max-sm:gap-4 max-lg:gap-10 max-lg:w-56">
  
              <SecondaryButton
              label="Move To Cart"
              onClick={() => {
                dispatch(ADD_TO_CART(wishlistItem));
                dispatch(REMOVE_FROM_WISHLIST(wishlistItem));
              }}
            />
    
            <div>
              <button 
              onClick={() => dispatch(REMOVE_FROM_WISHLIST(wishlistItem))}
              >
                <i className="fa-solid fa-trash hover:text-red-600"></i>
              </button>
            </div>
          </div>
        </div>
      );
}

export default WishlistCard