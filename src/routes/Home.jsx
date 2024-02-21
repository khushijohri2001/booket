import React from "react";
import { Slider } from "../components";
import NewCollection from "../components/NewCollection";
import BestSeller from "../components/BestSeller";
import Welcome from "../components/Welcome";
import ShopByCategory from "../components/ShopByCategory";

const Home = () => {
  return (
    <div className=" bg-[url('./assets/glitter-background.png')] bg-cover bg-fixed">
        <NewCollection />
        <Welcome/>
        <Slider />
        <BestSeller />
        <ShopByCategory/>
      </div>
  );
};

export default Home;
