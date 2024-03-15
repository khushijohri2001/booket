import React from "react";
import { PrimaryButton } from "../Buttons";

const CategoryCard = ({ productInfo, key }) => {
  const { image, name, category } = productInfo;
  return (
    <div className="flex flex-col gap-6 h-auto font-serif p-4 rounded-sm max-sm:gap-3"
    >
      <img
        src={image}
        alt={name}
        className="w-72 h-72 object-cover shadow-sm max-sm:w-64 max-sm:h-64"
      />

      <h1 className="font-julius text-4xl text-center max-sm:text-2xl">{category}</h1>

      <PrimaryButton center path="products" label="Shop Now" />
    </div>
  );
};

export default CategoryCard;
