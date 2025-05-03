import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const UseCases = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        Use <span className='text-yellow-400'> Cases</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card, index) => (
          <Button
            key={card.title || index}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-yellow-900'
            duration={Math.floor(Math.random() * 10000)}
          >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 md:p-5 lg:p-10 gap-2'>
              <div className='lg:ms-5'>
                <h1 className='text-start text-xl md:text-2xl font-bold'>
                  {card.title}
                </h1>
                <p className='text-start text-white-100 mt-3 font-semibold'>
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default UseCases
