import React from "react";
import { mobileNewCollectionBanner, newCollectionBanner } from "../assets";
import { PrimaryButton } from "./Buttons";
import { useSelector } from "react-redux";

const NewCollection = () => {
  const isMobileView = useSelector((store) => store.mediaMatch.isMobileView);

  return (
    <div className="bg-[#eec6c6] relative">
      {isMobileView ?  (
        <img
          src={mobileNewCollectionBanner}
          alt="Mobile New Collection Banner"
          className="object-cover h-[80vh] w-screen overflow-hidden max-sm:h-[62vh]"
        />
      ) : (
        <img
          src={newCollectionBanner}
          alt="New Collection Banner"
          className="h-[80vh] w-screen overflow-hidden object-cover max-lg:h-[54vh] max-xl:h-[42vh]"
        />
      )
    }
      <div className="absolute bottom-28 right-96 max-sm:right-32 max-sm:bottom-4 max-lg:right-24 max-xl:right-52">
        <PrimaryButton path="products" label="Shop Now" />
      </div>
    </div>
  );
};

export default NewCollection;
