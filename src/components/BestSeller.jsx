import React from "react";
import data from "../utils/data";
import { PrimaryButton } from "./Buttons";
import BestSellerCard from "./cards/BestSellerCard";

const BestSeller = () => {
  return (
    <div className="flex flex-col justify-between h-screen py-16 px-28 mb-24 max-sm:px-4 max-sm:gap-8 max-sm:h-auto ">
      <h1 className="font-playfairDisplay font-extrabold text-6xl text-center">
        Bestsellers
      </h1>

      <div className="flex justify-between flex-wrap max-sm:items-center max-sm:justify-center max-sm:gap-8">
        {data.map(
          (product) =>
            product.type === "Best Seller" && (
              <div key={product.id}>
                <BestSellerCard productInfo={product} />
              </div>
            )
        )}
      </div>

      <PrimaryButton path="products" label="Shop Now" center />
    </div>
  );
};

export default BestSeller;
