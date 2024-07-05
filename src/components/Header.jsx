import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigateToDetail = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-screen bg-[#E4998A] lg:px-[15%] max-lg:px-[10%] py-10 poppins-regular">
      <div className="flex flex-row justify-between items-center">
        <div onClick={handleNavigateToDetail} className="cursor-pointer">
          <img src={Logo} alt="" className="w-full" />
        </div>
        <ul className="flex flex-row justify-between text-white w-[50%] li:cursor-pointer max-lg:hidden">
          <li
            className="nav cursor-pointer"
            onClick={() => navigate("/detail")}
          >
            Stays
          </li>
          <li
            className="nav cursor-pointer"
            onClick={() => navigate("/archives")}
          >
            Archives
          </li>
          <li className="nav cursor-pointer">Car Rentals</li>
          <li className="nav cursor-pointer">Attractions</li>
        </ul>
        <div className="flex items-center">
          <div className="hidden md:block">
            <CustomButton
              text={"Login"}
              bgColor={"bg-white"}
              textColor={"text-[#E4998A]"}
            />
          </div>
          <button
            onClick={toggleMenu}
            className="ml-4 lg:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="absolute top-16 right-0 mt-14 bg-white  w-full  shadow-lg rounded-lg !z-30"
          onClick={() => setIsMenuOpen(false)}
        >
          <ul className="text-black text-center py-2">
            <li
              className="py-2 cursor-pointer border-b"
              onClick={() => navigate("/detail")}
            >
              Stays
            </li>
            <li
              className="py-2 cursor-pointer border-b"
              onClick={() => navigate("/archives")}
            >
              Archives
            </li>
            <li className="py-2 cursor-pointer border-b">Car Rentals</li>
            <li className="py-2 cursor-pointer border-b">Attractions</li>
          </ul>
          <div className="flex items-center justify-center pb-2">
            <CustomButton
              text={"Login"}
              bgColor={"bg-[#DF6951]"}
              textColor={"text-white"}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
