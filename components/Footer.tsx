import { socialMedia } from '@/data'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
          <p className='md:text-base text-sm md:font-normal font-light'>Copyright 2025 NimbusChain</p>
          
          <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
              <div 
                key={profile.id} 
                className='w-10 h-10 cursor-pointer flex justify-center items-center
                backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
              >
                <img 
                  src={profile.img} 
                  alt={profile.id} 
                  width={20} 
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer