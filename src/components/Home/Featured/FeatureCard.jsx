import React from "react";

const FeatureCard = ({ id, img, name, price }) => {
  return (
    <div
      className=" border-2 border-secondary bg-slate-100 text-black rounded-sm mb-2 cursor-pointer hover:scale-90 hover:bg-slate-200 transition duration-200 ease-linear"
      key={id}
    >
      <div className="w-full flex items-center justify-center">
        <img src={img} alt="img" className=" rounded-t-xl w-[60%]" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" font-semibold text-xl text-primary pt-2">{name}</h1>
        <div className=" flex gap-10 pt-2">
          <h2 className=" font-medium text-lg ">Starting at ${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
