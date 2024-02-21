import React from "react";
import ProductCard from "./cards/ProductCard";
import data from "../utils/data";
import { PrimaryButton } from "./Buttons";

const BestSeller = () => {
  return (
    <div className="flex flex-col justify-between h-screen py-16 px-28 mb-24">
      <h1 className="font-playfairDisplay font-extrabold text-6xl text-center">
        Bestsellers
      </h1>

      <div className="flex justify-between flex-wrap">
        {data.map(
          (product) =>
            product.type === "Best Seller" && (
              <ProductCard productInfo={product} />
            )
        )}
      </div>

      <PrimaryButton path="products" label="Shop Now" center />
    </div>
  );
};

export default BestSeller;
