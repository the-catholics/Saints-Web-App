import React from "react";
import Navbar from "../../components/Navbar";
import HeaderMain from "../../components/HeaderMain";
import SaintsCarousel from "../../components/SaintsCarousel";
import { MakeALot } from "../../components/MakeALot";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeaderMain />
      <SaintsCarousel />
      <MakeALot />
    </>
  );
};

export default Home;