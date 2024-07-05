import React from 'react';
import img1 from '../assets/Rectangle 19321 (6).png'
import img2 from '../assets/Rectangle 19321 (5).png'
import img3 from '../assets/Rectangle 19321 (4).png'
import img4 from '../assets/Rectangle 19321 (3).png'
import img5 from '../assets/Rectangle 19321 (2).png'
import img6 from '../assets/Rectangle 19321 (1).png'
import img7 from '../assets/Rectangle 19321.png'

const GalleryDiv = () => {
return(
  <div className='p-10 poppins-medium flex flex-col gap-10 w-full'>
    <div className='flex gap-7 md:flex-row max-md:flex-col'>
      <div className='w-[70%] h-full'>
        <div className='flex sm:flow-row max-sm:flex-col justify-between items-center py-3'>
          <h2 className='text-[26px] font-bold text-[#181E4B] volkhov-bold'>Serena Hotel</h2>
          <p className='text-[#DF6951] text-[25px]'>1,000 $</p>
        </div>
        <p className='text-black'>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi </p>
        <div className='w-fit flex flex-col gap-4 mt-10'>
          <div className='grid grid-cols-3 gap-3'>
           <div className='grid grid-rows-3 gap-6'>
            <img src={img5} alt="" className=''/>
            <img src={img6} alt="" className=''/>
            <img src={img7} alt="" className=''/>
           </div>
           <img src={img4} alt="" className='col-span-2'/>
          </div> 
          <div className='grid grid-rows-2 gap-6 overflow-hidden'>
           <div className='grid grid-cols-3 '>
            <img src={img3} alt="" className='col-span-2'/>
            <img src={img2} alt="" className='w-[90%] h-full'/>
           </div>
           <div className='grid grid-cols-3 gap-6'>
            <img src={img1} alt="" className='col-span-3'/>
           </div>
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
  </div>)
};

export default GalleryDiv;
