import React from "react";
import { welcomeBanner } from "../assets";
import { PrimaryButton } from "./Buttons";

const Welcome = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#fde0e0] h-screen py-16 px-28 max-sm:flex-col max-sm:px-4 max-sm:h-auto max-sm:py-28 max-sm:gap-28">
      <div className="w-96 max-sm:w-auto">
        <h1 className=" text-7xl font-greatVibes mb-8 max-sm:text-4xl">
          Welcome to Booklet Store
        </h1>
        <div className=" text-lg font-serif mb-8 max-sm:mb-12">
          <p className="mb-4">
            Thank You for visitng Booklet, a radiant realm where stationery
            dreams, delightful accessories, and chic lifestyle products come to
            life.
          </p>
          <p>
            We are more than just an online store; we are the embodiment of
            creativity, elegance, and the love for all things cute and
            functional.
          </p>
        </div>

        <PrimaryButton path="about" label="Read More"  />
      </div>

      <div>
        <img
          src={welcomeBanner}
          alt="Welcome Banner"
          className="h-[80vh] w-full max-sm:h-auto"
        />
      </div>
    </div>
  );
};

export default Welcome;
