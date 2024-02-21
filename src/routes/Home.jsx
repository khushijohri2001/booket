import React from "react";
import { Slider } from "../components";
import NewCollection from "../components/NewCollection";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div className=" bg-[url('./assets/glitter-background.png')] bg-cover bg-fixed">
        <NewCollection />
        <Slider />
        <BestSeller />
        {/* <ByCategories /> */}
      </div>
  );
};

export default Home;
