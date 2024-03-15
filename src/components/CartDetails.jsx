import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SecondaryButton } from "./Buttons";

const CartDetails = () => {
  const [showMessage, setShowMessage] = useState(false);

  const {
    totalItemQuantity,
    totalOriginalPrice,
    totalPrice,
    totalDiscountPrice,
  } = useSelector((store) => store.cart);

  return (
    <div className="flex flex-col gap-4 items-end">
      <div className="w-96 p-4 max-sm:w-full max-sm:p-0">
        <p className="text-2xl mb-2 font-extrabold font-playfairDisplay">
          Cart details
        </p>
        <hr color="grey" size="1" />

        <div className="my-4 font-julius">
          <div className="flex items-center my-2">
            <p className="flex-grow font-bold">
              Price ({totalItemQuantity} Items):
            </p>
            <div className="text-md flex gap-2">
              <p>₹{totalPrice}</p>
              <p className="line-through text-zinc-700">
                ₹{totalOriginalPrice}
              </p>
            </div>
          </div>

          <div className="flex items-center my-2">
            <p className="flex-grow font-bold">Discount:</p>
            <p className="text-red-700">- ₹{totalDiscountPrice}</p>
          </div>

          <div className="flex items-center my-2">
            <p className="flex-grow font-bold">Delivery Charges:</p>
            <p>₹70</p>
          </div>
        </div>

        <hr color="grey" size="1" />

        <div className="flex items-center my-4 font-julius">
          <p className="flex-grow font-bold">Total Amount:</p>
          <p>₹{totalPrice + 70}</p>
        </div>

        <hr color="grey" size="1" />

        <p className="my-2 text-rose-900">
          You will save ₹{totalDiscountPrice} on this order
        </p>

        <div
          className="flex my-8"
          onMouseOver={() => setShowMessage(true)}
          onMouseOut={() => setShowMessage(false)}
        >
          <SecondaryButton label="Proceed To Checkout" />
        </div>

        <div
          className={`absolute bg-[#ffe7e7] p-6 shadow-inner rounded transition ease-in-out delay-500 ${
            showMessage ? "opacity-100" : "opacity-0"
          }`}
        >
          <i class="fa-solid fa-sort-up text-[#ffe7e7] rounded absolute -top-2 left-4 text-3xl"></i>
          <p className="font-bold">Feature Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
