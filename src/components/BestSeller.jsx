import React from "react";
import ProductCard from "./ProductCard";
import data from "../utils/data";
import { Link } from "react-router-dom";

const BestSeller = () => {
  return (
    <div className="h-[86vh] py-16 px-28">
      <h1 className="font-playfairDisplay font-extrabold text-6xl text-center mb-16">
        Bestsellers
      </h1>

      <div className="flex justify-between">
        {data.map(
          (product) =>
            product.type === "Best Seller" && (
              <ProductCard productInfo={product} />
            )
        )}
      </div>

      <Link to="products">
        <button className="flex items-center gap-3 mt-4 mx-auto px-4 py-2 text-lg font-semibold border-2 border-black cursor-pointer hover:bg-white bg-transparent">
          Shop Now <i class="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default BestSeller;
