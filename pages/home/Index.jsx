import React from "react";
import Carousel from "../../components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";
import BestFood from "@/components/BestFood";


const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <BestFood/>
      <Reservation/>
      <Customers/>
    </React.Fragment>
  );
};

export default Index;