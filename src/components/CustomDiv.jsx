import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import CustomButton from './CustomButton';
import { BsCalendar2DateFill } from 'react-icons/bs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";


const CustomDiv = ({ id, img, date, people, desc, amount, place }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className='flex flex-col p-3 rounded-xl gap-4 shadow-xl cursor-pointer  poppins-medium max-md:w-full'>
      <div className='w-full rounded-tr-xl rounded-tl-xl'>
        <img src={img} alt="" className='w-full' />
        <section className='flex flex-row justify-between items-center px-4 py-3 text-white bg-[#DF6951]'>
          <div className='flex items-center gap-3'>
            <BsCalendar2DateFill />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='w-[56%] bg-transparent text-white focus:outline-none outline-none text-[12px]'/>
          </div>
          <p className='text-[12px]'>{people}</p>
        </section>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <h2 className='text-[26px] font-bold text-[#181E4B] volkhov-bold'>{place}</h2>
        {/* <FaStar className='text-[#DF6951]' /> */}
        <p className='text-[15px] text-[#181E4B]'>{desc}</p>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-black'>{amount}</p>
          <CustomButton
            text={'Check Availability'}
            bgColor={'bg-[#DF6951]'}
            textColor={'text-white'}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomDiv;
