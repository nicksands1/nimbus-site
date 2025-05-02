import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaRocket } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 
        md:-left-32 md:-top-20 h-screen" fill="red"/>
        <Spotlight className="-top-10 -left-full h-[80vh] 
        w-[50vw]" fill="yellow"/>
        <Spotlight className="top-28 left-80 h-[80vh]
        w-[50vw]" fill="orange"/>
      </div>

      <div className="h-screen w-full bg-black 
        flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center
       justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
          flex flex-col items-center justify center">
          <h2 className="uppercase tracking-widest text-xs text-center 
          text-yellow-300 max-w-80">Build With Nimbus
          </h2>

          <TextGenerateEffect 
          
            className="text-center text-[40px] md:text:5xl lg:text-6xl"
            words="Asset-gated site builder deployed on Solana"/>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            No code, No wait.
            </p>

            <a href="#roadmap">
              <MagicButton
                title="Explore Features"
                icon={<FaRocket />}
                position="right"
              />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero