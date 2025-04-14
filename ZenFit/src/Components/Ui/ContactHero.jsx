import React from 'react'
import { DynamicBacground } from './Ui/DynamicBacground'
import smilingnigga from '../assets/images/smilingnigga.webp'
import Form from './Form'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactHero = () => {
  return (
    <section className='w-full flex-col md:flex-row justify-center text-white md:h-screen'>
      <div 
        className='w-full h-full relative' 
        style={{
          backgroundImage: `url(${smilingnigga})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='w-full h-full flex flex-col gap-5 md:flex-row bg-gradient-to-b from-black/90 to-transparent px-4 py-20'>
          <div>
            <h1 className='text-5xl font-bold'>UNLOCK YOUR<br/> <span className='text-blue-700'>POTENTIAL</span></h1>
            <p className='text-lg md:text-2xl font-bold'>
              We are committed to providing you with the best possible experience and helping you achieve your goals. We adapt to your situation and
              customize our methodology specifically for you.
            </p>
            <div className="flex flex-col gap-4 mt-8">
                <div className='flex items-center gap-2'>
                  <FaPhone className="text-2xl bg-blue-700 p-3" />
                  <p>Contact by Whatsapp</p>
                </div>
                <div className='flex items-center gap-2'>
                  <IoMdMail className="text-2xl text-black bg-blue-700 p-3" />
                  <p>Contact by Email</p>
                </div>
                <div className='flex items-center gap-2'>
                  <FaPhone className="text-2xl  bg-blue-700 p-3" />
                  <p>Contact by Phone</p>
                </div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  )
}

export default ContactHero