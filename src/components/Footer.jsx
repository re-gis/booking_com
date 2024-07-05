import React from "react";
import Logo from "../assets/logo (1).png";
import ic1 from "../assets/052-linkedin.png";
import ic2 from "../assets/025-messenger.png";
import ic3 from "../assets/Vector.png";
import ic4 from "../assets/097-twoo.png";
import footerMtn from "../assets/Footer img.png";
import CustomButton from "./CustomButton";

const Footer = () => (
  <footer className="relative px-[5%] lg:px-[10%]  py-10 poppins-medium w-screen mt-20 mb-[3rem]">
    <div className="flex flex-col gap-8">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-16">
        <div className="flex flex-col-reverse items-center gap-y-10  md:flex-row justify-between lg:justify-around flex-grow ">
          <div className="flex flex-col items-start w-full gap-3">
            <img src={Logo} alt="" className="w-[50%]" />
            <p className="text-[#757095] poppins-light text-[12px]">
              Travel helps companies <br /> manage payments easily.
            </p>
            <ul className="flex flex-row items-center gap-2">
              <li>
                <img src={ic1} alt="" className="w-full" />
              </li>
              <li>
                <img src={ic2} alt="" className="w-full" />
              </li>
              <li>
                <img src={ic3} alt="" className="w-full" />
              </li>
              <li>
                <img src={ic4} alt="" className="w-full" />
              </li>
            </ul>
          </div>
          <div className="flex  items-center justify-around gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[#181433] text-[17px]">Company</p>
              <ul className="poppins-regular text-[14px] flex flex-col gap-2">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Pricing</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#181433] text-[17px]">Company</p>
              <ul className="poppins-regular text-[14px] flex flex-col gap-2">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Pricing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-[#181433] text-[17px]">Join Our Newsletter</p>
          <div className="flex  bg-gray-100 w-full rounded-tr-lg rounded-br-lg">
            <input
              type="text"
              className="outline-none focus:outline-none bg-gray-100 text-[13px] p-4 w-full"
              placeholder="Enter Your Email address"
            />
            <CustomButton
              text={"Subscribe"}
              textColor={"text-white"}
              bgColor={"bg-[#DF6951]"}
            />
          </div>
          <p className="text-[15px] text-gray-400 text-sm">
            * Will send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>
      <hr className="w-full border-2 border-[#E5E5EA]" />
    </div>
    <div className="absolute right-0 bottom-0 w-[20%]">
      <img src={footerMtn} alt="" />
    </div>
  </footer>
);

export default Footer;
