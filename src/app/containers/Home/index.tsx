import React from "react";
import Navbar from "../../components/Navbar";
import HeaderMain from "../../components/HeaderMain";
import SaintsCarousel from "../../components/SaintsCarousel";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeaderMain />
      <SaintsCarousel />
    </>
  );
};

export default Home;