import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Featured from "../components/Home/Featured/Featured";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import OurMission from "../components/Home/Mission/OurMission";
import CarNews from "../components/Home/News/CarNews";
import Footer from "../components/Footer";
import img from "../assets/img/hero.jpg";

const Home = () => {
  return (
    <div className="bg-black text-white w-full">
      <Navbar />
      <Hero />



      <Featured />
      <WhyUs />
      <OurMission />
      <CarNews />

      <div className=" w-full md:p-6 mt-6 flex items-center justify-center">
        <img src={img} alt="img" />
      </div>

      <Footer />

    </div>
  );
};

export default Home;
