"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import nimbusLogo from '../assets/nimbus.png';
import MenuIcon from '../assets/icon-menu.svg'
import Link from 'next/link';

function Header() {
  // State to track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`py-2 ${isMobileMenuOpen ? '' : 'border-b border-white/15'} md:border-none relative z-20`}>
        <div className='container'>
            <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto'>
                <div>
                    <div className=''>
                        <Link href='/'>
                          <Image src={nimbusLogo} alt='Nimbus Logo' className='h-12 w-12'/>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <nav className='flex gap-8 text-sm'>
                        <a 
                          href="#intro" 
                          onClick={(e) => {e.preventDefault(); scrollToSection('intro')}} 
                          className='text-white/70 hover:text-white transition'
                        >
                          What is Nimbus
                        </a>
                        <a 
                          href="#howitworks" 
                          onClick={(e) => {e.preventDefault(); scrollToSection('howitworks')}} 
                          className='text-white/70 hover:text-white transition'
                        >
                          How It Works
                        </a>
                        <a 
                          href="#usecase" 
                          onClick={(e) => {e.preventDefault(); scrollToSection('usecase')}} 
                          className='text-white/70 hover:text-white transition'
                        >
                          Use Cases
                        </a>
                        <a 
                          href="#pricing" 
                          onClick={(e) => {e.preventDefault(); scrollToSection('pricing')}} 
                          className='text-white/70 hover:text-white transition'
                        >
                          Pricing
                        </a>
                    </nav>
                </div>
                <div className="flex gap-4 items-center">
                    <Link href='/join-beta'>
                    <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#ff8124] to-[#f71d11] shadow-[0px_0px_12px_#f28680]'>
                        <div className='absolute inset-0'>
                            <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                            <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                            <div className='absolute inset-0 shadow-[0_0_10px_rgb(252,182,68,.7)_inset] rounded-lg'></div>
                        </div>
                        <span className="relative z-10">Join Beta</span>
                    </button>
                    </Link>
                    <button 
                      onClick={toggleMobileMenu} 
                      className='md:hidden'
                      aria-label="Toggle menu"
                    >
                      <Image src={MenuIcon} alt='Menu' />
                    </button>
                </div>
            </div>
            
            {/* Floating mobile menu with background and positioning fix */}
            {isMobileMenuOpen && (
              <div className='md:hidden absolute left-0 right-0 top-full z-50 px-4'>
                <nav className='flex flex-col items-center gap-6 text-base py-8'>
                  <a 
                    href="#intro" 
                    onClick={(e) => {e.preventDefault(); scrollToSection('intro')}} 
                    className='text-white font-medium hover:text-white/90 transition'
                  >
                    What is Nimbus
                  </a>
                  <a 
                    href="#howitworks" 
                    onClick={(e) => {e.preventDefault(); scrollToSection('howitworks')}} 
                    className='text-white font-medium hover:text-white/90 transition'
                  >
                    How It Works
                  </a>
                  <a 
                    href="#usecase" 
                    onClick={(e) => {e.preventDefault(); scrollToSection('usecase')}} 
                    className='text-white font-medium hover:text-white/90 transition'
                  >
                    Use Cases
                  </a>
                  <a 
                    href="#pricing" 
                    onClick={(e) => {e.preventDefault(); scrollToSection('pricing')}} 
                    className='text-white font-medium hover:text-white/90 transition'
                  >
                    Pricing
                  </a>
                </nav>
              </div>
            )}
        </div>
    </header>
  )
}

export default Header