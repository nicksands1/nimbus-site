// import LogoIcon from '@/assets/logo.svg';
// import MenuIcon from '@/assets/menu.svg';

import Image from 'next/image'
import React from 'react'
import nimbusLogo from '../assets/nimbus.png';

function Header() {
  return (
    <header className='py-2 border-b border-white/15'>
        <div className='container'>
            <div className='flex justify-between'>
                <div>
                    <div className=''>
                        <Image src={nimbusLogo} alt='' className='h-12 w-12'/>
                    </div>
                </div>
                <div></div>
                <div className="flex gap-4 items-center">
                    <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#ff8124] to-[#f71d11] shadow-[0px_0px_12px_#f28680]'>
                        <div className='absolute inset-0'>
                            <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                            <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                            <div className='absolute inset-0 shadow-[0_0_10px_rgb(252,182,68,.7)_inset] rounded-lg'></div>
                        </div>
                        <span>Join Beta</span>
                    </button>
                    {/* <MenuIcon /> */}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header