import React from "react";
import { welcomeBanner } from "../assets";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./Buttons";

const Welcome = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#fde0e0] h-[100vh] py-16 px-28">
      <div className="w-96">
        <h1 className=" text-7xl font-greatVibes  mb-8">
          Welcome to Booklet Store
        </h1>
        <div className=" text-lg font-serif mb-8">
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
          className="h-[80vh] w-full"
        />
      </div>
    </div>
  );
};

export default Welcome;
