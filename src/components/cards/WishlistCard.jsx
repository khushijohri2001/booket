import React from 'react'
import { useDispatch } from 'react-redux';
import { SecondaryButton } from '../Buttons';
import { ADD_TO_CART } from '../../redux/cartSlice';
import { REMOVE_FROM_WISHLIST } from '../../redux/wishlistSlice';

const WishlistCard = ({ wishlistItem }) => {
    const {image, name, originalPrice, price } = wishlistItem;
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between w-full h-auto px-2 py-8 gap-2">
          <div className="flex items-center gap-8 font-julius">
            <div>
              <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover shadow-sm"
              />
            </div>
    
            <div className="flex flex-col gap-4">
              <p className="text-lg">{name}</p>
              <div className="text-md flex gap-2">
                <p>₹{price}</p>
                <p className="line-through text-zinc-700">₹{originalPrice}</p>
              </div>
            </div>
          </div>
    
          <div className="flex justify-between w-[18%] items-center">
    
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
                <i class="fa-solid fa-trash hover:text-red-600"></i>
              </button>
            </div>
          </div>
        </div>
      );
}

export default WishlistCard