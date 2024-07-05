import React from 'react';
import img1 from '../assets/Rectangle 19327.png'
import img2 from '../assets/Rectangle 19326.png'
import img3 from '../assets/Rectangle 19323.png'
import img4 from '../assets/Rectangle 19324.png'
import img5 from '../assets/Rectangle 19322.png'
import bed from '../assets/Rectangle 183.png'
import CustomButton from './CustomButton';

const Info = () => (
  <div className='p-10 poppins-medium flex flex-col gap-10 w-full'>
    <div className='flex gap-7 md:flex-row max-md:flex-col'>
      <div className='w-[70%] h-full'>
        <div className='flex sm:flow-row max-sm:flex-col justify-between items-center py-3'>
          <h2 className='text-[26px] font-bold text-[#181E4B] volkhov-bold'>Serena Hotel</h2>
          <p className='text-[#DF6951] text-[25px]'>1,000 $</p>
        </div>
        <p className='text-black'>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi </p>
        <div className='grid grid-rows-2 gap-4 mt-10'>
          <div className='grid grid-cols-3'>
            <img src={img1} alt="" />
            <img src={img4} alt="" className='col-span-2'/>
          </div>
          <div className='grid grid-cols-3'>
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
      <div className='w-[30%] h-full bg-gray-200 py-7 px-6 flex flex-col gap-5 justify-center items-center'>
      <h2 className='text-[36px] font-bold text-[#181E4B] volkhov-bold'>Reserve this stay</h2>
      <p className='text-center text-black'>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
      <form action="" className='flex flex-col gap-5 w-full justify-center items-center'>
        <input type="text" placeholder='Full Names' className='py-5 px-6 focus:outline-none outline-none w-[90%]'/>
        <input type="email" placeholder='Email' className='py-5 px-6 focus:outline-none outline-none w-[90%]'/>
        <input type="text" placeholder='Phones' className='py-5 px-6 focus:outline-none outline-none w-[90%]'/>
        <input type="text" placeholder='Country' className='py-5 px-6 focus:outline-none outline-none w-[90%]'/>
        <input type="submit" className='bg-[#DF6951] text-white px-5 py-3 rounded-lg shadow-lg w-[50%] flex self-center'/>
      </form>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center w-full gap-10'>
      <p className='text-[#DF6951] text-[26px]'>Availability Details</p>
      <div className='flex gap-12 md:flex-row max-md:flex-col w-full text-black'>
        <div className='w-[50%] h-full flex flex-col gap-4'>
          <p className='text-[#DF6951] text-[20px]'>Rooms</p>
          <div className='border border-gray-300 rounded-lg p-5 flex flex-row justify-between items-center w-full'>
            <img src={bed} alt="" />
            <section className='flex flex-col gap-2'>
              <p className='text-[23px]'>Supreme Cottage</p>
              <p className='text-[12px]'>Max Guests I Adult : 2 Child : 0 Max : 2</p>
            </section>
            <section className='flex flex-col gap-2'>
              <p className='text-[20px]'></p>
              <p className='text-[10px]'></p>
              <CustomButton
                text={'Select'}
                bgColor={'bg-[#F86800]'}
                textColor={'text-white'}
              />
            </section>
          </div>
          <div className='border border-gray-300 rounded-lg p-5 flex flex-row justify-between items-center'>
            <img src={bed} alt="" />
            <section className='flex flex-col gap-2'>
              <p className='text-[23px]'>Supreme Cottage</p>
              <p className='text-[12px]'>Max Guests I Adult : 2 Child : 0 Max : 2</p>
            </section>
            <section className='flex flex-col gap-2'>
              <p className='text-[20px]'></p>
              <p className='text-[10px]'></p>
              <CustomButton
                text={'Select'}
                bgColor={'bg-[#F86800]'}
                textColor={'text-white'}
              />
            </section>
          </div>
          <div className='border border-gray-300 rounded-lg p-5 flex flex-row justify-between items-center'>
            <img src={bed} alt="" />
            <section className='flex flex-col gap-2'>
              <p className='text-[23px]'>Supreme Cottage</p>
              <p className='text-[12px]'>Max Guests I Adult : 2 Child : 0 Max : 2</p>
            </section>
            <section className='flex flex-col gap-2'>
              <p className='text-[20px]'></p>
              <p className='text-[10px]'></p>
              <CustomButton
                text={'Select'}
                bgColor={'bg-[#F86800]'}
                textColor={'text-white'}
              />
            </section>
          </div>
        </div>
        <div className='w-[50%] h-full text-black flex flex-col gap-10'>
          <section className='flex flex-col gap-5'>
            <p className='text-[#DF6951] text-[20px]'>Amenities</p>
            <div className='flex flex-row justify-between items-center'>
              <ul className='flex flex-col gap-8'>
                <li>Garden view</li>
                <li>Wifi</li>
                <li>Free washer - in building</li>
                <li>Central air conditioning</li>
                <li>Refrigerator</li>
              </ul>
              <ul className='flex flex-col gap-5'>
                <li>Kitchen</li>
                <li>Pets allowed</li>
                <li>Dryer</li>
                <li>Security cameras </li>
                <li>Bicycles</li>
              </ul>
            </div>
          </section>
          <section className='flex flex-col gap-6'>
            <p className='text-[#DF6951] text-[20px]'>Breakfast</p>
            <ul className='flex flex-col gap-8'>
              <li>Garden view</li>
              <li>Wifi</li>
              <li>Free washer - in building</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
