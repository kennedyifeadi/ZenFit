import React from 'react'
import { DynamicBacground } from '../Components/Ui/DynamicBacground'
import pushUp from "../assets/images/pushUp.webp"

export const Newsletter = () => {
  return (
    <div className='w-full h-max bg-transparent flex justify-center items-center p-4 md:p-8 relative border border-white'>
      <div className='w-full h-full relative rounded-3xl overflow-hidden '>
        <DynamicBacground image={pushUp}/>
        <div className='w-full h-full flex flex-col gap-8 md:gap-8 p-4 justify-evenly md:p-14 bg-gradient-to-r from-[#5286fa] from-15% to-[#5287fa38] relative'>
          <h1 className='text-white md:w-[60%] lg:text-5xl md:text-4xl text-2xl font-bold fontFam'>Would you like to receive our
          news?</h1>
          <p className='fontFam text-white text:[15px] md:text-[20px] font-medium'>Subscribe to our Newsletter!</p>
          <form action="" className='w-full md:w-[80%] lg:w-[60%] flex items-center px-[6px] bg-white rounded-full h-[8dvh] md:h-[10dvh] fontFam'>
              <input type="text" placeholder='Enter your email' className='px-4 text-[15px] w-[65%] md:w-[80%] rounded-full outline-0 h-full' />
              <button className='text-[16px] bg-[#5286fa] w-[35%] md:w-[20%] rounded-full h-[80%] text-white'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
