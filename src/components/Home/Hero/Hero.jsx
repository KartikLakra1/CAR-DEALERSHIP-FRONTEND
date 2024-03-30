import React from "react";
import img from "../../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className=" bg-slate-800 text-white">
      <div className=" h-screen/2 p-5 container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}
        <div className=" w-full md:w-full space-y-5 mt-20">
          <h1 className=" text-4xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect Ride Today
          </h1>
          <p className=" text-lg lg:text-2xl font-medium">
            Over 1000+ New Cars Available Here
          </p>
          <p className=" text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            recusandae ratione ducimus molestias ab neque accusamus eveniet
            cumque corrupti.
          </p>

          <div className="flex gap-8">

            <button className="border-2 border-primary py-1 px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
              See Cars
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;
