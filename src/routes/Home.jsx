import React from "react";
import { Slider } from "../components";
import NewCollection from "../components/NewCollection";
import BestSeller from "../components/BestSeller";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div className=" bg-[url('./assets/glitter-background.png')] bg-cover bg-fixed">
        <NewCollection />
        <Welcome/>
        <Slider />
        <BestSeller />
        {/* <ByCategories /> */}
      </div>
  );
};

export default Home;
