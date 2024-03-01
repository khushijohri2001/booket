import React, { useEffect } from "react";
import { journal1 } from "../assets";
import { SecondaryButton } from "../components/Buttons";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className="flex flex-col gap-8 py-8 px-40 max-sm:px-8">
      <div className="flex justify-end">
      <SecondaryButton path="/products" label="Continue Shopping" center />
      </div>
      <div className="flex flex-col justify-between gap-16">
      <h1 className="font-playfairDisplay font-extrabold text-6xl text-center max-sm:text-4xl">
        About Booklet
      </h1>

      
        <div className="mb-16 flex justify-evenly items-center max-sm:gap-16 max-sm:flex-col">
          <img
            src={journal1}
            alt="Journal1"
            className="w-96 h-96 object-cover shadow-sm max-sm:w-64 max-sm:h-64"
          />
          <p className="w-96 text-lg font-serif text-rose-900 max-sm:w-auto max-sm:text-justify">
            Welcome to Booklet, a luminous world where stationery fantasies,
            fascinating accessories, cute journals and fashionable lifestyle
            products come true. We are more than just an internet store; we
            embody creativity, elegance, and a passion for everything cute and
            functional. If your love of charming stationery inspired the
            creation of our store, we provide you a curated collection of
            stationery, accessories, and lifestyle products that encourage
            creativity and add whimsy to your daily life.
          </p>
        </div>
      </div>
    </div>
  
  );
};

export default About;
