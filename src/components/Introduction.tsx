import React from 'react'
import Tag from './Tag'

const text = `Nimbus transforms assets into functional communities where token owners gain access to exclusive content and experiences. Nimbus is the new standard of legitimacy in the crypto space—one where communities unite around genuine utility rather than hype cycles and empty promises.`

const Introduction = () => {
  return (
   <section className='mt-16 py-28'>
    <div className='container'>
        <div className='flex justify-center'>
            <Tag>Introducing Nimbus</Tag>
        </div>
        <div className='text-4xl text-center font-medium mt-10'>
            <span>Nimbus provides immediate utility with customizable web3 experiences.</span>{" "}
            <span className='text-white/15'>{text}</span>
            <span className='text-yellow-400 block'>That&apos;s why we built Nimbus</span>
        </div>
    </div>
   </section>
  )
}

export default Introduction