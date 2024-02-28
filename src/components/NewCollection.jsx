import React from "react";
import { mobileNewCollectionBanner, newCollectionBanner } from "../assets";
import { PrimaryButton } from "./Buttons";
import { useSelector } from "react-redux";

const NewCollection = () => {
  const matches = useSelector((store) => store.mediaMatch.matches);

  return (
    <div className="bg-[#eec6c6] relative">
      {matches ? (
        <img
          src={newCollectionBanner}
          alt="New Collection Banner"
          className="h-[80vh] w-screen overflow-hidden object-cover "
        />
      ) : (
        <img
          src={mobileNewCollectionBanner}
          alt="Mobile New Collection Banner"
          className="object-cover h-[80vh] w-screen overflow-hidden"
        />
      )}
      <div className="absolute bottom-28 right-96 max-sm:right-28 max-sm:bottom-4 ">
        <PrimaryButton path="products" label="Shop Now" />
      </div>
    </div>
  );
};

export default NewCollection;
