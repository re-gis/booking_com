import React from "react";
import ill from "../assets/Illustration.png";
import ill1 from "../assets/Group.png";
import ill2 from "../assets/water-sport 1.png";
import ill3 from "../assets/taxi 1.png";

const About = () => {
  const steps = [
    {
      img: ill1,
      bgClass: "bg-yellow-300",
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      img: ill2,
      bgClass: "bg-orange-600",
      title: "Check Availability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      img: ill3,
      bgClass: "bg-teal-800",
      title: "Let’s Go",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <div className="py-16 px-[7%] flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 flex flex-col gap-7">
        <p className="text-[#DF6951] text-[15px]">Fast & Easy</p>
        <h2 className="text-3xl font-bold text-[#181E4B] volkhov-bold">
          Get Your Favourite <br />
          Resort Bookings
        </h2>
        <div className="flex flex-col gap-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flow-row items-center gap-5">
              <img
                src={step.img}
                alt=""
                className={`${step.bgClass} rounded-xl p-3`}
              />
              <section className="flex flex-col text-sm">
                <p className="text-[#5E6282] font-bold">{step.title}</p>
                <p className="text-[#5E6282] flex flex-wrap poppins-light">
                  {step.description}
                </p>
              </section>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={ill} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default About;
