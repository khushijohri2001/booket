import React from "react";
import { discountPercent, savedPrice } from "../utils/functions";
import { savedPriceRibbon } from "../assets";

const ProductCard = ({ productInfo }) => {
  const { id, image, name, price, originalPrice } = productInfo;

  return (
    <div className="flex flex-col w-64 h-auto relative  font-serif p-4 rounded-sm hover:bg-white" key={id}>
      <div>
        <img src={savedPriceRibbon} alt="Saved Price Ribbon" className="absolute top-0 -left-3 h-14 w-14" />
        <p className="z-40 absolute top-5 -left-1 text-xs font-semibold text-rose-900"> -₹{savedPrice(originalPrice, price)}</p>
      </div>

      <img
        src={image}
        alt={name}
        className="w-56 h-56 object-cover shadow-sm"
      />

      <p className="pt-3 pb-2 text-sm">{name}</p>

      <div className="text-sm flex items-center gap-2">
        <p className="">
          ₹{price}
        </p>
          <p className=" line-through text-zinc-700">₹{originalPrice}</p>
      </div>

      <div>
      <p className="py-2 text-rose-900 font-semibold text-sm">
            {discountPercent(originalPrice, price)}%
          </p>
      </div>
    </div>
  );
};

export default ProductCard;
