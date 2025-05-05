import React from 'react'
import starsBg from '@/src/assets/stars.png'
import gridLines from '@/src/assets/grid-lines.png'
import Link from 'next/link'
import Image from 'next/image'
import nimbusLogo from'@/src/assets/nimbus.png'

const CTA = () => {
  return (
    <>
      {/* Fixed Logo at the top */}
      <div className="fixed top-4 left-4 z-40">
        <Link href='/'>
          <Image src={nimbusLogo} alt='Nimbus Logo' className='h-12 w-12'/>
        </Link>
      </div>
      
      <section className='py-20 md:py-24'>
          <div className='container'>
              <div className='border border-white/15 py-24 rounded-xl overflow-hidden relative' style={{
                  backgroundImage: `url(${starsBg.src})`
              }}> <div className='absolute inset-0 bg-[rgb(232,112,52)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]' style={{
                  backgroundImage: `url(${gridLines.src})`
              }}></div>
                  <div className='relative'>
                      <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>Join the beta!</h2>
                      <p className='text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight'>Be the first to explore Nimbus! Get early access and stay in the loop as we build.</p>
                      <div className='flex justify-center mt-8'>
                          <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#ff8124] to-[#f71d11] shadow-[0px_0px_12px_#f28680]'>
                              <div className='absolute inset-0'>
                                  <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                                  <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                                  <div className='absolute inset-0 shadow-[0_0_10px_rgb(252,182,68,.7)_inset] rounded-lg'></div>
                              </div>
                              <span>Coming Soon...</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default CTA