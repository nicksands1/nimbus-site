"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import nimbusLogo from '../assets/nimbus.png';
import MenuIcon from '../assets/icon-menu.svg'

function Header() {
  // State to track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`py-2 ${isMobileMenuOpen ? '' : 'border-b border-white/15'} md:border-none`}>
        <div className='container'>
            <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto'>
                <div>
                    <div className=''>
                        <Image src={nimbusLogo} alt='Nimbus Logo' className='h-12 w-12'/>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <nav className='flex gap-8 text-sm'>
                        <a href='#' className='text-white/70 hover:text-white transition'>What is Nimbus</a>
                        <a href='#' className='text-white/70 hover:text-white transition'>How It Works</a>
                        <a href='#' className='text-white/70 hover:text-white transition'>Use Cases</a>
                        <a href='#' className='text-white/70 hover:text-white transition'>Pricing</a>
                    </nav>
                </div>
                <div className="flex gap-4 items-center">
                    <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#ff8124] to-[#f71d11] shadow-[0px_0px_12px_#f28680]'>
                        <div className='absolute inset-0'>
                            <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                            <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                            <div className='absolute inset-0 shadow-[0_0_10px_rgb(252,182,68,.7)_inset] rounded-lg'></div>
                        </div>
                        <span>Join Beta</span>
                    </button>
                    <button 
                      onClick={toggleMobileMenu} 
                      className='md:hidden'
                      aria-label="Toggle menu"
                    >
                      <Image src={MenuIcon} alt='Menu' />
                    </button>
                </div>
            </div>
            
            {/* Mobile menu dropdown */}
            {isMobileMenuOpen && (
              <div className='md:hidden mt-4 bg-black/60 backdrop-blur-lg rounded-lg p-4 border border-white/15 max-w-2xl mx-auto'>
                <nav className='flex flex-col gap-4 text-sm'>
                  <a href='#' className='text-white/70 hover:text-white transition py-2'>What is Nimbus</a>
                  <a href='#' className='text-white/70 hover:text-white transition py-2'>How It Works</a>
                  <a href='#' className='text-white/70 hover:text-white transition py-2'>Use Cases</a>
                  <a href='#' className='text-white/70 hover:text-white transition py-2'>Pricing</a>
                </nav>
              </div>
            )}
        </div>
    </header>
  )
}

export default Header