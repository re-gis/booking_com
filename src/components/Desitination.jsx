import React from "react";
import img1 from "../assets/Rectangle 19305.png";
import img2 from "../assets/Rectangle 19305 (1).png";
import img3 from "../assets/Rectangle 19305 (2).png";
import img4 from "../assets/Rectangle 19305 (3).png";
import img5 from "../assets/Rectangle 19305 (4).png";
import img6 from "../assets/Rectangle 19305 (5).png";

const Destination = () => {
  const destinations = [
    { img: img1, name: "Kigali" },
    { img: img2, name: "Kigali" },
    { img: img3, name: "Kigali" },
    { img: img4, name: "Kigali" },
    { img: img5, name: "Kigali" },
    { img: img6, name: "Kigali" },
  ];

  return (
    <div className="px-[10%] pt-12 pb-20 space-y-10    ">
      <h2 className="text-4xl text-center  font-bold text-[#181E4B] volkhov-bold">
        Choose Destination
      </h2>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {destinations.map((destination, index) => (
          <div key={index} className="flex flex-col text-left gap-4">
            <img src={destination.img} alt={destination.name} />
            <p className="font-bold text-xl">{destination.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
