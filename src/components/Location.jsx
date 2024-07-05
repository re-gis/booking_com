/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';

const Location = () => {
  const [mapLoading, setMapLoading] = useState(true);

  setTimeout(() => {
    setMapLoading(false);
  }, 2000);

  return (
    <div className='p-10 poppins-medium flex flex-col gap-10 w-full'>
      <div className='flex gap-7 md:flex-row max-md:flex-col'>
        <div className='w-[70%] h-full'>
          <div className='flex sm:flow-row max-sm:flex-col justify-between items-center py-3'>
            <h2 className='text-[26px] font-bold text-[#181E4B] volkhov-bold'>Serena Hotel</h2>
            <p className='text-[#DF6951] text-[25px]'>$1,000</p>
          </div>
          <p className='text-black'>
            Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque
            iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero
            nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat
            distinctio ut inventore aliquid et quasi
          </p>
          {mapLoading ? (
            <div className='w-full mt-10 bg-gray-300 rounded-lg animate-pulse' style={{ height: '450px' }}></div>
          ) : (
            <div className='w-full mt-10'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.492804802289!2d30.060157276001828!3d-1.9563285367276746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42ba4412995%3A0xeb7a3b7e5681a72d!2sKigali%20Serena%20Hotel!5e0!3m2!1sen!2srw!4v1719925298218!5m2!1sen!2srw'
                width='600'
                height='450'
                style={{ border: '0', width: '100%' }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          )}
        </div>
        <div className='w-[30%] h-full bg-gray-200 py-7 px-6 flex flex-col gap-5 justify-center items-center'>
          <h2 className='text-[36px] font-bold text-[#181E4B] volkhov-bold'>Reserve this stay</h2>
          <p className='text-center text-black'>
            Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque
            iste expedita est dolo.
          </p>
          <form action='' className='flex flex-col gap-5 w-full justify-center items-center'>
            <input
              type='text'
              placeholder='Full Names'
              className='py-5 px-6 focus:outline-none outline-none w-[90%]'
            />
            <input type='email' placeholder='Email' className='py-5 px-6 focus:outline-none outline-none w-[90%]' />
            <input type='text' placeholder='Phones' className='py-5 px-6 focus:outline-none outline-none w-[90%]' />
            <input type='text' placeholder='Country' className='py-5 px-6 focus:outline-none outline-none w-[90%]' />
            <input
              type='submit'
              className='bg-[#DF6951] text-white px-5 py-3 rounded-lg shadow-lg w-[50%] flex self-center'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Location;
