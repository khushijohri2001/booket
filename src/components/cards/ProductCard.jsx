import React from "react";
import { discountPercent, savedPrice } from "../../utils/functions";
import { savedPriceRibbon } from "../../assets";
import {
  AddToCartButton,
  RemoveFromCartButton,
  RemoveFromWishlistButton,
  WishlistButton,
} from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../redux/cartSlice";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../../redux/wishlistSlice";

const ProductCard = ({ productInfo }) => {
  const { id, image, name, price, originalPrice, rating } = productInfo;
  const dispatch = useDispatch();
  const cartList = useSelector((store) => store.cart.cartList);
  const wishList = useSelector((store) => store.wishlist.wishList);

  console.log(wishList);

  return (
    <div
      className="flex flex-col w-64 h-auto relative font-serif p-4 rounded-sm cursor-pointer hover:bg-[#fef4f2]"
      key={id}
    >
      <div>
        <img
          src={savedPriceRibbon}
          alt="Saved Price Ribbon"
          className="absolute top-0 -left-3 h-14 w-14"
        />
        <p className="z-40 absolute top-5 -left-1 text-xs font-semibold text-rose-900">
          {" "}
          -₹{savedPrice(originalPrice, price)}
        </p>
      </div>

      <img
        src={image}
        alt={name}
        className="w-56 h-56 object-cover shadow-sm"
      />

      <div className="flex justify-between gap-4 pt-3 pb-2 ">
        <div>
          <p className="text-sm">{name}</p>
        </div>
        <div>
          {wishList.some((wishlistItem) => wishlistItem.id === id) ? (
            <RemoveFromWishlistButton
              onClick={() => dispatch(REMOVE_FROM_WISHLIST(productInfo))}
            />
          ) : (
            <WishlistButton
              onClick={() => dispatch(ADD_TO_WISHLIST(productInfo))}
            />
           )} 
        </div>
      </div>

      <div className="flex gap-1 items-center justify-start pb-2">
       {[...Array(rating)].map((star, index) => <i key={index} className="fa-solid fa-star text-xs text-rose-900"></i>)}
       
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-2">
          <p className="">₹{price}</p>
          <p className=" line-through text-zinc-700">₹{originalPrice}</p>
        </div>
      </div>

      <div>
        <p className="py-2 text-rose-900 font-semibold text-sm">
          {discountPercent(originalPrice, price)}%
        </p>
      </div>

      <div>
        {cartList.some((cartItem) => cartItem.id === id) ? (
          <RemoveFromCartButton
            onClick={() => dispatch(REMOVE_FROM_CART(productInfo))}
          />
        ) : (
          <AddToCartButton onClick={() => dispatch(ADD_TO_CART(productInfo))} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
