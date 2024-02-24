import React from "react";
import CartCard from "./cards/CartCard";
import { useSelector } from "react-redux";
import { SecondaryButton } from "./Buttons";
import CartDetails from "./CartDetails";

const CartWithItems = () => {
  const { cartList } = useSelector((store) => store.cart);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-16">
        <h1 className="font-playfairDisplay font-extrabold text-6xl">
          My Cart
        </h1>
        <SecondaryButton path="/products" label="Continue Shopping" center />
      </div>

      <div className="flex flex-col border-y border-gray-50 w-full mb-10">
        {cartList.map((cartItem) => (
          <CartCard cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>

      <CartDetails />
    </div>
  );
};

export default CartWithItems;
