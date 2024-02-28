import React from "react";
import data from "../utils/data";
import CategoryCard from "./cards/CategoryCard";

const ShopByCategory = () => {
  return (
    <div className="h-screen py-16 px-36 bg-[#eec6c6] flex flex-col gap-20 max-sm:px-4 max-sm:h-auto max-sm:gap-10">
      <h1 className="font-playfairDisplay font-extrabold text-6xl text-center max-sm:text-4xl">
        Shop By Category
      </h1>

      <div className="flex justify-between flex-wrap max-sm:gap-16 max-sm:justify-center">
        {data.map(
          (product) =>
            product.type === "By Categories" && (
              <CategoryCard productInfo={product} />
            )
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
