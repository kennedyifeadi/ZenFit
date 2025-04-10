import React from 'react'

export const DynamicBacground = ({image}) => {
  return (
    <div className='w-full h-full top-0 absolute'>
        <img src={image} alt="backgroundImage" className='w-full h-full inset-0 object-cover' />
    </div>
  )
}
