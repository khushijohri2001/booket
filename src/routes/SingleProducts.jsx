import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/cartSlice";
import {
  AddToCartButton,
  RemoveFromCartButton,
  RemoveFromWishlistButton,
  SecondaryButton,
  WishlistButton,
} from "../components/Buttons";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../redux/wishlistSlice";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { getProductInfoById } from "../utils/functions";
import data from "../utils/data";

const SingleProducts = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const productInfo = getProductInfoById(productId, data);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {
    id,
    image,
    name,
    price,
    originalPrice,
    rating,
    category,
    description,
    availablity
  } = productInfo[0];

  const cartList = useSelector((store) => store.cart.cartList);
  const wishList = useSelector((store) => store.wishlist.wishList);

  return (
    <div className="py-16 px-36 bg-[#eec6c6] w-full max-sm:px-4 ">
      <div className="flex justify-evenly gap-1 max-sm:flex-col max-sm:items-center max-sm:gap-8">
        <div className="w-full max-sm:w-auto">
          <img
            src={image}
            alt={name}
            className="border-2 border-white h-[34rem] w-[34rem] object-cover max-sm:w-64 max-sm:h-64"
          />
        </div>

        <div className="w-3/4 flex flex-col gap-6 font-sans">
          <div>
            <p className="text-sm font-extralight">{category}</p>
            <h1 className="text-3xl font-julius font-extrabold">{name}</h1>
            <div className="flex gap-1 items-center justify-start pt-3">
              {[...Array(rating)].map((star, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star text-xs text-rose-900"
                ></i>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xl font-julius font-extrabold flex items-center gap-2">
              <p>₹{price}</p>
              <p className="line-through text-zinc-700">₹{originalPrice}</p>
            </div>
            <p className="text-sm font-extralight">Tax Included</p>
          </div>

          <div className="flex flex-col gap-2">
            {
              availablity === "In Stock" ? (
                <>
                <div>
              {cartList.some((cartItem) => cartItem.id === productId) ? (
                <RemoveFromCartButton
                  large
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(REMOVE_FROM_CART(productInfo[0]));
                  }}
                />
              ) : (
                <AddToCartButton
                  large
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(ADD_TO_CART(productInfo[0]));
                  }}
                />
              )}
            </div>

            <div>
              <SecondaryButton label="Buy Now" large border />
            </div>
                </>
              ) 
              :

                <SecondaryButton label="Out of stock" large border disable />
         
                
            }
          </div>

          <div className="mt-2">
            <p>{description}</p>
          </div>

          <div>
            <RWebShare
              data={{
                text: "Shop Now on Booklet",
                url: "http://localhost:3000/products/" + id,
                title: name,
              }}
            >
              <div className="flex gap-3 items-center cursor-pointer">
                <i class="fa-solid fa-share-nodes text-rose-900"></i> Share
              </div>
            </RWebShare>

            <div className="flex gap-3 items-center">
              {wishList.some((wishlistItem) => wishlistItem.id === id) ? (
                <>
                  <RemoveFromWishlistButton
                    dark
                    onClick={() =>
                      dispatch(REMOVE_FROM_WISHLIST(productInfo[0]))
                    }
                  />
                  <Link to="/wishlist">
                    <p className="cursor-pointer underline">Browse Wishlist</p>{" "}
                  </Link>
                </>
              ) : (
                <>
                  <WishlistButton
                    dark
                    onClick={() => 
                      dispatch(ADD_TO_WISHLIST(productInfo[0]))
                    }
                  />
                  <p>Add to Wishlist</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {category && (
        <div className="mt-40">
          <YouMayAlsoLike currentCategory={category} id={id} />
        </div>
      )}
    </div>
  );
};

export default SingleProducts;
