import React from "react";
import { useSelector } from "react-redux";
import { CartWithItems, EmptyCart } from "../components";

const Cart = () => {
  const cartList = useSelector((store) => store.cart.cartList);

  return (
    <div className="bg-[#eec6c6] py-16 px-8 w-screen ">
      {cartList.length === 0 ? (
        <EmptyCart/>
      ) : (
        <CartWithItems />
      )}
    </div>
  );
};

export default Cart;
