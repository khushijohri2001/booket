import React from "react";
import { BestSeller, Carousal, NewCollection, ShopByCategory, Welcome } from "../components";

const Home = () => {
  return (
    <div className=" bg-[url('./assets/glitter-background.png')] bg-cover bg-fixed">
        <NewCollection />
        <Welcome/>
        <Carousal />
        <BestSeller />
        <ShopByCategory/>
      </div>
  );
};

export default Home;
