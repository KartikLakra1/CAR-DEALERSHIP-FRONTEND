import React from "react";

const CarNewsCard = ({ id, img, desc }) => {
  return (
    <div
      className=" border-4 border-secondary  cursor-pointer hover:scale-95 duration-700 rounded-xl"
      key={id}
    >
      <img src={img} alt="img" />
      <h3 className=" font-semibold text-lg p-2">{desc}</h3>
    </div>
  );
};

export default CarNewsCard;
