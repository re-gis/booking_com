import React from "react";
import backgroundImage from "../assets/amaze.png";
import line from "../assets/Line-1.png";

const Amaze = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // width: "100vw",
  };

  return (
    <div style={divStyle}>
      <div className="py-20 px-[5%]">
        <p className="text-white text-4xl">
          {" "}
          Let’s make your <br />
          next holiday amazing
        </p>
        <img
          src={line}
          alt="Decorative Line"
          className=""
        />
      </div>
    </div>
  );
};

export default Amaze;
