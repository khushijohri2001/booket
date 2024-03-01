import React, { useEffect } from "react";
import { BestSeller, Carousal, NewCollection, ShopByCategory, Welcome } from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
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
