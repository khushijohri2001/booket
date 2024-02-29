import React from "react";
import { useDispatch } from "react-redux";
import { DECREMENT, INCREMENT, REMOVE_FROM_CART } from "../../redux/cartSlice";
import { ADD_TO_WISHLIST } from "../../redux/wishlistSlice";
import { SecondaryButton } from "../Buttons";

const CartCard = ({ cartItem }) => {
  const { id, quantity, image, name, originalPrice, price } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between w-full h-auto px-2 py-8 gap-2 max-sm:flex-col">
      <div className="flex items-center gap-8 font-julius flex-1 max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <div>
          <img
            src={image}
            alt={name}
            className="w-24 h-24 object-cover shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg max-sm:text-base">{name}</p>
          <div className="text-md flex gap-2">
            <p>₹{price}</p>
            <p className="line-through text-zinc-700">₹{originalPrice}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-16 max-sm:flex-col max-sm:w-full max-sm:items-start max-sm:gap-2">
        <div className="flex items-center border border-zinc-900/20 px-4 py-2 font-julius">
          <button
            className="text-xl hover:font-bold"
            onClick={() => dispatch(DECREMENT(id))}
          >
            -
          </button>
          <p className="bg-transparent text-black text-center w-16">
            {quantity}
          </p>
          <button
            className="text-xl hover:font-bold"
            onClick={() => dispatch(INCREMENT(id))}
          >
            +
          </button>
        </div>

        <div className="flex justify-between gap-16 w-full items-center max-sm:gap-4">

        <SecondaryButton
          label="Add To Wishlist"
          onClick={() => {
            dispatch(ADD_TO_WISHLIST(cartItem));
            dispatch(REMOVE_FROM_CART(cartItem));
          }}
        />

        <div>
          <button onClick={() => dispatch(REMOVE_FROM_CART(cartItem))}>
            <i class="fa-solid fa-trash hover:text-red-600"></i>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
