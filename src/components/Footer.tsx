import React from 'react'

import Image from 'next/image'
import nimbusLogo from '../assets/nimbus.png';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15'>
        <div className='container'>
            <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
                <div className='flex gap-2 items-center lg:flex-1'>
                    <Image src={nimbusLogo} alt='' className='h-12 w-12'/>
                    <div className='font-medium'>Nimbus</div>
                </div>
                    <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
                    </nav>
                <div className='flex gap-5 lg:flex-1 lg:justify-end'>
                    <FaLinkedinIn className='h-4 w-4 text-white/40 hover:text-white text-sm' href='https://www.linkedin.com/company/nimbus-chain'/>
                    <FaInstagram className='h-4 w-4 text-white/40 hover:text-white text-sm' href='https://www.instagram.com/nimbus.chain'/>
                    <FaTiktok className='h-4 w-4 text-white/40 hover:text-white text-sm'/>
                    <FaYoutube className='h-4 w-4 text-white/40 hover:text-white text-sm'/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer