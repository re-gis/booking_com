import React from "react";
import img1 from "../assets/tour-guide 1.png";
import img2 from "../assets/travelling 1.png";
import img3 from "../assets/hands 1.png";
import rect from "../assets/Rectangle 157.png";

const categories = [
  {
    img: img1,
    title: "Best Stays",
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    img: img2,
    title: "Best Flights Options",
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    img: img3,
    title: "Car rentals",
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
];

const Category = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 space-y-7 px-[5%] lg:px-[10%]">
      <p className="text-[#DF6951] text-[15px]">CATEGORY</p>
      <h2 className="text-4xl font-bold text-[#181E4B] volkhov-bold">
        We Offer Best Services
      </h2>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-16">
        {categories.map((category, index) => (
          <div key={index} className="relative ">   
            <div className=" cursor-pointer flex flex-col gap-4 p-7 justify-center text-center items-center rounded-2xl shadow-xl bg-white" >
              <img src={category.img} alt={category.title}  className="w-20"/>
              <p className="text-[15px] text-[#1E1D4C] font-bold">
                {category.title}
              </p>
              <p className="text-[12px] text-[#5E6282]">
                {category.description}
              </p>
            </div>
            {index % 2 !== 0 && (
              <div className="bg-primary w-16 h-16 rounded-2xl absolute top-[85%] right-[85%] -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
