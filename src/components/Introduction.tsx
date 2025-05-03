"use client"

import React, { useEffect, useRef, useState } from 'react'
import Tag from './Tag'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const text = `Nimbus transforms assets into functional communities where token owners gain access to exclusive content and experiences. Nimbus is the new standard of legitimacy in the crypto space—one where communities unite around genuine utility rather than hype cycles and empty promises.`
const words = text.split('');


const Introduction = () => {
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end']})

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])
    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest);
        })
    }, [wordIndex])

  return (
   <section className='mt-16 py-28'>
    <div className='container'>
        <div className='sticky top-20'>
            <div className='flex justify-center'>
                <Tag>Introducing Nimbus</Tag>
            </div>
            <div className='text-4xl text-center font-medium mt-10'>
                <span>Nimbus provides immediate utility with customizable web3 experiences.</span>{" "}
                <span className='text-white/15'>{words.map((word, wordIndex) => (
                    <span key={wordIndex} className={twMerge("transition duration-500", wordIndex < currentWord && 'text-white')}>{`${word}`}</span>
                ))}</span>
                <span className='text-yellow-400 block'>That&apos;s why we built Nimbus</span>
            </div>
        </div>
        <div className='h-[50vh]' ref={scrollTarget}></div>
    </div>
   </section>
  )
}

export default Introduction