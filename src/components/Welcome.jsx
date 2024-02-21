import React from "react";
import { welcomeBanner } from "../assets";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#fde0e0] h-[100vh] py-16 px-28">
      <div className="w-96">
        <h1 className=" text-7xl font-greatVibes  mb-8">
          Welcome to Booklet Store
        </h1>
        <div className=" text-lg font-serif">
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
        <Link to="about">
          <button className="flex items-center gap-3 my-8 px-4 py-2 text-lg font-semibold border-2 border-black cursor-pointer bg-transparent hover:bg-white ">
            Read More <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
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
