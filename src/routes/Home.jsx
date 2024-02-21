import React from "react";
import { Slider } from "../components";
import NewCollection from "../components/NewCollection";
import { glitterBg } from "../assets";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div className=" bg-[url('./assets/glitter-background.png')] bg-cover bg-fixed">
      {/* <img src={glitterBg} alt="Glitter Background" className="top-0" /> */}
      <div
      //  className="absolute top-[155px]"
      >
        <NewCollection />
        <Slider />
        <BestSeller />
        {/* <ByCategories /> */}
      </div>
    </div>
  );
};

export default Home;
