import React from 'react'
import smilingnigga from '../../assets/images/smilingnigga.webp'
import Form from './Form'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${smilingnigga})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }} 
      className='min-h-screen w-full relative'
    >
      <div className='absolute inset-0 bg-gradient-to-tr h-full  from-black/20 to-black' />
      
      <div className='relative container mx-auto px-4 py-12 md:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
          
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='w-full lg:w-1/2 text-white'
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-4xl md:text-5xl xl:text-6xl font-bold leading-tight'
            >
              UNLOCK YOUR<br/> 
              <span className='text-blue-700'>POTENTIAL</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-base md:text-lg xl:text-2xl font-bold mt-6'
            >
              We are committed to providing you with the best possible experience and helping you achieve your goals. We adapt to your situation and
              customize our methodology specifically for you.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-6 mt-8"
            >
              {[
                { href: "https://wa.me/yourphonenumber", Icon: FaWhatsapp, text: "Contact by WhatsApp" },
                { href: "mailto:your@email.com", Icon: IoMdMail, text: "Contact by Email" },
                { href: "tel:+1234567890", Icon: FaPhone, text: "Contact by Phone" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                
                  className='flex items-center gap-3 hover:opacity-80 transition-opacity'
                >
                  <item.Icon className="text-2xl bg-blue-700 text-white rounded-full p-3 box-content" />
                  <p className='text-lg'>{item.text}</p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.8,
            }}
            className='w-full lg:w-1/2'
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Form />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero