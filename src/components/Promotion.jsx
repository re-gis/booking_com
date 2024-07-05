import React from "react";
import CustomButton from "./CustomButton";
import img1 from "../assets/Rectangle 19295.png";
import img2 from "../assets/Rectangle 19296 (1).png";
import img3 from "../assets/Rectangle 19298.png";
import img4 from "../assets/Rectangle 19297.png";
import img5 from "../assets/Illustration (1).png";

const Promotion = () => {
  const promotions = [
    { img: img1, price: "$700" },
    { img: img2, price: "$700" },
    { img: img3, price: "$700" },
    { img: img4, price: "$700" },
  ];

  return (
    <div className="px-[7%] py-20 relative">
      <div className="relative hidden lg:block">
        <div className="absolute right-0 top-0 -z-10 w-[35%] ">
          <img src={img5} alt="" className="w-full" />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-[#DF6951] text-[15px]">Promotion</p>
        <h2 className="text-5xl font-bold text-[#181E4B] volkhov-bold">
          We Provide You Best <br /> Sightseeing Tours
        </h2>
        <p className="text-sm lg:w-[60%]">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi
          corrupti  et fugiat nulla qui soluta recusandae in maxime quasi
          aut ducimus  illum aut optio quibusdam!
        </p>
        <button className="bg-primary text-white px-4 py-2 rounded-2xl text-sm">
          View Package
        </button>
        <div className="grid md:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-7 mt-10 w-full md:w-[70%]">
          {promotions.map((promotion, index) => (
            <div key={index} className="flex relative">
              <img src={promotion.img} alt="" className="" />
              <section className="linear-orange rounded-full px-4 py-2 text-white w-fit h-fit text-[12px] absolute right-[5%] top-[5%]">
                {promotion.price}
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
