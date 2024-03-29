import React from "react";
import CarsCard from "./CarsCard";

const OurCars = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/car1.png",
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 1,
      img: "/src/assets/img/car2.png",
      name: "BMW 3 Series",
      price: "54,890",
    },
    {
      id: 2,
      img: "/src/assets/img/car3.png",
      name: "Mercedes",
      price: "75,890",
    },
    {
      id: 3,
      img: "/src/assets/img/car4.png",
      name: "BMW 7 Series",
      price: "55,789",
    },
    {
      id: 4,
      img: "/src/assets/img/car5.png",
      name: "Mercedes-Benz",
      price: "95,776",
    },
    {
      id: 5,
      img: "/src/assets/img/car6.png",
      name: "Range Rover",
      price: "88,450",
    },
  ];

  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          Our <span className=" text-primary">Cars</span>
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {carsData.map((item) => {
          return (
            <div>
              <CarsCard
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCars;
