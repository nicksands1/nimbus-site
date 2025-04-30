import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {[{ title: 'Title1', description: 'Desc1'}].map((item, index) => (
                <BentoGridItem 
                  key={index}
                  title={item.title}
                  description={item.description}
                   />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid